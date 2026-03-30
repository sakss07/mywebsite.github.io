import { useMutation, useQuery } from "@tanstack/react-query";
import type { Submission } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllCuisines() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["cuisines"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCuisines();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllRecipes() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["recipes"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllRecipes();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useFilterRecipesByCuisine(cuisine: string) {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["recipes", cuisine],
    queryFn: async () => {
      if (!actor) return [];
      if (cuisine === "All") return actor.getAllRecipes();
      return actor.filterRecipesByCuisine(cuisine);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllArticles() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllArticles();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSearchRecipes(searchText: string) {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["recipes", "search", searchText],
    queryFn: async () => {
      if (!actor) return [];
      if (!searchText.trim()) return actor.getAllRecipes();
      return actor.searchRecipes(searchText);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContent() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (submission: Submission) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContent(submission);
    },
  });
}
