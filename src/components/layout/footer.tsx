
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-8">
              <span className="font-headline text-2xl font-bold tracking-tighter text-accent italic">
                LEX
              </span>
              <span className="font-headline text-xl font-bold tracking-widest">
                NEXUS
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-xs">
              Defining global luxury real estate. Our network of elite professionals represents the most significant architectural achievements worldwide.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-4">Navigations</h4>
            <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Properties</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Off-Market Access</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Luxury Lifestyle</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Global Network</Link>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-4">The Nexus</h4>
            <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Our Story</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Partnerships</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Careers</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Press</Link>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-4">Concierge</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Global Headquarters <br />
              1200 Avenue of the Americas <br />
              New York, NY 10036
            </p>
            <p className="text-sm text-muted-foreground">+1 (800) LUX-NEXUS</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-4">
          <p className="text-xs text-muted-foreground opacity-50 uppercase tracking-widest">
            © 2024 LuxuryEstate Nexus. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-xs text-muted-foreground opacity-50 uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
