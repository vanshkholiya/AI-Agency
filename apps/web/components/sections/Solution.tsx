import { solutions } from "@/data/solutions";
import SolutionCard from "@/components/cards/SolutionCard";

export default function Solutions() {
  return (
    <section id="solutions" className="px-8 py-20">
      <h2 className="text-3xl font-bold">Solutions & Use Cases</h2>

      <p className="mt-3 text-gray-400">
        AI solutions designed to solve real business problems.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {solutions.map((solution) => (
          <SolutionCard
            key={solution.id}
            title={solution.title}
            description={solution.description}
          />
        ))}
      </div>
    </section>
  );
}
