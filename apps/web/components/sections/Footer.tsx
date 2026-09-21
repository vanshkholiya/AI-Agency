export default function Footer() {
  return (
    <footer className="border-t border-gray-800 px-8 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-gray-400">
          © 2026 AI Agency. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#services" className="hover:text-white">
            Services
          </a>

          <a href="#products" className="hover:text-white">
            Products
          </a>

          <a href="#about" className="hover:text-white">
            About
          </a>

          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}