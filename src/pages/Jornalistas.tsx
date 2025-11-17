import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Jornalistas = () => {
  const testimonials = [
    {
      name: "Ana Rodrigues",
      role: "Editora-Chefe, Portal de Notícias Nacional",
      quote: "Press releases bem estruturados são essenciais para nosso trabalho diário. Eles nos permitem verificar informações rapidamente e contextualizar notícias com precisão. A transparência é fundamental.",
      initials: "AR"
    },
    {
      name: "Carlos Mendes",
      role: "Jornalista Investigativo, 25 anos de carreira",
      quote: "Ao longo de décadas cobrindo política e economia, aprendi que comunicados oficiais são pontos de partida, não de chegada. São ferramentas valiosas quando emitidos com responsabilidade e ética.",
      initials: "CM"
    },
    {
      name: "Beatriz Santos",
      role: "Correspondente Internacional",
      quote: "Em coberturas internacionais, press releases de agências oficiais e organizações multilaterais são indispensáveis. Eles fornecem dados verificados em contextos onde a informação é escassa ou conflitante.",
      initials: "BS"
    },
    {
      name: "Roberto Lima",
      role: "Editor de Economia",
      quote: "O mercado financeiro depende de comunicados precisos e tempestivos. Um press release mal elaborado pode gerar volatilidade desnecessária. Profissionalismo na comunicação corporativa protege investidores e stakeholders.",
      initials: "RL"
    },
    {
      name: "Juliana Costa",
      role: "Repórter de Ciência e Saúde",
      quote: "Na cobertura de saúde pública, press releases de instituições de pesquisa são cruciais. Eles traduzem descobertas científicas complexas para linguagem acessível, facilitando a divulgação responsável de avanços médicos.",
      initials: "JC"
    },
    {
      name: "Fernando Alves",
      role: "Produtor de Jornalismo Televisivo",
      quote: "Para TV, comunicados com dados audiovisuais - fotos, vídeos, infográficos - enriquecem imensamente nossas reportagens. Press releases multimídia são o futuro da comunicação institucional.",
      initials: "FA"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-6 tracking-tight">
              Vozes do Jornalismo
            </h1>
            <p className="text-xl text-muted-foreground font-serif leading-relaxed max-w-3xl mx-auto">
              Profissionais da mídia compartilham suas perspectivas sobre a importância 
              de comunicados de imprensa responsáveis no ecossistema informacional.
            </p>
          </div>

          <Card className="p-8 mb-12 bg-gradient-to-br from-editorial-red/5 to-editorial-red/10 border-editorial-red/20">
            <div className="flex items-start gap-4">
              <Quote className="h-12 w-12 text-editorial-red shrink-0" />
              <div>
                <p className="text-lg font-serif italic leading-relaxed text-foreground mb-4">
                  "O jornalismo não sobrevive apenas de investigação própria. Comunicados de imprensa 
                  bem fundamentados economizam tempo precioso e permitem que nos concentremos em análise 
                  aprofundada. São parte vital da infraestrutura informacional."
                </p>
                <p className="font-bold">— Princípio editorial consensual</p>
              </div>
            </div>
          </Card>

          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Depoimentos</h2>
            <p className="text-muted-foreground">
              Experiências e reflexões de jornalistas sobre press releases e comunicação institucional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover-editorial transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-editorial-red/20 flex items-center justify-center shrink-0">
                    <span className="text-editorial-red font-bold text-sm">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="font-serif text-muted-foreground leading-relaxed italic border-l-4 border-editorial-red pl-4">
                  "{testimonial.quote}"
                </blockquote>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4">O Consenso Profissional</h2>
            <div className="font-serif text-muted-foreground space-y-4 leading-relaxed">
              <p>
                Apesar de diferentes especializações e veículos, jornalistas profissionais concordam 
                em aspectos fundamentais sobre comunicados de imprensa:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Devem priorizar veracidade absoluta sobre apelo emocional</li>
                <li>Fontes devem ser claramente identificadas e disponíveis para entrevistas</li>
                <li>Dados estatísticos precisam ser verificáveis e contextualizados</li>
                <li>Linguagem deve ser clara, evitando jargão excessivo ou eufemismos</li>
                <li>Timing é crucial - comunicados atrasados perdem relevância e credibilidade</li>
                <li>Correções de erros devem ser imediatas e igualmente divulgadas</li>
              </ul>
              <p className="mt-6">
                Quando esses princípios são respeitados, press releases fortalecem o jornalismo. 
                Quando violados, prejudicam não apenas a reputação do emissor, mas a confiança 
                pública no ecossistema informacional como um todo.
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Jornalistas;
