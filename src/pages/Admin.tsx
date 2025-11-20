import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LogOut, Trash2 } from "lucide-react";

interface CustomNews {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  link: string;
  signature: string;
  published_at: string;
}

const Admin = () => {
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState<CustomNews[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
    link: "",
    signature: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
    loadNews();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/auth");
      return;
    }

    setUser(session.user);

    // Check if user is admin
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .single();

    if (!roles) {
      toast({
        title: "Acesso negado",
        description: "Você não tem permissão para acessar esta página.",
        variant: "destructive",
      });
      navigate("/");
      return;
    }

    setIsAdmin(true);
    setLoading(false);
  };

  const loadNews = async () => {
    const { data } = await supabase
      .from("custom_news")
      .select("*")
      .order("published_at", { ascending: false })
      .limit(2);
    
    if (data) {
      setNews(data);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (news.length >= 2) {
      toast({
        title: "Limite atingido",
        description: "Você só pode ter até 2 notícias customizadas. Delete uma para adicionar nova.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from("custom_news")
        .insert([{
          ...formData,
          created_by: user.id,
        }]);

      if (error) throw error;

      toast({
        title: "Notícia publicada!",
        description: "Sua notícia foi adicionada com sucesso.",
      });

      setFormData({
        title: "",
        description: "",
        image_url: "",
        link: "",
        signature: "",
      });

      loadNews();
    } catch (error: any) {
      toast({
        title: "Erro ao publicar",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from("custom_news")
        .delete()
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Notícia removida",
        description: "A notícia foi deletada com sucesso.",
      });

      loadNews();
    } catch (error: any) {
      toast({
        title: "Erro ao deletar",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Painel Admin</h1>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Button>
          </div>

          {/* Notícias Existentes */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Notícias Customizadas ({news.length}/2)</CardTitle>
              <CardDescription>Suas notícias publicadas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {news.length === 0 ? (
                <p className="text-muted-foreground">Nenhuma notícia publicada ainda.</p>
              ) : (
                news.map((item) => (
                  <div key={item.id} className="flex justify-between items-start p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                      <p className="text-xs text-muted-foreground mt-2">Por: {item.signature}</p>
                    </div>
                    <Button
                      onClick={() => handleDelete(item.id)}
                      variant="destructive"
                      size="sm"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Formulário de Nova Notícia */}
          <Card>
            <CardHeader>
              <CardTitle>Publicar Nova Notícia</CardTitle>
              <CardDescription>Adicione uma notícia customizada ao site</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Título</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image_url">URL da Imagem (opcional)</Label>
                  <Input
                    id="image_url"
                    type="url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    placeholder="https://exemplo.com/imagem.jpg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="link">Link da Notícia</Label>
                  <Input
                    id="link"
                    type="url"
                    value={formData.link}
                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                    required
                    placeholder="https://exemplo.com/noticia"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signature">Assinatura/Autor</Label>
                  <Input
                    id="signature"
                    value={formData.signature}
                    onChange={(e) => setFormData({ ...formData, signature: e.target.value })}
                    required
                    placeholder="Nome do Autor"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={news.length >= 2}
                >
                  Publicar Notícia
                </Button>

                {news.length >= 2 && (
                  <p className="text-sm text-muted-foreground text-center">
                    Limite de 2 notícias atingido. Delete uma para adicionar nova.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
