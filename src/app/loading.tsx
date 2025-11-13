export default function Loading() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
      <div className="text-center">
        <div className="spinner mx-auto mb-4" aria-label="Loading" />
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

