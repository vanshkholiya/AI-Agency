export default function Contact() {
  return (
    <section id="contact" className="px-8 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold">
          Ready to Build with AI?
        </h2>

        <p className="mt-4 text-gray-400">
          Let&apos;s discuss your business needs and find the right AI
          solution, automation, or custom development approach.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded-lg bg-[#6c63ff] px-6 py-3 font-semibold transition hover:opacity-90">
            Book a Call
          </button>

          <button className="rounded-lg border border-gray-700 px-6 py-3 font-semibold transition hover:bg-[#121a2f]">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
}