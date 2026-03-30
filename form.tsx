import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AboutSection } from "./components/AboutSection";
import { CommunitySection } from "./components/CommunitySection";
import { CuisinesSection } from "./components/CuisinesSection";
import { Footer } from "./components/Footer";
import { GallerySection } from "./components/GallerySection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { RecipesSection } from "./components/RecipesSection";
import { StoriesSection } from "./components/StoriesSection";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <CuisinesSection />
          <RecipesSection />
          <StoriesSection />
          <GallerySection />
          <CommunitySection />
          <AboutSection />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}
