import { Button } from "@/components/ui/button";
import { Menu, Search, UtensilsCrossed, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Cuisines", href: "#cuisines" },
  { label: "Recipes", href: "#recipes" },
  { label: "Stories", href: "#stories" },
  { label: "Gallery", href: "#gallery" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-warm" : ""
      }`}
      style={{ backgroundColor: "oklch(0.96 0.010 78)" }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
          >
            <UtensilsCrossed
              className="w-6 h-6"
              style={{ color: "oklch(0.52 0.148 35)" }}
            />
            <div className="leading-tight">
              <div
                className="font-display font-bold text-lg"
                style={{ color: "oklch(0.22 0.032 45)" }}
              >
                Culinary
              </div>
              <div
                className="font-display font-bold text-lg -mt-1"
                style={{ color: "oklch(0.52 0.148 35)" }}
              >
                Cultures
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                data-ocid="nav.link"
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md relative group ${
                  activeSection === link.href.replace("#", "")
                    ? "text-terracotta"
                    : "hover:text-terracotta"
                }`}
                style={{
                  color:
                    activeSection === link.href.replace("#", "")
                      ? "oklch(0.52 0.148 35)"
                      : "oklch(0.36 0.028 42)",
                }}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                    style={{ backgroundColor: "oklch(0.52 0.148 35)" }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              data-ocid="nav.button"
              onClick={() => {
                const el = document.getElementById("recipes");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Search
                className="w-5 h-5"
                style={{ color: "oklch(0.36 0.028 42)" }}
              />
            </Button>
            <button
              type="button"
              className="md:hidden p-2 rounded-md"
              onClick={() => setMenuOpen(!menuOpen)}
              data-ocid="nav.toggle"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border overflow-hidden"
            style={{ backgroundColor: "oklch(0.96 0.010 78)" }}
          >
            <nav className="container px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  data-ocid="nav.link"
                  className="px-4 py-3 rounded-lg font-medium text-sm transition-colors"
                  style={{ color: "oklch(0.36 0.028 42)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
