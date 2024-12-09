import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-4 text-red-500">404</h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
