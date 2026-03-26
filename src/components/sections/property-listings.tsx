
import { PROPERTIES } from "@/app/data/properties";
import { PropertyCard } from "@/components/ui/property-card";

export function PropertyListings() {
  return (
    <section id="listings" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <p className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold mb-4">
              Featured Collections
            </p>
            <h2 className="text-4xl md:text-5xl font-headline italic">
              Exquisite Residences <br />
              <span className="not-italic">From Around The Globe.</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <button className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-accent border-b border-accent pb-2 transition-all">
              View All Properties
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-20 flex justify-center md:hidden">
          <button className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-accent border-b border-accent pb-2 transition-all">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}
