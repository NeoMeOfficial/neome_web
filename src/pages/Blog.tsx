import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, PencilSimple } from "@phosphor-icons/react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image_url: string | null;
  created_at: string;
}

const fallbackPosts = [
  {
    id: "1",
    title: "5 Minút Meditácie, Ktoré Ti Zmenia Deň",
    excerpt: "Objavte silu krátkej meditácie a ako môže transformovať váš každodenný život.",
    category: "Myseľ",
    image_url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop",
    created_at: "2025-03-15T00:00:00Z",
  },
  {
    id: "2",
    title: "Ako Začať s Cvičením Po Pôrode",
    excerpt: "Bezpečný návrat k pohybu po tehotenstve. Všetko, čo potrebujete vedieť.",
    category: "Pohyb",
    image_url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop",
    created_at: "2025-03-12T00:00:00Z",
  },
  {
    id: "3",
    title: "Jednoduché Recepty Pre Hormonálnu Rovnováhu",
    excerpt: "Výživa, ktorá podporuje váš cyklus a energiu bez komplikovaných ingrediencií.",
    category: "Výživa",
    image_url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop",
    created_at: "2025-03-08T00:00:00Z",
  },
  {
    id: "4",
    title: "Prečo Je Tracker Vašim Najlepším Priateľom",
    excerpt: "Spoznajte svoje telo prostredníctvom sledovania cyklu a nálad.",
    category: "Tracker",
    image_url: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop",
    created_at: "2025-03-05T00:00:00Z",
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("sk-SK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, excerpt, category, image_url, created_at")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (error || !data || data.length === 0) {
        setPosts(fallbackPosts);
      } else {
        setPosts(data);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-16">
            <div className="text-center flex-1 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                NeoMe <span className="gradient-text font-medium">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Inšpirácia, tipy a príbehy pre tvoj holistický wellbeing.
              </p>
            </div>
            <Link to="/blog/editor">
              <Button variant="ghost" size="icon" className="shrink-0">
                <PencilSimple size={20} />
              </Button>
            </Link>
          </div>

          {loading ? (
            <div className="text-center text-muted-foreground">Načítavam články...</div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <Card
                  key={post.id}
                  className="glass-card overflow-hidden group hover:shadow-xl transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image_url || "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar size={16} weight="light" />
                        <span>{formatDate(post.created_at)}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-medium mb-3 group-hover:gradient-text transition-all">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button variant="ghost" className="group/btn px-0">
                      Čítať viac
                      <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-16">
            <Button variant="outline" size="lg">
              Načítať viac článkov
            </Button>
          </div>
        </div>
      </main>

      <footer className="py-12 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-light">
              Neo<span className="gradient-text font-medium">Me</span>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Ochrana údajov</a>
              <a href="#" className="hover:text-foreground transition-colors">Obchodné podmienky</a>
              <a href="/kontakt" className="hover:text-foreground transition-colors">Kontakt</a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-muted-foreground">
            © 2025 NeoMe. Všetky práva vyhradené.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
