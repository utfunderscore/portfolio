import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-transparent p-4 pt-8">
      <div className="max-w-4xl mx-auto bg-white/80 dark:bg-neutral-900/80 shadow-lg border border-gray-100 dark:border-neutral-700 p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Project Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The project you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to Portfolio
        </Link>
      </div>
    </main>
  );
}