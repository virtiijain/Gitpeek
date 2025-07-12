// hooks/useGithubProfile.js
import { useState } from "react";

export function useGithubProfile() {
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
      const reposRes = await fetch(profileData.repos_url, {
        headers: {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
      });
      const repos = await reposRes.json();

      const langCount = {};
      repos.forEach((repo) => {
        if (repo.language) {
          langCount[repo.language] = (langCount[repo.language] || 0) + 1;
        }
      });

      const mostUsedLang = Object.entries(langCount).sort(
        (a, b) => b[1] - a[1]
      )[0]?.[0];

      let devType = "Developer";
      if (mostUsedLang === "JavaScript" || mostUsedLang === "TypeScript")
        devType = "Frontend Developer";
      else if (mostUsedLang === "Python")
        devType = "Data Scientist / Backend Developer";
      else if (mostUsedLang === "Java, Node")
        devType = "Android / Backend Developer";
      else if (mostUsedLang === "Go" || mostUsedLang === "Rust")
        devType = "Systems Developer";

      const joinYear = new Date(profileData.created_at).getFullYear();
      const years = new Date().getFullYear() - joinYear;
      const lastUpdated = new Date(profileData.updated_at);
      const isActive =
        Date.now() - lastUpdated.getTime() < 30 * 24 * 60 * 60 * 1000;
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

  return { username, setUsername, handleSearch, userData, loading, error };
}
