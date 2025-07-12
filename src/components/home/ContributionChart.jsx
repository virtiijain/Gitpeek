export default function ContributionChart({ login }) {
  return (
    <div className="mt-10">
      <h3 className="text-base lg:text-lg font-semibold text-gray-800 dark:text-white mb-2">
        GitHub Contributions (Last 12 Months)
      </h3>
      <img
        src={`https://ghchart.rshah.org/${login}`}
        alt="GitHub contribution chart"
        width={900}
        height={120}
        className="w-full max-w-3xl p-2 rounded-md border border-gray-300 dark:border-gray-700"
        loading="lazy"
      />
    </div>
  );
}
