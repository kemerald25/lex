import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-20">
      {/* Background with Zoom Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-zoom-in brightness-50"
        style={{ backgroundImage: `url('https://picsum.photos/seed/luxury-hero/1920/1080')` }}
      />
      
      {/* Dark Overlay - refined gradient for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />

      {/* Content - with specific bottom padding to account for FilterBar overlay */}
      <div className="relative z-10 container mx-auto px-6 text-center pb-20 md:pb-32">
        <div className="animate-fade-in-up flex flex-col items-center">
          <p className="text-accent uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold mb-8">
            Refined Living Redefined
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-headline mb-8 text-white max-w-6xl mx-auto leading-[1.05] italic">
            Architectural Masterpieces <br /> 
            <span className="not-italic text-accent">Curated For You.</span>
          </h1>
          <p className="text-white/80 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            LuxuryEstate Nexus is the global authority for high-end residential real estate, representing the world&apos;s most exceptional properties.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 rounded-none px-12 py-8 text-[11px] uppercase tracking-[0.2em] font-bold group h-auto">
              Explore Portfolio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 rounded-none px-12 py-8 text-[11px] uppercase tracking-[0.2em] font-bold h-auto">
              Private Concierge
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - repositioned for better visibility */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center opacity-30">
        <div className="w-[1px] h-12 bg-accent mb-2" />
        <span className="text-[9px] uppercase tracking-widest text-accent font-bold">Scroll</span>
      </div>
    </section>
  );
}
