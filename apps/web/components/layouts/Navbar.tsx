export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <h1 className="text-2xl font-bold">AI Agency</h1>

      <div className="hidden gap-6 md:flex">
        <a href="#services">Services</a>
        <a href="#products">Products</a>
        <a href="#solutions">Solutions</a>
        <a href="#industries">Industries</a>
        <a href="#about">About</a>
      </div>

      <a
        href="#contact"
        className="rounded-lg bg-[#6c63ff] px-5 py-3 font-semibold"
      >
        Book a Call
      </a>
    </nav>
  );
}