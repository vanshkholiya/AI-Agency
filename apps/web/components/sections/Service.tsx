"use client";

import { useEffect, useState } from "react";
import ServiceCard from "@/components/cards/ServiceCard";
import { getServices } from "@/lib/api-client";

type Service = {
  id: number;
  name: string;
  description: string;
};

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getServices()
      .then((data: Service[]) => {
        setServices(data);
      })
      .catch(() => {
        setError("Services load nahi ho paayi. Backend check karo.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section id="services" className="px-8 py-20">
      <h2 className="text-3xl font-bold">Our Services</h2>

      <p className="mt-3 text-gray-400">
        AI solutions designed around real business needs.
      </p>

      {loading && (
        <p className="mt-8 text-gray-400">Loading services...</p>
      )}

      {error && <p className="mt-8 text-red-400">{error}</p>}

      {!loading && !error && services.length > 0 && (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.name}
              description={service.description}
            />
          ))}
        </div>
      )}
    </section>
  );
}