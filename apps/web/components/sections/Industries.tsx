import { industries } from "@/data/industries";
import IndustryCard from "@/components/cards/IndustryCard";

export default function Industries() {
  return (
    <section id="industries" className="px-8 py-20">
      <h2 className="text-3xl font-bold">Industries</h2>

      <p className="mt-3 text-gray-400">
        AI solutions across multiple industries.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry) => (
          <IndustryCard
            key={industry.id}
            title={industry.title}
            description={industry.description}
          />
        ))}
      </div>
    </section>
  );
}