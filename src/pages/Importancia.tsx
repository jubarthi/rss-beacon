import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Target, Megaphone, CheckCircle } from "lucide-react";

const Importancia = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Credibilidade e Transparência",
      description: "Press releases bem elaborados estabelecem confiança entre organizações e público, demonstrando compromisso com a verdade e responsabilidade social."
    },
    {
      icon: Target,
      title: "Alcance Estratégico",
      description: "Permitem que informações relevantes cheguem simultaneamente a diversos veículos de comunicação, amplificando mensagens institucionais de forma coordenada."
    },
    {
      icon: Megaphone,
      title: "Controle da Narrativa",
      description: "Oferecem às organizações a oportunidade de apresentar fatos sob sua perspectiva, contextualizando eventos antes que versões distorcidas circulem."
    },
    {
      icon: CheckCircle,
      title: "Registro Histórico",
      description: "Funcionam como documentos oficiais que registram marcos, decisões e posicionamentos, criando um histórico verificável e auditável."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6 tracking-tight">
              A Importância do Jornalismo Profissional
            </h1>
            <p className="text-xl text-muted-foreground font-serif leading-relaxed">
              Por que comunicados de imprensa e jornalismo ético são pilares 
              fundamentais de uma sociedade democrática e informada.
            </p>
          </div>

          <Card className="p-8 mb-12 bg-gradient-to-br from-editorial-red/5 to-editorial-red/10 border-editorial-red/20">
            <h2 className="text-2xl font-bold mb-4">O Papel Social do Jornalismo</h2>
            <div className="prose prose-gray max-w-none font-serif text-foreground">
              <p className="text-lg leading-relaxed mb-4">
                O jornalismo profissional atua como guardião da democracia, verificando fatos, 
                investigando abusos de poder e mantendo o público informado sobre questões que 
                afetam suas vidas. Os press releases, quando utilizados eticamente, são ferramentas 
                que facilitam esse processo.
              </p>
              <p className="text-lg leading-relaxed">
                Em uma era de desinformação e fake news, a distinção entre comunicação institucional 
                responsável e propaganda manipulativa nunca foi tão crucial. Press releases seguem 
                protocolos jornalísticos: verificação de fatos, linguagem clara, atribuição de fontes 
                e separação entre opinião e informação.
              </p>
            </div>
          </Card>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Benefícios Estratégicos</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="p-6 hover-editorial transition-all">
                    <Icon className="h-10 w-10 text-editorial-red mb-4" />
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-serif">
                      {benefit.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Anatomia de um Press Release Eficaz</h2>
            <div className="space-y-6 font-serif">
              <div className="border-l-4 border-editorial-red pl-6">
                <h3 className="font-bold text-lg mb-2">1. Título Impactante</h3>
                <p className="text-muted-foreground">
                  Resume a notícia em uma linha, capturando atenção sem sensacionalismo. 
                  Deve responder: "O que aconteceu?"
                </p>
              </div>

              <div className="border-l-4 border-editorial-red pl-6">
                <h3 className="font-bold text-lg mb-2">2. Lead Informativo</h3>
                <p className="text-muted-foreground">
                  Primeiro parágrafo que responde: Quem? O quê? Quando? Onde? Por quê? Como? 
                  Contém as informações mais essenciais.
                </p>
              </div>

              <div className="border-l-4 border-editorial-red pl-6">
                <h3 className="font-bold text-lg mb-2">3. Corpo Contextualizado</h3>
                <p className="text-muted-foreground">
                  Desenvolve a história com detalhes, citações de fontes oficiais, dados 
                  relevantes e contexto histórico quando aplicável.
                </p>
              </div>

              <div className="border-l-4 border-editorial-red pl-6">
                <h3 className="font-bold text-lg mb-2">4. Boilerplate Institucional</h3>
                <p className="text-muted-foreground">
                  Parágrafo final padronizado descrevendo a organização emissora, sua missão 
                  e atividades principais.
                </p>
              </div>

              <div className="border-l-4 border-editorial-red pl-6">
                <h3 className="font-bold text-lg mb-2">5. Informações de Contato</h3>
                <p className="text-muted-foreground">
                  Nome, telefone e e-mail de porta-voz ou assessor de imprensa responsável 
                  por esclarecimentos adicionais.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4">Responsabilidade Ética</h2>
            <p className="text-lg leading-relaxed font-serif text-muted-foreground mb-4">
              Todo press release deve respeitar princípios éticos fundamentais: veracidade absoluta 
              das informações, respeito ao interesse público, clareza na distinção entre fato e opinião, 
              e compromisso com a correção rápida de eventuais erros.
            </p>
            <p className="text-lg leading-relaxed font-serif text-muted-foreground">
              Organizações que emitem comunicados falsos, enganosos ou manipulativos não apenas 
              prejudicam sua própria credibilidade, mas corroem a confiança pública no ecossistema 
              informacional como um todo - um dano coletivo com consequências profundas para a sociedade.
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Importancia;
