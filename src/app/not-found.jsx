export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-500 mb-4">The user or page you're looking for doesn't exist.</p>
      <a href="/" className="text-blue-500 underline">Go back to Homepage</a>
    </div>
  );
}
