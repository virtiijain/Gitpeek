"use client";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaBook,
  FaUserFriends,
  FaGithub,
} from "react-icons/fa";
import { GoRepo, GoGitPullRequest } from "react-icons/go";
import { MdAccessTime, MdOutlineStar } from "react-icons/md";

export function HomeHero() {
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
      // Fetch user profile
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
      else if (mostUsedLang === "Java") devType = "Android / Backend Developer";
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
    <section className="min-h-screen mx-auto max-w-7xl flex flex-col items-center justify-center px-4 py-20 transition-colors">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
          Discover GitHub Profiles Effortlessly
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10">
          Search by username to get rich insights on languages, contributions,
          and developer profile.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-xl mb-12">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white dark:bg-gray-800 transition"
        />
        <button
          onClick={handleSearch}
          className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition shadow-md"
        >
          {loading ? "Searching..." : "Explore"}
        </button>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {userData && (
        <div className="w-full max-w-5xl px-4 text-black dark:text-white">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-28 h-28 rounded-full shadow-lg transition hover:scale-105 duration-300"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {userData.name || userData.login}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-1 flex items-center justify-center sm:justify-start gap-2">
                <FaGithub />@{userData.login} •{" "}
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

          {/* Insights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base leading-relaxed">
            <p className="flex items-center gap-2">
              <FaBook className="text-blue-600" />
              <span>
                <strong className="dark:text-gray-300">
                  Most Used Language:
                </strong>{" "}
                {userData.mostUsedLang}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineStar className="text-green-600" />
              <span>
                <strong className="dark:text-gray-300">Likely Role:</strong>{" "}
                {userData.devType}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <MdAccessTime className="text-indigo-600" />
              <span>
                <strong className="dark:text-gray-300">
                  GitHub Experience:
                </strong>{" "}
                {userData.years} years
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaGithub className="text-emerald-600" />
              <span>
                <strong className="dark:text-gray-300">Recent Activity:</strong>{" "}
                {userData.isActive
                  ? "Active this month"
                  : "Not recently active"}
              </span>
            </p>
            <p className="flex items-center gap-2 sm:col-span-2">
              <GoGitPullRequest className="text-pink-600" />
              <span>
                <strong className="dark:text-gray-300">Pull Requests:</strong>{" "}
                {userData.pullRequestCount}
              </span>
            </p>
            <p className="flex items-center gap-2 sm:col-span-2">
              <MdOutlineStar className="text-purple-600" />
              <span>
                <strong className="dark:text-gray-300">
                  Top Starred Repo:
                </strong>{" "}
                {userData.topStarredRepo?.name || "N/A"}
              </span>
            </p>
          </div>

          {/* Chart */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              GitHub Contributions (Last 12 Months)
            </h3>
            <img
              src={`https://ghchart.rshah.org/${userData.login}`}
              alt="GitHub contribution chart"
              className="w-full max-w-3xl rounded-md border border-gray-300 dark:border-gray-700"
            />
          </div>
        </div>
      )}
    </section>
  );
}
