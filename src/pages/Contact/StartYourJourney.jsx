export default function StartYourJourney() {
  return (
    <section className="relative flex items-center justify-center bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-8 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-teal-600 shadow-sm transition hover:bg-gray-50">
            <span className="text-lg">✦</span>
            GET IN TOUCH
          </button>
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
          Start Your{" "}
          <span className="font-serif italic text-teal-600">
            Journey
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
          Ready to transform your business? Let&apos;s discuss how{" "}
          <span className="font-medium text-gray-700">METROSERV</span>{" "}
          can help you achieve your goals.
        </p>
      </div>
    </section>
  );
}
