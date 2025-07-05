export function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto py-15 px-6 text-center">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-10">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          "Enter a GitHub username",
          "We fetch the data from GitHub API",
          "You explore detailed charts & insights",
        ].map((step, i) => (
          <div key={i} className="p-6 border rounded-lg shadow-sm">
            <div className="text-5xl font-bold text-blue-600 mb-4">{i + 1}</div>
            <p className="text-lg">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
