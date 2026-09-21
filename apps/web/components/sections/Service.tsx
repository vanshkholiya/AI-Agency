import { services } from "@/data/services";
import ServiceCard from "@/components/cards/ServiceCard";

export default function Services() {
  return (
    <section id="services" className="px-8 py-20">
      <h2 className="text-3xl font-bold">Our Services</h2>

      <p className="mt-3 text-gray-400">
        AI solutions designed around real business needs.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}