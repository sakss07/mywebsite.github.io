import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import { galleryItems } from "../data/sampleData";

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(0.96 0.010 76)" }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p
            className="uppercase tracking-widest text-xs font-semibold mb-3"
            style={{ color: "oklch(0.52 0.148 35)" }}
          >
            Visual Feast
          </p>
          <h2
            className="font-display font-bold text-4xl md:text-5xl"
            style={{ color: "oklch(0.22 0.032 45)" }}
          >
            A World on Your Plate
          </h2>
          <p
            className="mt-4 text-lg max-w-2xl mx-auto"
            style={{ color: "oklch(0.46 0.025 42)" }}
          >
            Every photo tells a story of culture, tradition, and the universal
            joy of sharing a meal.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 ? "1/1" : "3/2" }}
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center"
                style={{ background: "rgba(28,14,8,0.7)" }}
              >
                <p className="font-display font-semibold text-white text-center px-3">
                  {item.label}
                </p>
                <p
                  className="flex items-center gap-1 text-xs mt-1"
                  style={{ color: "oklch(0.80 0.080 55)" }}
                >
                  <MapPin className="w-3 h-3" /> {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
