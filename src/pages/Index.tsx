import { useState, useEffect } from "react";
import { FileText, TrendingUp, Users, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { Card } from "@/components/ui/card";
import { fetchNews, getCachedNews, setCachedNews, type NewsItem } from "@/lib/rssService";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadNews = async () => {
      // Try cache first
      const cached = getCachedNews();
      if (cached && cached.length > 0) {
        setNews(cached);
        setLoading(false);
        return;
      }

      // Fetch fresh data
      try {
        const freshNews = await fetchNews();
        setNews(freshNews);
        setCachedNews(freshNews);
        
        if (freshNews.length > 0) {
          toast({
            title: "Notícias atualizadas",
            description: `${freshNews.length} comunicados carregados com sucesso.`,
          });
        }
      } catch (error) {
        toast({
          title: "Erro ao carregar notícias",
          description: "Não foi possível buscar as últimas notícias.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-muted/30 to-background py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Comunicados de Imprensa
              <span className="block text-editorial-red mt-2">que fazem história</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-serif">
              Explore o universo dos press releases, entenda sua importância e acompanhe 
              os principais anúncios de fontes jornalísticas confiáveis.
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center hover-editorial transition-all">
              <FileText className="h-12 w-12 text-editorial-red mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Fontes Verificadas</h3>
              <p className="text-sm text-muted-foreground">
                Conteúdo de portais reconhecidos: BBC, Reuters, Agência Brasil e mais
              </p>
            </Card>

            <Card className="p-6 text-center hover-editorial transition-all">
              <TrendingUp className="h-12 w-12 text-editorial-red mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Atualização Constante</h3>
              <p className="text-sm text-muted-foreground">
                Notícias atualizadas automaticamente a cada 12 horas via RSS
              </p>
            </Card>

            <Card className="p-6 text-center hover-editorial transition-all">
              <BookOpen className="h-12 w-12 text-editorial-red mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Conteúdo Educacional</h3>
              <p className="text-sm text-muted-foreground">
                Aprenda sobre história, técnicas e importância do jornalismo
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Últimos Comunicados</h2>
                <p className="text-muted-foreground">
                  Acompanhe os principais anúncios e releases de fontes confiáveis
                </p>
              </div>
              <Users className="h-8 w-8 text-editorial-red hidden md:block" />
            </div>

            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="p-6 animate-pulse">
                    <div className="h-4 bg-muted rounded w-3/4 mb-4" />
                    <div className="h-3 bg-muted rounded w-full mb-2" />
                    <div className="h-3 bg-muted rounded w-2/3" />
                  </Card>
                ))}
              </div>
            ) : news.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((item, index) => (
                  <NewsCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    source={item.source}
                    date={item.pubDate}
                    link={item.link}
                  />
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <p className="text-muted-foreground">
                  Não foi possível carregar notícias no momento. Por favor, tente novamente mais tarde.
                </p>
              </Card>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
