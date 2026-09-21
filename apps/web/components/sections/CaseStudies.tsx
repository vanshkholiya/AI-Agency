import { caseStudies } from "@/data/case-studies";
import CaseStudyCard from "@/components/cards/CaseStudyCard";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="px-8 py-20">
      <h2 className="text-3xl font-bold">Case Studies</h2>

      <p className="mt-3 text-gray-400">
        Examples of how AI can solve real business problems.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard
            key={caseStudy.id}
            title={caseStudy.title}
            description={caseStudy.description}
          />
        ))}
      </div>
    </section>
  );
}