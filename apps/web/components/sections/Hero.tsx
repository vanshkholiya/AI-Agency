export default function Hero() {
  return (
    <section className="px-8 py-24 text-center">
      <p className="mb-4 text-[#6c63ff]">
        AI CONSULTING • AUTOMATION • AI PRODUCTS
      </p>

      <h2 className="mx-auto max-w-4xl text-5xl font-bold">
        Build Smarter Businesses with AI
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
        We build AI-powered products, automations, and custom business
        solutions across industries.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#contact"
          className="rounded-lg bg-[#6c63ff] px-6 py-3 font-semibold"
        >
          Book a Call
        </a>

        <a
          href="#products"
          className="rounded-lg border border-gray-700 px-6 py-3"
        >
          Explore Products
        </a>
      </div>
    </section>
  );
}