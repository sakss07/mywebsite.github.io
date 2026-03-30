import { BookOpen, Globe2, Heart } from "lucide-react";
import { motion } from "motion/react";

export function AboutSection() {
  const values = [
    {
      icon: Globe2,
      title: "Cultural Celebration",
      text: "We honor the diversity of food traditions from every corner of the globe.",
    },
    {
      icon: Heart,
      title: "Community First",
      text: "Food connects us. We build spaces where culinary stories can be shared freely.",
    },
    {
      icon: BookOpen,
      title: "Authentic Storytelling",
      text: "Every recipe carries history. We dig deep to bring you the real story behind the dish.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(0.28 0.085 25)" }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="uppercase tracking-widest text-xs font-semibold mb-4"
              style={{ color: "oklch(0.75 0.100 38)" }}
            >
              Our Mission
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Food Is the Language
              <br />
              We All Speak
            </h2>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "oklch(0.78 0.030 55)" }}
            >
              We believe food is the universal language that connects us all.
              Our mission is to celebrate the rich tapestry of global culinary
              traditions—from the spice markets of Mumbai to the trattorias of
              Rome, from Tokyo's ramen shops to Mexico City's taquerias.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "oklch(0.68 0.025 50)" }}
            >
              Every recipe we share carries centuries of history. Every story we
              tell is a bridge between cultures. We're building the world's most
              intimate archive of food culture, one dish at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5"
          >
            {values.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="flex gap-5 p-6 rounded-2xl"
                style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.52 0.148 35)" }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-lg mb-1">
                    {title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.68 0.025 50)" }}
                  >
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
