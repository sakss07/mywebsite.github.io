import type { Article, Cuisine, Recipe } from "../backend.d";

export const sampleCuisines: Cuisine[] = [
  {
    name: "Indian",
    region: "South Asia",
    description:
      "A tapestry of flavors with aromatic spices, rich curries, and centuries-old recipes passed down through generations.",
    featuredDishes: ["Butter Chicken", "Biryani", "Masala Dosa", "Gulab Jamun"],
  },
  {
    name: "Italian",
    region: "Southern Europe",
    description:
      "Simple, fresh ingredients elevated by tradition. From handmade pasta in Bologna to wood-fired pizza in Naples.",
    featuredDishes: ["Carbonara", "Risotto", "Osso Buco", "Tiramisu"],
  },
  {
    name: "Japanese",
    region: "East Asia",
    description:
      "A philosophy of harmony, seasonality, and respect for ingredients, expressed through ramen, sushi, and izakaya culture.",
    featuredDishes: ["Tonkotsu Ramen", "Sushi Omakase", "Okonomiyaki", "Mochi"],
  },
  {
    name: "Mexican",
    region: "North America",
    description:
      "Bold, vibrant street food culture rooted in ancient Aztec and Mayan traditions with chiles, corn, and cacao.",
    featuredDishes: ["Tacos al Pastor", "Mole Negro", "Tamales", "Churros"],
  },
  {
    name: "Moroccan",
    region: "North Africa",
    description:
      "A crossroads of Berber, Arab, and Mediterranean influences woven into aromatic tagines, couscous, and pastilla.",
    featuredDishes: ["Lamb Tagine", "Couscous", "Harira", "Bastilla"],
  },
  {
    name: "Thai",
    region: "Southeast Asia",
    description:
      "A perfect balance of sweet, sour, salty, and spicy in every dish, from street-side Pad Thai to fragrant green curries.",
    featuredDishes: ["Green Curry", "Pad Thai", "Som Tum", "Mango Sticky Rice"],
  },
];

