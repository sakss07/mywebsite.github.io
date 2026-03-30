import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import { motion } from "motion/react";
import type { Article } from "../backend.d";
import { sampleArticles } from "../data/sampleData";
import { useGetAllArticles } from "../hooks/useQueries";

const categoryColors: Record<string, string> = {
  "Food History": "oklch(0.52 0.148 35)",
  "Street Food": "oklch(0.57 0.150 42)",
  "Chef Interview": "oklch(0.34 0.090 28)",
  "Cultural Significance": "oklch(0.44 0.120 35)",
};

const headerGradients = [
  "linear-gradient(135deg, oklch(0.47 0.130 32), oklch(0.34 0.090 28))",
  "linear-gradient(135deg, oklch(0.57 0.150 42), oklch(0.47 0.130 32))",
  "linear-gradient(135deg, oklch(0.34 0.090 28), oklch(0.44 0.120 35))",
  "linear-gradient(135deg, oklch(0.54 0.135 40), oklch(0.42 0.110 30))",
  "linear-gradient(135deg, oklch(0.50 0.140 38), oklch(0.36 0.100 32))",
  "linear-gradient(135deg, oklch(0.44 0.125 33), oklch(0.57 0.150 42))",
];

function formatDate(timestamp: bigint) {
  const date = new Date(Number(timestamp));
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function StoryCard({ article, index }: { article: Article; index: number }) {
  const color = categoryColors[article.category] || "oklch(0.52 0.148 35)";
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group rounded-2xl overflow-hidden cursor-pointer hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 bg-parchment-light border border-border"
      data-ocid={`stories.item.${index + 1}`}
    >
      {/* Header banner */}
      <div
        className="h-36 relative flex items-end p-5"
        style={{ background: headerGradients[index % headerGradients.length] }}
      >
        <Badge
          className="text-xs"
          style={{
            backgroundColor: "rgba(0,0,0,0.35)",
            color: "white",
            border: "none",
          }}
        >
          {article.category}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="font-display font-semibold text-xl mb-2 line-clamp-2 group-hover:text-terracotta transition-colors"
          style={{ color: "oklch(0.22 0.032 45)" }}
        >
          {article.title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-4 line-clamp-3"
          style={{ color: "oklch(0.46 0.025 42)" }}
        >
          {article.excerpt}
        </p>
        <div
          className="flex items-center justify-between text-xs"
          style={{ color: "oklch(0.56 0.020 45)" }}
        >
          <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" style={{ color }} />
            {article.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(article.timestamp)}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function StoriesSection() {
  const { data: backendArticles } = useGetAllArticles();
  const articles =
    backendArticles && backendArticles.length > 0
      ? backendArticles
      : sampleArticles;

  return (
    <section
      id="stories"
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
            Culinary Stories
          </p>
          <h2
            className="font-display font-bold text-4xl md:text-5xl"
            style={{ color: "oklch(0.22 0.032 45)" }}
          >
            Latest Food Stories
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(0, 6).map((article, i) => (
            <StoryCard key={article.title} article={article} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
