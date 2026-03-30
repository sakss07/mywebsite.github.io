import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Mail,
  Twitter,
  UtensilsCrossed,
  Youtube,
} from "lucide-react";

const footerLinks = {
  Explore: [
    "Indian Cuisine",
    "Italian Cuisine",
    "Japanese Cuisine",
    "Mexican Cuisine",
    "Moroccan Cuisine",
  ],
  Discover: [
    "Featured Recipes",
    "Food Stories",
    "Gallery",
    "Chef Interviews",
    "Street Food",
  ],
  Community: [
    "Share a Recipe",
    "Submit a Story",
    "Newsletter",
    "About Us",
    "Contact",
  ],
};

const socialLinks = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Youtube, label: "YouTube" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="footer-bg text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <UtensilsCrossed
                className="w-6 h-6"
                style={{ color: "oklch(0.75 0.100 38)" }}
              />
              <span className="font-display font-bold text-xl">
                Culinary Cultures
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "oklch(0.65 0.025 45)" }}
            >
              Celebrating the world's culinary heritage, one dish at a time.
              From ancient spice routes to modern fusion—every meal tells a
              story.
            </p>
            {/* Newsletter */}
            <div>
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-3"
                style={{ color: "oklch(0.75 0.100 38)" }}
              >
                Stay Inspired
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-full text-sm border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:ring-terracotta"
                  data-ocid="footer.input"
                />
                <Button
                  type="button"
                  className="rounded-full px-5 flex-shrink-0 font-semibold"
                  style={{
                    backgroundColor: "oklch(0.52 0.148 35)",
                    color: "white",
                  }}
                  data-ocid="footer.submit_button"
                >
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4
                className="font-semibold text-sm uppercase tracking-widest mb-4"
                style={{ color: "oklch(0.75 0.100 38)" }}
              >
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      className="text-sm transition-colors hover:text-white text-left"
                      style={{ color: "oklch(0.60 0.020 45)" }}
                      data-ocid="footer.link"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="border-t mb-8"
          style={{ borderColor: "oklch(1 0 0 / 10%)" }}
        />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "oklch(0.50 0.015 40)" }}>
            © {year}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-2"
              style={{ color: "oklch(0.60 0.080 40)" }}
            >
              caffeine.ai
            </a>
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ Icon, label }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
                data-ocid="footer.button"
              >
                <Icon
                  className="w-4 h-4"
                  style={{ color: "oklch(0.70 0.030 45)" }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