export const sampleRecipes: (Recipe & { rating?: number })[] = [
  {
    title: "Grandmother's Butter Chicken",
    cuisine: "Indian",
    prepTime: "45 min",
    servings: BigInt(4),
    imageUrl: "/assets/generated/dish-indian-butter-chicken.dim_600x400.jpg",
    ingredients: [
      "800g chicken thighs, cubed",
      "2 cups tomato purée",
      "1 cup heavy cream",
      "3 tbsp butter",
      "2 tsp garam masala",
      "1 tsp turmeric",
      "1 tsp paprika",
      "4 cloves garlic, minced",
      "1 inch ginger, grated",
      "Fresh cilantro to garnish",
    ],
    instructions: [
      "Marinate chicken in yogurt, turmeric, and paprika for 30 minutes.",
      "In a heavy pan, melt butter over medium-high heat. Sear chicken until golden, about 5 minutes.",
      "Add garlic and ginger; cook 2 minutes until fragrant.",
      "Pour in tomato purée and simmer 15 minutes.",
      "Stir in cream and garam masala. Simmer gently 10 more minutes.",
      "Season with salt, garnish with cilantro, and serve with naan or basmati rice.",
    ],
    rating: 4.9,
  },
  {
    title: "Roman Pasta Carbonara",
    cuisine: "Italian",
    prepTime: "25 min",
    servings: BigInt(2),
    imageUrl: "/assets/generated/dish-italian-carbonara.dim_600x400.jpg",
    ingredients: [
      "200g spaghetti",
      "150g guanciale (or pancetta)",
      "3 large egg yolks + 1 whole egg",
      "80g Pecorino Romano, grated",
      "40g Parmigiano Reggiano, grated",
      "Black pepper, freshly cracked",
    ],
    instructions: [
      "Bring salted water to a boil. Cook spaghetti al dente.",
      "Render guanciale in a pan over medium heat until crispy. Remove from heat.",
      "Whisk egg yolks, whole egg, and most of the cheese with generous black pepper.",
      "Reserve 1 cup pasta water before draining pasta.",
      "Toss hot pasta with guanciale fat off heat. Add egg mixture, tossing rapidly.",
      "Add pasta water gradually until silky sauce coats every strand. Serve immediately.",
    ],
    rating: 4.8,
  },
  {
    title: "Tokyo Tonkotsu Ramen",
    cuisine: "Japanese",
    prepTime: "4 hrs",
    servings: BigInt(4),
    imageUrl: "/assets/generated/dish-japanese-ramen.dim_600x400.jpg",
    ingredients: [
      "1kg pork neck bones",
      "4 portions fresh ramen noodles",
      "4 soft-boiled marinated eggs",
      "200g chashu pork belly",
      "Nori sheets, bamboo shoots, scallions",
      "Soy sauce, mirin, sake for tare",
    ],
    instructions: [
      "Blanch pork bones in boiling water 5 minutes. Rinse thoroughly.",
      "Simmer bones in fresh water 3–4 hours until broth turns milky white.",
      "Prepare tare by combining soy sauce, mirin, and sake. Reduce by half.",
      "Cook chashu: roll pork belly, braise in soy/mirin/sake 90 minutes.",
      "Marinate soft-boiled eggs in diluted soy sauce for at least 2 hours.",
      "Assemble bowls: tare, hot broth, noodles, then toppings.",
    ],
    rating: 4.9,
  },
  {
    title: "Tacos al Pastor",
    cuisine: "Mexican",
    prepTime: "3 hrs",
    servings: BigInt(6),
    imageUrl: "/assets/generated/dish-mexican-tacos.dim_600x400.jpg",
    ingredients: [
      "1.5kg pork shoulder, thinly sliced",
      "3 dried guajillo chiles, soaked",
      "2 ancho chiles, soaked",
      "1 cup pineapple juice",
      "4 tbsp achiote paste",
      "Corn tortillas, pineapple chunks, cilantro, white onion",
    ],
    instructions: [
      "Blend rehydrated chiles with pineapple juice and achiote paste.",
      "Marinate pork in chile mixture 2–12 hours in the fridge.",
      "Stack marinated pork on a vertical skewer with pineapple on top.",
      "Roast in oven at 220°C for 45 minutes until caramelized.",
      "Slice thin and serve on warm corn tortillas.",
      "Top with diced onion, cilantro, grilled pineapple, and salsa verde.",
    ],
    rating: 4.7,
  },
  {
    title: "Slow-Cooked Lamb Tagine",
    cuisine: "Moroccan",
    prepTime: "2 hrs",
    servings: BigInt(4),
    imageUrl: "/assets/generated/dish-moroccan-tagine.dim_600x400.jpg",
    ingredients: [
      "1kg lamb shoulder, cubed",
      "2 preserved lemons, quartered",
      "1 cup green olives",
      "1 tsp cumin, coriander, cinnamon",
      "½ tsp turmeric, ginger",
      "Fresh herbs, saffron threads",
    ],
    instructions: [
      "Brown lamb pieces in olive oil with onions until golden.",
      "Add all spices, saffron-infused water, and enough water to cover.",
      "Transfer to tagine or Dutch oven. Simmer 1.5 hours on low heat.",
      "Add preserved lemons and olives in the last 20 minutes.",
      "Garnish with fresh cilantro and serve over couscous.",
    ],
    rating: 4.8,
  },
  {
    title: "Authentic Thai Green Curry",
    cuisine: "Thai",
    prepTime: "35 min",
    servings: BigInt(4),
    imageUrl: "/assets/generated/dish-thai-curry.dim_600x400.jpg",
    ingredients: [
      "400ml coconut milk",
      "3 tbsp green curry paste",
      "500g chicken breast, sliced",
      "200g Thai eggplant, quartered",
      "Kaffir lime leaves, Thai basil",
      "Fish sauce, palm sugar",
    ],
    instructions: [
      "Heat thick coconut cream in wok until it sizzles. Add green curry paste.",
      "Fry paste in coconut cream 2–3 minutes until fragrant.",
      "Add chicken and cook through, about 5 minutes.",
      "Pour in remaining coconut milk and bring to a gentle simmer.",
      "Add eggplant, kaffir lime leaves, fish sauce, and palm sugar.",
      "Finish with Thai basil. Serve immediately with jasmine rice.",
    ],
    rating: 4.6,
  },
];

