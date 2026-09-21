type CaseStudyCardProps = {
  title: string;
  description: string;
};

export default function CaseStudyCard({
  title,
  description,
}: CaseStudyCardProps) {
  return (
    <div className="rounded-xl border border-gray-800 bg-[#121a2f] p-6">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-gray-400">
        {description}
      </p>
    </div>
  );
}