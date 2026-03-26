
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center pt-20">
      {/* Background with Zoom Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-zoom-in brightness-[0.4]"
        style={{ backgroundImage: `url('https://picsum.photos/seed/luxury-hero/1920/1080')` }}
      />
      
      {/* Refined Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/90" />
      <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px]" />

      {/* Content - with dynamic scaling and spacing */}
      <div className="relative z-10 container mx-auto px-6 text-center pb-24 md:pb-32">
        <div className="animate-fade-in-up flex flex-col items-center">
          <p className="text-accent uppercase tracking-[0.6em] text-[10px] md:text-xs font-bold mb-8 drop-shadow-sm">
            Refined Living Redefined
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-headline mb-8 text-white max-w-[90vw] md:max-w-6xl mx-auto leading-[1.1] md:leading-[1.05] italic">
            Architectural Masterpieces <br /> 
            <span className="not-italic text-accent">Curated For You.</span>
          </h1>
          <p className="text-white/80 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light drop-shadow-md">
            LuxuryEstate Nexus is the global authority for high-end residential real estate, representing the world&apos;s most exceptional properties.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 rounded-none px-12 py-8 text-[11px] uppercase tracking-[0.3em] font-bold group h-auto shadow-2xl">
              Explore Portfolio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white/30 hover:bg-white hover:text-black rounded-none px-12 py-8 text-[11px] uppercase tracking-[0.3em] font-bold h-auto backdrop-blur-md transition-all">
              Private Concierge
            </Button>
          </div>
        </div>
      </div>

      {/* Redesigned Animated Scroll Indicator */}
      <div className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none group">
        <span className="text-[9px] uppercase tracking-[0.5em] text-accent font-bold mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
          Scroll
        </span>
        <div className="w-6 h-10 border border-accent/40 rounded-full flex justify-center p-1.5 backdrop-blur-sm">
          <div className="w-1 h-2 bg-accent rounded-full animate-scroll-wheel" />
        </div>
      </div>
    </section>
  );
}
