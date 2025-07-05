export function Creator() {
  return (
    <section className="mb-16 border-t pt-8 text-center">
      <p className="text-gray-600 mb-2">Made with by</p>
      <h3 className="text-xl font-bold">Virti Jain</h3>
      <div className="mt-2 flex justify-center gap-4">
        <a
          href="https://github.com/virtijain"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/virtijain"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
