import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Plus, Pencil, Trash, Eye } from "@phosphor-icons/react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string | null;
  category: string;
  image_url: string | null;
  published: boolean;
  created_at: string;
}

const BlogEditor = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    image_url: "",
    published: false,
  });

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (error) {
      toast.error("Chyba pri načítavaní článkov");
      console.error(error);
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const resetForm = () => {
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      image_url: "",
      published: false,
    });
    setEditingPost(null);
    setIsCreating(false);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content || "",
      category: post.category,
      image_url: post.image_url || "",
      published: post.published,
    });
    setIsCreating(false);
  };

  const handleCreate = () => {
    resetForm();
    setIsCreating(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.excerpt || !formData.category) {
      toast.error("Vyplňte všetky povinné polia");
      return;
    }

    if (editingPost) {
      const { error } = await supabase
        .from("blog_posts")
        .update({
          title: formData.title,
          excerpt: formData.excerpt,
          content: formData.content || null,
          category: formData.category,
          image_url: formData.image_url || null,
          published: formData.published,
        })
        .eq("id", editingPost.id);

      if (error) {
        toast.error("Chyba pri aktualizácii článku");
        console.error(error);
      } else {
        toast.success("Článok bol aktualizovaný");
        resetForm();
        fetchPosts();
      }
    } else {
      const { error } = await supabase
        .from("blog_posts")
        .insert({
          title: formData.title,
          excerpt: formData.excerpt,
          content: formData.content || null,
          category: formData.category,
          image_url: formData.image_url || null,
          published: formData.published,
        });

      if (error) {
        toast.error("Chyba pri vytváraní článku");
        console.error(error);
      } else {
        toast.success("Článok bol vytvorený");
        resetForm();
        fetchPosts();
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Naozaj chceš vymazať tento článok?")) return;
    
    const { error } = await supabase
      .from("blog_posts")
      .delete()
      .eq("id", id);

    if (error) {
      toast.error("Chyba pri mazaní článku");
      console.error(error);
    } else {
      toast.success("Článok bol vymazaný");
      fetchPosts();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link to="/blog">
                <Button variant="ghost" size="icon">
                  <ArrowLeft size={20} />
                </Button>
              </Link>
              <h1 className="text-3xl font-light">
                Blog <span className="gradient-text font-medium">Editor</span>
              </h1>
            </div>
            <Button onClick={handleCreate} className="gap-2">
              <Plus size={16} />
              Nový článok
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Post List */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium mb-4">Články ({posts.length})</h2>
              {loading ? (
                <p className="text-muted-foreground">Načítavam...</p>
              ) : posts.length === 0 ? (
                <p className="text-muted-foreground">Zatiaľ žiadne články</p>
              ) : (
                posts.map((post) => (
                  <Card key={post.id} className="p-4 glass-card">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                            {post.category}
                          </span>
                          {post.published ? (
                            <span className="text-xs text-green-600 flex items-center gap-1">
                              <Eye size={12} /> Publikované
                            </span>
                          ) : (
                            <span className="text-xs text-muted-foreground">Koncept</span>
                          )}
                        </div>
                        <h3 className="font-medium truncate">{post.title}</h3>
                        <p className="text-sm text-muted-foreground truncate">{post.excerpt}</p>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(post)}
                        >
                          <Pencil size={16} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(post.id)}
                        >
                          <Trash size={16} />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>

            {/* Editor Form */}
            {(isCreating || editingPost) && (
              <Card className="p-6 glass-card h-fit sticky top-32">
                <h2 className="text-xl font-medium mb-6">
                  {editingPost ? "Upraviť článok" : "Nový článok"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Názov *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Názov článku"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="category">Kategória *</Label>
                    <Input
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      placeholder="napr. Myseľ, Pohyb, Výživa"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="excerpt">Krátky popis *</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      placeholder="Krátky popis článku"
                      rows={2}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="content">Obsah</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      placeholder="Plný text článku..."
                      rows={8}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="image_url">URL obrázka</Label>
                    <Input
                      id="image_url"
                      value={formData.image_url}
                      onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                      placeholder="https://..."
                    />
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Switch
                      id="published"
                      checked={formData.published}
                      onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
                    />
                    <Label htmlFor="published">Publikovať</Label>
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button type="submit" className="flex-1">
                      {editingPost ? "Uložiť zmeny" : "Vytvoriť"}
                    </Button>
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Zrušiť
                    </Button>
                  </div>
                </form>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogEditor;
