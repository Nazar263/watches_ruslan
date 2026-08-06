import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="text-center px-4">
        <h1 className="font-heading text-6xl sm:text-8xl font-bold text-rolex-green mb-4">
          404
        </h1>
        <p className="text-text-secondary text-lg mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-rolex-green text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wider hover:bg-rolex-green-light hover:shadow-[0_8px_35px_rgba(0,96,57,0.4)] transition-all duration-500 active:scale-95"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
