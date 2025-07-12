import Image from "next/image";
import { FaGithub, FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";
import { GoRepo } from "react-icons/go";

export default function UserProfileCard({ userData }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
      <Image
        src={userData.avatar_url}
        alt={userData.login}
        width={112}
        height={112}
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
  );
}
