
type ProductCardProps = {
  title: string;
  description: string;
  status: string;
  cta: string;
};

export default function ProductCard({
  title,
  description,
  status,
  cta,
}: ProductCardProps) {
  return (
    <div className="rounded-xl border border-gray-800 bg-[#121a2f] p-6">
      <span className="inline-block rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
        {status}
      </span>

      <h3 className="mt-4 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-gray-400">
        {description}
      </p>
<a
  href="#contact"
  className="mt-6 inline-block rounded-lg bg-purple-600 px-4 py-2 font-medium text-white transition hover:bg-purple-500"
>
  {cta}
</a>
      
    </div>
  );
}
