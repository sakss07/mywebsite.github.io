import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-food-market.dim_1920x1080.jpg')",
        }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(28,14,8,0.65) 0%, rgba(28,14,8,0.75) 60%, rgba(28,14,8,0.9) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="uppercase tracking-[0.3em] text-sm font-medium mb-6"
          style={{ color: "oklch(0.75 0.100 38)" }}
        >
          A World of Flavor Awaits
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="font-display font-bold leading-tight mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "white" }}
        >
          Exploring Cultures
          <br />
          Through Food
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "oklch(0.88 0.015 70)" }}
        >
          Discover authentic flavors, ancient traditions, and the stories behind
          every dish from every corner of the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => scrollTo("recipes")}
            data-ocid="hero.primary_button"
            className="px-8 py-6 text-base font-semibold rounded-full transition-all hover:scale-105 active:scale-95"
            style={{
              backgroundColor: "oklch(0.91 0.030 72)",
              color: "oklch(0.22 0.032 45)",
            }}
          >
            Browse Recipes
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("stories")}
            data-ocid="hero.secondary_button"
            className="px-8 py-6 text-base font-semibold rounded-full border-2 transition-all hover:scale-105 active:scale-95"
            style={{
              borderColor: "white",
              color: "white",
              backgroundColor: "transparent",
            }}
          >
            Explore Stories
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("cuisines")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        data-ocid="hero.button"
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
