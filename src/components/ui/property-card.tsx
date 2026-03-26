
"use client";

import Image from "next/image";
import { Property } from "@/app/data/properties";
import { Bed, Bath, Move, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className="group relative flex flex-col bg-card border border-white/5 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:brightness-75"
          data-ai-hint="luxury property"
        />
        {property.featured && (
          <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
            Featured
          </div>
        )}
        <button className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-md rounded-full text-white hover:text-accent transition-colors">
          <Heart className="h-4 w-4" />
        </button>

        {/* Quick View Button - Appears on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none uppercase tracking-[0.3em] text-[10px] px-8">
            View Listing
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <p className="text-accent text-[10px] uppercase tracking-widest font-bold">{property.type}</p>
          <p className="font-mono text-sm font-semibold tracking-tighter">{formattedPrice}</p>
        </div>
        
        <h3 className="text-xl font-headline mb-1 group-hover:text-accent transition-colors">
          {property.title}
        </h3>
        <p className="text-muted-foreground text-xs mb-6 flex items-center">
          <span className="opacity-60">{property.location}</span>
        </p>

        <div className="mt-auto grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
          <div className="flex flex-col items-center gap-1">
            <Bed className="h-4 w-4 text-muted-foreground" />
            <span className="text-[10px] uppercase tracking-widest font-bold">{property.beds} Beds</span>
          </div>
          <div className="flex flex-col items-center gap-1 border-x border-white/5">
            <Bath className="h-4 w-4 text-muted-foreground" />
            <span className="text-[10px] uppercase tracking-widest font-bold">{property.baths} Baths</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Move className="h-4 w-4 text-muted-foreground" />
            <span className="text-[10px] uppercase tracking-widest font-bold">{property.sqft.toLocaleString()} FT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
