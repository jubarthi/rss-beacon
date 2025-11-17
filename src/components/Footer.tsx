const Footer = () => {
  const sources = [
    { name: "BBC News", url: "https://www.bbc.com/news" },
    { name: "Reuters", url: "https://www.reuters.com" },
    { name: "Agência Brasil", url: "https://agenciabrasil.ebc.com.br" },
    { name: "G1", url: "https://g1.globo.com" },
    { name: "Folha de S.Paulo", url: "https://www.folha.uol.com.br" },
    { name: "Estadão", url: "https://www.estadao.com.br" },
    { name: "ONU Brasil", url: "https://brasil.un.org" },
  ];

  return (
    <footer className="border-t border-border bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-bold text-lg mb-4">Sobre o Portal</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Plataforma independente dedicada à educação sobre comunicados de imprensa 
              e a importância do jornalismo profissional na sociedade contemporânea.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Fontes de Conteúdo</h3>
            <div className="flex flex-wrap gap-2">
              {sources.map((source) => (
                <a
                  key={source.name}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-2 py-1 bg-secondary rounded hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {source.name}
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Conteúdo externo obtido via RSS público. Este site não modifica textos originais.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Transparência</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✓ Sem uso de inteligência artificial</li>
              <li>✓ Fontes jornalísticas verificadas</li>
              <li>✓ Conteúdo educacional gratuito</li>
              <li>✓ Plataforma sem fins lucrativos</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Press Release BR. 
            Plataforma independente para fins educacionais e culturais.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
