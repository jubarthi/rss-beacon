import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Clock, Globe, Newspaper, Radio } from "lucide-react";

const Historia = () => {
  const timeline = [
    {
      year: "1906",
      icon: Newspaper,
      title: "O Primeiro Press Release",
      description: "Ivy Lee, considerado o pai das relações públicas modernas, cria o primeiro comunicado de imprensa após um acidente ferroviário da Pennsylvania Railroad. Sua abordagem transparente revoluciona a comunicação corporativa."
    },
    {
      year: "1920-1950",
      icon: Radio,
      title: "Era do Rádio e Cinema",
      description: "Com a popularização do rádio e do cinema, os press releases se tornam essenciais para divulgar eventos, lançamentos de filmes e programas. A linguagem se adapta aos novos meios."
    },
    {
      year: "1960-1980",
      icon: Globe,
      title: "Profissionalização",
      description: "Surgimento de assessorias de imprensa especializadas. O press release ganha formato padronizado e se torna ferramenta indispensável para empresas, governos e organizações."
    },
    {
      year: "1990-presente",
      icon: Clock,
      title: "Era Digital",
      description: "Internet transforma distribuição de press releases. Surgem portais especializados, redes sociais amplificam alcance e a velocidade de divulgação aumenta exponencialmente."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6 tracking-tight">
              História do Press Release
            </h1>
            <p className="text-xl text-muted-foreground font-serif leading-relaxed">
              Uma jornada de mais de um século de evolução na comunicação institucional, 
              desde o primeiro comunicado até a era digital.
            </p>
          </div>

          <Card className="p-8 mb-12 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4">Origem e Propósito</h2>
            <div className="prose prose-gray max-w-none font-serif text-foreground">
              <p className="text-lg leading-relaxed mb-4">
                O comunicado de imprensa nasceu da necessidade de estabelecer um canal direto 
                e transparente entre organizações e a mídia. Antes de sua criação, a comunicação 
                empresarial era caótica e frequentemente manipulada por interesses diversos.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Ivy Ledbetter Lee, jornalista e consultor de relações públicas, percebeu que 
                a transparência proativa era mais eficaz que o sigilo ou a censura. Após o 
                desastre ferroviário de Atlantic City em 1906, Lee convenceu a Pennsylvania 
                Railroad a divulgar informações completas sobre o acidente, estabelecendo um 
                precedente fundamental.
              </p>
              <p className="text-lg leading-relaxed">
                Seu "Declaration of Principles" defendia que as empresas deveriam fornecer 
                informações precisas e oportunas à imprensa, inaugurando uma nova era de 
                comunicação corporativa baseada em ética e transparência.
              </p>
            </div>
          </Card>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Linha do Tempo</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-6 hover-editorial transition-all">
                    <div className="flex gap-6">
                      <div className="shrink-0">
                        <div className="w-16 h-16 rounded-full bg-editorial-red/10 flex items-center justify-center">
                          <Icon className="h-8 w-8 text-editorial-red" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-editorial-red mb-1">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed font-serif">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="p-8 bg-editorial-red/5 border-editorial-red/20">
            <h2 className="text-2xl font-bold mb-4">Legado e Futuro</h2>
            <p className="text-lg leading-relaxed font-serif text-muted-foreground">
              Mais de um século depois, o press release permanece como pilar fundamental 
              do jornalismo e das relações públicas. Sua estrutura - título, lead, corpo, 
              boilerplate e contato - continua eficaz, adaptando-se a novos formatos como 
              social media releases e comunicados multimídia. A essência permanece: comunicar 
              fatos relevantes com clareza, precisão e responsabilidade.
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Historia;
