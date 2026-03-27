
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { FilterBar } from "@/components/filters/filter-bar";
import { PropertyListings } from "@/components/sections/property-listings";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Advanced Filter Bar - Overlays between Hero and Listings */}
      <FilterBar />

      {/* Property Listings Section */}
      <PropertyListings />

      {/* Lifestyle Call to Action Section */}
      <section className="py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-fixed brightness-50"
          style={{ backgroundImage: `url('https://picsum.photos/seed/lifestyle/1920/1080')` }}
        />
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-accent uppercase tracking-[0.5em] text-[10px] font-bold mb-8 italic">Lifestyle Concierge</p>
            <h2 className="text-4xl md:text-6xl font-headline italic text-foreground mb-10 leading-tight">
              Beyond Real Estate. <br />
              A Legacy of <span className="text-accent not-italic uppercase tracking-tight text-4xl md:text-5xl">Elegance</span>.
            </h2>
            <p className="text-lg text-foreground/80 font-light mb-12 leading-relaxed">
              We provide access to an exclusive world of elite living. From private aviation partnerships to off-market art acquisitions, our concierge ensures your transition is seamless.
            </p>
            <button className="bg-foreground text-background px-12 py-5 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-accent hover:text-accent-foreground transition-all">
              Request Membership
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
