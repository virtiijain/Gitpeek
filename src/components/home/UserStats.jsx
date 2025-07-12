import { FaBook, FaGithub } from "react-icons/fa";
import { MdAccessTime, MdOutlineStar } from "react-icons/md";

export default function UserStats({ userData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 text-left">
      <Stat title={userData.mostUsedLang} label="Most Used Language" icon={<FaBook className="text-blue-500" />} />
      <Stat title={userData.devType} label="Likely Role" icon={<MdOutlineStar className="text-green-500" />} />
      <Stat title={`${userData.years} years`} label="GitHub Experience" icon={<MdAccessTime className="text-indigo-500" />} />
      <Stat
        title={userData.isActive ? "Active this month" : "Not recently active"}
        label="Recent Activity"
        icon={<FaGithub className="text-emerald-500" />}
      />
      <Stat title={userData.topStarredRepo?.name || "N/A"} label="Top Starred Repo" icon={<MdOutlineStar className="text-purple-500" />} colSpan />
    </div>
  );
}

function Stat({ title, label, icon, colSpan }) {
  return (
    <div className={`space-y-1 ${colSpan ? "sm:col-span-2" : ""}`}>
      <h3 className="text-base lg:text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
        {icon}
        <span>{label}</span>
      </div>
    </div>
  );
}
