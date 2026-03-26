"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export function Navbar() {
  const navLinks = [
    { href: "#listings", label: "Properties" },
    { href: "#listings", label: "Off-Market" },
    { href: "#listings", label: "Lifestyle" },
    { href: "#listings", label: "Contact" },
  ];

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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-accent transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          <Button variant="outline" className="hidden lg:inline-flex border-accent text-accent hover:bg-accent hover:text-accent-foreground uppercase tracking-widest text-xs h-9">
            Inquire
          </Button>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:bg-accent/10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l border-white/10 w-[300px] p-0">
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription>
                    Explore luxury properties and exclusive services.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col h-full py-12 px-6">
                  <Link href="/" className="flex items-center justify-center space-x-2 mb-12">
                    <span className="font-headline text-2xl font-bold tracking-tighter text-accent italic">
                      LEX
                    </span>
                    <span className="font-headline text-xl font-bold tracking-widest">
                      NEXUS
                    </span>
                  </Link>
                  
                  <nav className="flex flex-col space-y-6 text-center">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.label} 
                        href={link.href} 
                        className="text-sm font-medium uppercase tracking-[0.3em] hover:text-accent transition-colors py-2 border-b border-white/5"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-auto pt-8">
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-none uppercase tracking-[0.2em] text-[10px] font-bold h-12">
                      Inquire Now
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
