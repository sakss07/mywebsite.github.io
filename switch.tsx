import { Input } from "@/components/ui/input";
import { ArrowRight, Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import type { Cuisine } from "../backend.d";
import { sampleCuisines } from "../data/sampleData";
import { useGetAllCuisines } from "../hooks/useQueries";

const cardColors = [
  "oklch(0.47 0.130 32)",
  "oklch(0.57 0.150 42)",
  "oklch(0.34 0.090 28)",
  "oklch(0.54 0.135 40)",
  "oklch(0.44 0.120 35)",
  "oklch(0.50 0.140 38)",
];

function CuisineCard({ cuisine, index }: { cuisine: Cuisine; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group rounded-2xl overflow-hidden cursor-pointer hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1"
      style={{ backgroundColor: cardColors[index % cardColors.length] }}
      data-ocid={`cuisines.item.${index + 1}`}
    >
      <div className="p-6 md:p-8 min-h-[200px] flex flex-col justify-between">
        <div>
          <span
            className="text-xs uppercase tracking-widest font-medium mb-3 block"
            style={{ color: "oklch(0.85 0.060 55)" }}
          >
            {cuisine.region}
          </span>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
            {cuisine.name}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "oklch(0.90 0.030 60)" }}
          >
            {cuisine.description}
          </p>
        </div>
        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {cuisine.featuredDishes.slice(0, 3).map((dish) => (
              <span
                key={dish}
                className="text-xs px-2 py-1 rounded-full"
                style={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                  color: "white",
                }}
              >
                {dish}
              </span>
            ))}
          </div>
          <button
            type="button"
            className="flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-3"
            style={{ color: "oklch(0.88 0.070 60)" }}
            data-ocid={`cuisines.link.${index + 1}`}
          >
            Explore <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function CuisinesSection() {
  const { data: backendCuisines } = useGetAllCuisines();
  const cuisines =
    backendCuisines && backendCuisines.length > 0
      ? backendCuisines
      : sampleCuisines;
  const [search, setSearch] = useState("");

  const filtered = cuisines.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.region.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section
      id="cuisines"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(0.94 0.015 75)" }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p
            className="uppercase tracking-widest text-xs font-semibold mb-3"
            style={{ color: "oklch(0.52 0.148 35)" }}
          >
            World Flavors
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2
              className="font-display font-bold text-4xl md:text-5xl"
              style={{ color: "oklch(0.22 0.032 45)" }}
            >
              Explore Global Cuisines
            </h2>
            <div className="relative w-full sm:w-72">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: "oklch(0.52 0.148 35)" }}
              />
              <Input
                placeholder="Search cuisines..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 rounded-full border-border bg-parchment-light"
                data-ocid="cuisines.search_input"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((cuisine, i) => (
            <CuisineCard key={cuisine.name} cuisine={cuisine} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16" data-ocid="cuisines.empty_state">
            <p className="text-muted-foreground">
              No cuisines found matching your search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
