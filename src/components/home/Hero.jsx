"use client";
import { useGithubProfile } from "../../hooks/useGithubProfile";
import SearchBar from "./SearchBar";
import UserProfileCard from "./UserProfileCard";
import UserStats from "./UserStats";
import ContributionChart from "./ContributionChart";

export default function HomeHero() {
  const {
    username,
    setUsername,
    handleSearch,
    userData,
    loading,
    error,
  } = useGithubProfile();

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

          <SearchBar
            username={username}
            setUsername={setUsername}
            handleSearch={handleSearch}
            loading={loading}
          />

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
        <>
          <UserProfileCard userData={userData} />
          <UserStats userData={userData} />
          <ContributionChart login={userData.login} />
        </>
      )}
    </main>
  );
}
