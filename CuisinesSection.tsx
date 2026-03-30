import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { ChefHat, Clock, Search, Star, Users } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import type { Recipe } from "../backend.d";
import { sampleRecipes } from "../data/sampleData";
import { useGetAllRecipes } from "../hooks/useQueries";

type RecipeWithRating = Recipe & { rating?: number };

const cuisineFilters = [
  "All",
  "Indian",
  "Italian",
  "Japanese",
  "Mexican",
  "Moroccan",
  "Thai",
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className="w-3.5 h-3.5"
          fill={star <= Math.round(rating) ? "oklch(0.75 0.160 60)" : "none"}
          style={{ color: "oklch(0.65 0.160 55)" }}
        />
      ))}
      <span
        className="text-xs font-medium ml-1"
        style={{ color: "oklch(0.52 0.148 35)" }}
      >
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function RecipeCard({
  recipe,
  index,
  onClick,
}: { recipe: RecipeWithRating; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="group rounded-2xl overflow-hidden cursor-pointer hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 bg-parchment-light border border-border"
      onClick={onClick}
      data-ocid={`recipes.item.${index + 1}`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {recipe.imageUrl ? (
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.52 0.148 35), oklch(0.42 0.120 42))",
            }}
          />
        )}
        <div className="absolute top-3 right-3">
          <Badge
            className="text-xs"
            style={{ backgroundColor: "oklch(0.52 0.148 35)", color: "white" }}
          >
            {recipe.cuisine}
          </Badge>
        </div>
      </div>
      {/* Content */}
      <div className="p-5">
        <h3
          className="font-display font-semibold text-lg mb-2 group-hover:text-terracotta transition-colors line-clamp-2"
          style={{ color: "oklch(0.22 0.032 45)" }}
        >
          {recipe.title}
        </h3>
        {recipe.rating && <StarRating rating={recipe.rating} />}
        <div
          className="flex items-center gap-4 mt-3 text-xs"
          style={{ color: "oklch(0.46 0.025 42)" }}
        >
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {recipe.prepTime}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" /> {recipe.servings?.toString()}{" "}
            servings
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function RecipeModal({
  recipe,
  open,
  onClose,
}: { recipe: RecipeWithRating | null; open: boolean; onClose: () => void }) {
  if (!recipe) return null;
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="max-w-2xl max-h-[90vh] overflow-y-auto"
        data-ocid="recipes.dialog"
      >
        <DialogHeader>
          <DialogTitle
            className="font-display text-2xl"
            style={{ color: "oklch(0.22 0.032 45)" }}
          >
            {recipe.title}
          </DialogTitle>
          <div className="flex items-center gap-3 mt-1">
            <Badge
              style={{
                backgroundColor: "oklch(0.52 0.148 35)",
                color: "white",
              }}
            >
              {recipe.cuisine}
            </Badge>
            <span
              className="text-sm flex items-center gap-1"
              style={{ color: "oklch(0.46 0.025 42)" }}
            >
              <Clock className="w-3.5 h-3.5" />
              {recipe.prepTime}
            </span>
            <span
              className="text-sm flex items-center gap-1"
              style={{ color: "oklch(0.46 0.025 42)" }}
            >
              <Users className="w-3.5 h-3.5" />
              {recipe.servings?.toString()} servings
            </span>
          </div>
        </DialogHeader>

        {recipe.imageUrl && (
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-full h-56 object-cover rounded-xl"
          />
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4
              className="font-display font-semibold text-lg mb-3 flex items-center gap-2"
              style={{ color: "oklch(0.22 0.032 45)" }}
            >
              <ChefHat
                className="w-5 h-5"
                style={{ color: "oklch(0.52 0.148 35)" }}
              />{" "}
              Ingredients
            </h4>
            <ul className="space-y-2">
              {recipe.ingredients?.map((ing) => (
                <li
                  key={ing}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "oklch(0.36 0.028 42)" }}
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.52 0.148 35)" }}
                  />
                  {ing}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4
              className="font-display font-semibold text-lg mb-3"
              style={{ color: "oklch(0.22 0.032 45)" }}
            >
              Instructions
            </h4>
            <ol className="space-y-3">
              {recipe.instructions?.map((step, i) => (
                <li
                  key={`step-${i}-${step.slice(0, 20)}`}
                  className="flex gap-3 text-sm"
                  style={{ color: "oklch(0.36 0.028 42)" }}
                >
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: "oklch(0.52 0.148 35)" }}
                  >
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function RecipesSection() {
  const { data: backendRecipes, isLoading } = useGetAllRecipes();
  const recipes =
    backendRecipes && backendRecipes.length > 0
      ? (backendRecipes as RecipeWithRating[])
      : sampleRecipes;
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeWithRating | null>(
    null,
  );

  const filtered = recipes.filter((r) => {
    const matchesCuisine = filter === "All" || r.cuisine === filter;
    const matchesSearch =
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(search.toLowerCase());
    return matchesCuisine && matchesSearch;
  });

  return (
    <section
      id="recipes"
      style={{ backgroundColor: "oklch(0.96 0.010 76)" }}
      className="py-20 md:py-28"
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
            From Our Kitchen
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <h2
              className="font-display font-bold text-4xl md:text-5xl"
              style={{ color: "oklch(0.22 0.032 45)" }}
            >
              Featured Recipes
            </h2>
            <div className="relative w-full sm:w-64">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: "oklch(0.52 0.148 35)" }}
              />
              <Input
                placeholder="Search recipes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 rounded-full"
                data-ocid="recipes.search_input"
              />
            </div>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {cuisineFilters.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              data-ocid="recipes.tab"
              className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:opacity-80"
              style={{
                backgroundColor:
                  filter === c
                    ? "oklch(0.52 0.148 35)"
                    : "oklch(0.89 0.020 70)",
                color: filter === c ? "white" : "oklch(0.36 0.028 42)",
                boxShadow:
                  filter === c ? "0 2px 8px rgba(42,26,20,0.15)" : "none",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            data-ocid="recipes.loading_state"
          >
            {["sk1", "sk2", "sk3", "sk4"].map((sk) => (
              <div
                key={sk}
                className="rounded-2xl overflow-hidden bg-parchment-light border border-border"
              >
                <Skeleton className="h-48 w-full" />
                <div className="p-5 space-y-2">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((recipe, i) => (
              <RecipeCard
                key={recipe.title}
                recipe={recipe as RecipeWithRating}
                index={i}
                onClick={() => setSelectedRecipe(recipe as RecipeWithRating)}
              />
            ))}
          </div>
        )}

        {filtered.length === 0 && !isLoading && (
          <div className="text-center py-16" data-ocid="recipes.empty_state">
            <p className="text-muted-foreground">
              No recipes found. Try a different filter.
            </p>
          </div>
        )}
      </div>

      <RecipeModal
        recipe={selectedRecipe}
        open={!!selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </section>
  );
}
