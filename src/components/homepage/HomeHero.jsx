"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaBook,
  FaUserFriends,
  FaGithub,
} from "react-icons/fa";
import { GoRepo } from "react-icons/go";
import { MdAccessTime, MdOutlineStar } from "react-icons/md";

export default function HomeHero() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!username.trim()) return;
    setLoading(true);
    setError("");
    setUserData(null);
    try {
      const profileRes = await fetch(
        `https://api.github.com/users/${username}`,
        {
          headers: {
            Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          },
        }
      );

      if (!profileRes.ok) throw new Error("User not found");

      const profileData = await profileRes.json();

      // Fetch user repos
      const reposRes = await fetch(profileData.repos_url, {
        headers: {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
      });

      const repos = await reposRes.json();

      // Count languages
      const langCount = {};
      repos.forEach((repo) => {
        if (repo.language) {
          langCount[repo.language] = (langCount[repo.language] || 0) + 1;
        }
      });

      const mostUsedLang = Object.entries(langCount).sort(
        (a, b) => b[1] - a[1]
      )[0]?.[0];

      // Guess developer type
      let devType = "Developer";
      if (mostUsedLang === "JavaScript" || mostUsedLang === "TypeScript")
        devType = "Frontend Developer";
      else if (mostUsedLang === "Python")
        devType = "Data Scientist / Backend Developer";
      else if (mostUsedLang === "Java, Node")
        devType = "Android / Backend Developer";
      else if (mostUsedLang === "Go" || mostUsedLang === "Rust")
        devType = "Systems Developer";

      // GitHub experience
      const joinYear = new Date(profileData.created_at).getFullYear();
      const years = new Date().getFullYear() - joinYear;

      // Recent activity
      const lastUpdated = new Date(profileData.updated_at);
      const isActive =
        Date.now() - lastUpdated.getTime() < 30 * 24 * 60 * 60 * 1000;

      // Top starred repo
      const topStarredRepo = repos.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      )[0];

      setUserData({
        ...profileData,
        mostUsedLang: mostUsedLang || "N/A",
        devType,
        years,
        isActive,
        topStarredRepo,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center">
      <header className="w-full dark:bg-gray-950 py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            Your Developer Insight Tool
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-900 bg-clip-text text-transparent leading-tight">
            Discover GitHub Profiles Effortlessly
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
            Search by username to explore insights on languages, contributions,
            activity, and more.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mt-10">
            <input
              type="text"
              placeholder="Enter GitHub username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black dark:text-white dark:bg-gray-800 transition"
            />
            <button
              onClick={handleSearch}
              aria-label="Explore GitHub user"
              className="w-full cursor-pointer sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl transition shadow-md hover:opacity-90"
            >
              {loading ? "Searching..." : "Explore"}
            </button>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-6">
            Built using the{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              GitHub API
            </span>
          </p>
        </div>
      </header>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {userData && (
        <div className="mx-auto max-w-7xl px-6 text-black dark:text-white">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Image
              src={userData.avatar_url}
              alt={userData.login}
              width={112}
              height={112}
              loading="lazy"
              className="w-28 h-28 rounded-full shadow-lg transition hover:scale-105 duration-300"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {userData.name || userData.login}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-1 flex items-center justify-center sm:justify-start gap-2">
                <FaGithub />@{userData.login} |{" "}
                <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800 dark:hover:text-blue-400 transition"
                >
                  View Profile
                </a>
              </p>
              <div className="flex flex-wrap gap-4 mt-3 justify-center sm:justify-start text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <FaMapMarkerAlt /> {userData.location || "N/A"}
                </div>
                <div className="flex items-center gap-1">
                  <GoRepo /> {userData.public_repos} Repos
                </div>
                <div className="flex items-center gap-1">
                  <FaUserFriends /> {userData.followers} Followers
                </div>
              </div>
            </div>
          </div>

          <hr className="my-8 border-gray-300 dark:border-gray-600" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 text-left">
            {/* Most Used Language */}
            <div className="space-y-1">
              <h3 className="text-base lg:text-lg font-medium text-gray-900 dark:text-white">
                {userData.mostUsedLang}
              </h3>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <FaBook className="text-blue-500" />
                <span>Most Used Language</span>
              </div>
            </div>

            {/* Likely Role */}
            <div className="space-y-1">
              <h3 className="text-base lg:text-lg font-medium text-gray-900 dark:text-white">
                {userData.devType}
              </h3>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <MdOutlineStar className="text-green-500" />
                <span>Likely Role</span>
              </div>
            </div>

            {/* GitHub Experience */}
            <div className="space-y-1">
              <h3 className="text-base lg:text-lg font-medium text-gray-900 dark:text-white">
                {userData.years} years
              </h3>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <MdAccessTime className="text-indigo-500" />
                <span>GitHub Experience</span>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="space-y-1">
              <h3 className="text-base lg:text-lg font-medium text-gray-900 dark:text-white">
                {userData.isActive
                  ? "Active this month"
                  : "Not recently active"}
              </h3>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <FaGithub className="text-emerald-500" />
                <span>Recent Activity</span>
              </div>
            </div>

            {/* Top Starred Repo */}
            <div className="space-y-1 sm:col-span-2">
              <h3 className="text-base lg:text-lg font-medium text-gray-900 dark:text-white">
                {userData.topStarredRepo?.name || "N/A"}
              </h3>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <MdOutlineStar className="text-purple-500" />
                <span>Top Starred Repo</span>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-base lg:text-lg font-semibold text-gray-800 dark:text-white mb-2">
              GitHub Contributions (Last 12 Months)
            </h3>
            <img
              src={`https://ghchart.rshah.org/${userData.login}`}
              alt="GitHub contribution chart"
              width={900}
              height={120}
              className="w-full max-w-3xl p-2 rounded-md border border-gray-300 dark:border-gray-700"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </main>
  );
}
