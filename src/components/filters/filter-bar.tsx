"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function FilterBar() {
  const [price, setPrice] = useState([5000000]);

  return (
    <div className="container mx-auto px-4 -mt-20 md:-mt-16 relative z-30">
      <div className="bg-card border border-border/50 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] p-8 md:p-10 rounded-none">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Search/Location */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Location</label>
            <Select>
              <SelectTrigger className="bg-transparent border-0 border-b border-muted rounded-none px-0 h-12 focus:ring-0 text-sm">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="malibu">Malibu, CA</SelectItem>
                <SelectItem value="manhattan">Manhattan, NY</SelectItem>
                <SelectItem value="aspen">Aspen, CO</SelectItem>
                <SelectItem value="london">London, UK</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Property Type */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Property Type</label>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-transparent border-b border-muted rounded-none w-full justify-start p-0 h-12">
                <TabsTrigger value="all" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none h-12 px-0 mr-6 text-xs font-semibold">All</TabsTrigger>
                <TabsTrigger value="villa" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none h-12 px-0 mr-6 text-xs font-semibold">Villa</TabsTrigger>
                <TabsTrigger value="estate" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none h-12 px-0 mr-6 text-xs font-semibold">Estate</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Price Range */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Min Price</label>
              <span className="text-xs text-accent font-mono font-bold">${(price[0] / 1000000).toFixed(1)}M+</span>
            </div>
            <div className="pt-6 px-1">
              <Slider 
                defaultValue={[5000000]} 
                max={50000000} 
                step={1000000} 
                onValueChange={setPrice}
                className="[&>[role=slider]]:bg-accent"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex items-end">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-14 uppercase tracking-[0.2em] text-xs font-bold transition-all hover:scale-[1.02]">
              Find Property
              <Search className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center border-t border-border/50 pt-6">
          <Button variant="link" className="text-muted-foreground text-[10px] uppercase tracking-[0.3em] hover:text-accent font-bold transition-colors">
            <SlidersHorizontal className="mr-2 h-3 w-3" />
            Advanced Search Options
          </Button>
        </div>
      </div>
    </div>
  );
}
