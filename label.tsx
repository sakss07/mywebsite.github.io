import Text "mo:core/Text";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import List "mo:core/List";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Map "mo:core/Map";

actor {
  type Cuisine = {
    name : Text;
    region : Text;
    description : Text;
    featuredDishes : [Text];
  };

  type Recipe = {
    title : Text;
    cuisine : Text;
    ingredients : [Text];
    instructions : [Text];
    prepTime : Text;
    servings : Nat;
    imageUrl : Text;
  };

  type Article = {
    title : Text;
    category : Text;
    excerpt : Text;
    content : Text;
    author : Text;
    timestamp : Int;
  };

  type SubmissionType = {
    #recipe;
    #story;
  };

  type Submission = {
    name : Text;
    email : Text;
    title : Text;
    content : Text;
    submissionType : SubmissionType;
    timestamp : Int;
  };

  module Cuisine {
    public func compare(c1 : Cuisine, c2 : Cuisine) : Order.Order {
      Text.compare(c1.name, c2.name);
    };
  };

  module Recipe {
    public func compare(r1 : Recipe, r2 : Recipe) : Order.Order {
      Text.compare(r1.title, r2.title);
    };
  };

  module Article {
    public func compare(a1 : Article, a2 : Article) : Order.Order {
      Text.compare(a1.title, a2.title);
    };
  };

  module Submission {
    public func compare(s1 : Submission, s2 : Submission) : Order.Order {
      Text.compare(s1.title, s2.title);
    };
  };

  let cuisineStore = Map.empty<Text, Cuisine>();
  let recipeStore = Map.empty<Text, Recipe>();
  let storyStore = Map.empty<Text, Article>();
  let submissionStore = Map.empty<Principal, List.List<Submission>>();

  public shared ({ caller }) func addCuisine(cuisine : Cuisine) : async () {
    cuisineStore.add(cuisine.name, cuisine);
  };

  public shared ({ caller }) func addRecipe(recipe : Recipe) : async () {
    recipeStore.add(recipe.title, recipe);
  };

  public shared ({ caller }) func addArticle(article : Article) : async () {
    storyStore.add(article.title, article);
  };

  public shared ({ caller }) func submitContent(submission : Submission) : async () {
    let existing = switch (submissionStore.get(caller)) {
      case (null) { List.empty<Submission>() };
      case (?subs) { subs };
    };
    existing.add(submission);
    submissionStore.add(caller, existing);
  };

  public query ({ caller }) func getCuisine(name : Text) : async Cuisine {
    switch (cuisineStore.get(name)) {
      case (?cuisine) { cuisine };
      case (null) { Runtime.trap("Cuisine not found. ") };
    };
  };

  public query ({ caller }) func getRecipe(title : Text) : async Recipe {
    switch (recipeStore.get(title)) {
      case (?recipe) { recipe };
      case (null) { Runtime.trap("Recipe not found. ") };
    };
  };

  public query ({ caller }) func getArticle(title : Text) : async Article {
    switch (storyStore.get(title)) {
      case (?article) { article };
      case (null) { Runtime.trap("Article not found. ") };
    };
  };

  public query ({ caller }) func getUserSubmissions(user : Principal) : async [Submission] {
    switch (submissionStore.get(user)) {
      case (?subs) { subs.sort().toArray() };
      case (null) { Runtime.trap("No submissions found") };
    };
  };

  public query ({ caller }) func searchRecipes(searchText : Text) : async [Recipe] {
    recipeStore.values().toArray().filter(
      func(recipe) {
        recipe.title.contains(#text searchText);
      }
    );
  };

  public query ({ caller }) func filterRecipesByCuisine(cuisine : Text) : async [Recipe] {
    recipeStore.values().toArray().filter(
      func(recipe) { recipe.cuisine.contains(#text cuisine) }
    );
  };

  public query ({ caller }) func getAllCuisines() : async [Cuisine] {
    cuisineStore.values().toArray().sort();
  };

  public query ({ caller }) func getAllRecipes() : async [Recipe] {
    recipeStore.values().toArray().sort();
  };

  public query ({ caller }) func getAllArticles() : async [Article] {
    storyStore.values().toArray().sort();
  };
};
