
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 glass-morphism">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-headline text-2xl font-bold tracking-tighter text-accent italic">
            LEX
          </span>
          <span className="font-headline text-xl font-bold tracking-widest hidden sm:inline-block">
            NEXUS
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
          <Link href="#listings" className="hover:text-accent transition-colors">Properties</Link>
          <Link href="#listings" className="hover:text-accent transition-colors">Off-Market</Link>
          <Link href="#listings" className="hover:text-accent transition-colors">Lifestyle</Link>
          <Link href="#listings" className="hover:text-accent transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="outline" className="hidden sm:inline-flex border-accent text-accent hover:bg-accent hover:text-accent-foreground uppercase tracking-widest text-xs h-9">
            Inquire
          </Button>
        </div>
      </div>
    </header>
  );
}
