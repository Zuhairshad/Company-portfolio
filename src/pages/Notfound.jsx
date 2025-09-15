export default function NotFound() {
    return (
      <main className="min-h-[60vh] grid place-items-center px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-medium text-blue-600">404</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Page not found</h1>
          <p className="mt-2 text-slate-600">The page you’re looking for doesn’t exist or was moved.</p>
          <a href="/" className="inline-block mt-6 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Go home
          </a>
        </div>
      </main>
    );
  }
  