export default function SearchBar({ username, setUsername, handleSearch, loading }) {
  return (
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
        className="w-full cursor-pointer sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl transition shadow-md hover:opacity-90"
      >
        {loading ? "Searching..." : "Explore"}
      </button>
    </div>
  );
}
