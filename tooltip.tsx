import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, CheckCircle, Globe, Heart, Users } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { SubmissionType } from "../backend.d";
import { useSubmitContent } from "../hooks/useQueries";

type Benefit = { icon: React.ElementType; text: string };

const benefits: Benefit[] = [
  { icon: Globe, text: "Share your family recipes with a global community" },
  { icon: BookOpen, text: "Tell your food stories and cultural experiences" },
  { icon: Users, text: "Connect with food lovers from 50+ countries" },
  { icon: Heart, text: "Celebrate culinary diversity and tradition" },
];

export function CommunitySection() {
  const { mutate: submitContent, isPending } = useSubmitContent();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    type: "recipe" as "recipe" | "story",
    content: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContent(
      {
        name: form.name,
        email: form.email,
        title: form.title,
        content: form.content,
        submissionType:
          form.type === "recipe" ? SubmissionType.recipe : SubmissionType.story,
        timestamp: BigInt(Date.now()),
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          toast.success("Submission received! We'll be in touch soon.");
        },
        onError: () => {
          toast.error("Something went wrong. Please try again.");
        },
      },
    );
  };

  return (
    <section
      id="community"
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
            Join Us
          </p>
          <h2
            className="font-display font-bold text-4xl md:text-5xl"
            style={{ color: "oklch(0.22 0.032 45)" }}
          >
            Share Your Culinary Story
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Promo panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 md:p-10"
            style={{ backgroundColor: "oklch(0.91 0.030 72)" }}
          >
            <h3
              className="font-display font-bold text-3xl mb-3"
              style={{ color: "oklch(0.22 0.032 45)" }}
            >
              Join Our Community
            </h3>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "oklch(0.36 0.028 42)" }}
            >
              We believe every family has a recipe worth sharing and every
              culture has a story worth telling. Be part of our growing
              community of food lovers.
            </p>
            <ul className="space-y-4 mb-8">
              {benefits.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div
                    className="mt-0.5 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.52 0.148 35)" }}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.36 0.028 42)" }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
            <div
              className="rounded-2xl p-5"
              style={{ backgroundColor: "rgba(178,74,46,0.12)" }}
            >
              <p
                className="text-sm italic"
                style={{ color: "oklch(0.42 0.120 35)" }}
              >
                "Food is our common ground, a universal experience." — James
                Beard
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl p-8 md:p-10 border border-border"
            style={{ backgroundColor: "oklch(0.97 0.008 75)" }}
          >
            {submitted ? (
              <div
                className="text-center py-12"
                data-ocid="community.success_state"
              >
                <CheckCircle
                  className="w-16 h-16 mx-auto mb-4"
                  style={{ color: "oklch(0.52 0.148 35)" }}
                />
                <h3
                  className="font-display font-bold text-2xl mb-2"
                  style={{ color: "oklch(0.22 0.032 45)" }}
                >
                  Thank You!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your submission has been received. We'll review it and get
                  back to you soon.
                </p>
                <Button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="rounded-full"
                  style={{
                    backgroundColor: "oklch(0.52 0.148 35)",
                    color: "white",
                  }}
                  data-ocid="community.button"
                >
                  Submit Another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="community.modal"
              >
                <h3
                  className="font-display font-bold text-2xl mb-6"
                  style={{ color: "oklch(0.22 0.032 45)" }}
                >
                  Share Your Story
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium"
                      style={{ color: "oklch(0.36 0.028 42)" }}
                    >
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      placeholder="Maria García"
                      className="rounded-xl"
                      data-ocid="community.input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium"
                      style={{ color: "oklch(0.36 0.028 42)" }}
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      placeholder="maria@example.com"
                      className="rounded-xl"
                      data-ocid="community.input"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="title"
                    className="text-sm font-medium"
                    style={{ color: "oklch(0.36 0.028 42)" }}
                  >
                    Title *
                  </Label>
                  <Input
                    id="title"
                    required
                    value={form.title}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, title: e.target.value }))
                    }
                    placeholder="My Grandmother's Secret Pozole Recipe"
                    className="rounded-xl"
                    data-ocid="community.input"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    className="text-sm font-medium"
                    style={{ color: "oklch(0.36 0.028 42)" }}
                  >
                    Submission Type
                  </Label>
                  <Select
                    value={form.type}
                    onValueChange={(v) =>
                      setForm((p) => ({ ...p, type: v as "recipe" | "story" }))
                    }
                  >
                    <SelectTrigger
                      className="rounded-xl"
                      data-ocid="community.select"
                    >
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recipe">Recipe</SelectItem>
                      <SelectItem value="story">Food Story</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="content"
                    className="text-sm font-medium"
                    style={{ color: "oklch(0.36 0.028 42)" }}
                  >
                    Your Content *
                  </Label>
                  <Textarea
                    id="content"
                    required
                    rows={5}
                    value={form.content}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, content: e.target.value }))
                    }
                    placeholder="Share your recipe ingredients and steps, or tell us your food story..."
                    className="rounded-xl resize-none"
                    data-ocid="community.textarea"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full rounded-full py-6 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    backgroundColor: "oklch(0.52 0.148 35)",
                    color: "white",
                  }}
                  data-ocid="community.submit_button"
                >
                  {isPending ? "Submitting..." : "Submit Your Story"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
