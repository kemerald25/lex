
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Background with Zoom Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-zoom-in brightness-50"
        style={{ backgroundImage: `url('https://picsum.photos/seed/luxury-hero/1920/1080')` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <p className="text-accent uppercase tracking-[0.4em] text-xs font-semibold mb-6">
            Refined Living Redefined
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline mb-8 text-white max-w-5xl mx-auto leading-tight italic">
            Architectural Masterpieces <br /> 
            <span className="not-italic text-accent">Curated For You.</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            LuxuryEstate Nexus is the global authority for high-end residential real estate, representing the world's most exceptional properties.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none px-10 py-8 text-sm uppercase tracking-widest group">
              Explore Portfolio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 rounded-none px-10 py-8 text-sm uppercase tracking-widest">
              Private Concierge
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-accent mb-2" />
        <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Scroll</span>
      </div>
    </section>
  );
}