export const sampleArticles: Article[] = [
  {
    title: "The Spice Routes That Built the World",
    author: "Priya Sharma",
    excerpt:
      "Long before the internet, spices connected continents. Trace the ancient routes from Kerala's pepper plantations to the markets of Istanbul that shaped civilizations.",
    content: "Lorem ipsum detailed article content here...",
    category: "Food History",
    timestamp: BigInt(Date.now()),
  },
  {
    title: "Street Food Diaries: Tokyo at 2AM",
    author: "Kenji Tanaka",
    excerpt:
      "When the neon signs blur and the last train has gone, Tokyo's late-night food stalls come alive. Ramen, yakitori, and the stories of the people who serve them.",
    content: "Lorem ipsum detailed article content here...",
    category: "Street Food",
    timestamp: BigInt(Date.now() - 86400000),
  },
  {
    title: "Nonna's Kitchen: Preserving Italian Memory",
    author: "Marco Rossi",
    excerpt:
      "Every family in Italy guards recipes like heirlooms. We visited three generations of women in Emilia-Romagna to learn why pasta is more than just food.",
    content: "Lorem ipsum detailed article content here...",
    category: "Chef Interview",
    timestamp: BigInt(Date.now() - 172800000),
  },
  {
    title: "Mole Negro: The Soul of Oaxaca",
    author: "Elena Morales",
    excerpt:
      "With over 30 ingredients and days of preparation, mole negro is the most complex sauce in Mexican cuisine. It's also the most profound—a ceremony disguised as dinner.",
    content: "Lorem ipsum detailed article content here...",
    category: "Cultural Significance",
    timestamp: BigInt(Date.now() - 259200000),
  },
  {
    title: "The Art of Fermentation Across Cultures",
    author: "Ana Kim",
    excerpt:
      "From Korean kimchi to Ethiopian injera to French sourdough, every culture has discovered that time and microbes transform humble ingredients into transcendence.",
    content: "Lorem ipsum detailed article content here...",
    category: "Food History",
    timestamp: BigInt(Date.now() - 345600000),
  },
  {
    title: "Marrakech's Medina: A Feast for the Senses",
    author: "Fatima Al-Hassan",
    excerpt:
      "In Djemaa el-Fna square, the smoke from a hundred food stalls rises as snake charmers and storytellers compete for your attention. But the food always wins.",
    content: "Lorem ipsum detailed article content here...",
    category: "Street Food",
    timestamp: BigInt(Date.now() - 432000000),
  },
];

export const galleryItems = [
  {
    label: "Mumbai Spice Market",
    location: "India",
    gradient: "from-orange-600 to-red-700",
    image: "/assets/generated/dish-indian-butter-chicken.dim_600x400.jpg",
  },
  {
    label: "Osaka Street Food",
    location: "Japan",
    gradient: "from-rose-700 to-red-900",
    image: "/assets/generated/dish-japanese-ramen.dim_600x400.jpg",
  },
  {
    label: "Pasta in Bologna",
    location: "Italy",
    gradient: "from-amber-500 to-orange-600",
    image: "/assets/generated/dish-italian-carbonara.dim_600x400.jpg",
  },
  {
    label: "Marrakech Market",
    location: "Morocco",
    gradient: "from-yellow-600 to-amber-700",
    image: "/assets/generated/dish-moroccan-tagine.dim_600x400.jpg",
  },
  {
    label: "Bangkok Night Market",
    location: "Thailand",
    gradient: "from-green-700 to-emerald-800",
    image: "/assets/generated/dish-thai-curry.dim_600x400.jpg",
  },
  {
    label: "Mexico City Tacos",
    location: "Mexico",
    gradient: "from-red-600 to-rose-800",
    image: "/assets/generated/dish-mexican-tacos.dim_600x400.jpg",
  },
  {
    label: "World Cuisine",
    location: "Global",
    gradient: "from-amber-600 to-orange-700",
    image: "/assets/generated/gallery-food-world.dim_800x600.jpg",
  },
  {
    label: "Istanbul Bazaar",
    location: "Turkey",
    gradient: "from-orange-700 to-red-800",
    image: "/assets/generated/hero-food-market.dim_1920x1080.jpg",
  },
];
