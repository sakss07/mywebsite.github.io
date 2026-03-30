import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Recipe {
    title: string;
    instructions: Array<string>;
    imageUrl: string;
    cuisine: string;
    prepTime: string;
    servings: bigint;
    ingredients: Array<string>;
}
export interface Submission {
    title: string;
    content: string;
    name: string;
    email: string;
    timestamp: bigint;
    submissionType: SubmissionType;
}
export interface Cuisine {
    region: string;
    name: string;
    description: string;
    featuredDishes: Array<string>;
}
export interface Article {
    title: string;
    content: string;
    author: string;
    timestamp: bigint;
    excerpt: string;
    category: string;
}
export enum SubmissionType {
    story = "story",
    recipe = "recipe"
}
export interface backendInterface {
    addArticle(article: Article): Promise<void>;
    addCuisine(cuisine: Cuisine): Promise<void>;
    addRecipe(recipe: Recipe): Promise<void>;
    filterRecipesByCuisine(cuisine: string): Promise<Array<Recipe>>;
    getAllArticles(): Promise<Array<Article>>;
    getAllCuisines(): Promise<Array<Cuisine>>;
    getAllRecipes(): Promise<Array<Recipe>>;
    getArticle(title: string): Promise<Article>;
    getCuisine(name: string): Promise<Cuisine>;
    getRecipe(title: string): Promise<Recipe>;
    getUserSubmissions(user: Principal): Promise<Array<Submission>>;
    searchRecipes(searchText: string): Promise<Array<Recipe>>;
    submitContent(submission: Submission): Promise<void>;
}
