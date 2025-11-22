import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

const Setup = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();

  const handleSetup = async () => {
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('setup-admin', {
        body: {
          email: 'thiago@jubarthi.com.br',
          password: '@#CItds2025'
        }
      });

      if (error) throw error;

      setSuccess(true);
      toast({
        title: "Usuário admin criado!",
        description: "Você pode agora fazer login em /auth",
      });
    } catch (error: any) {
      toast({
        title: "Erro no setup",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16 bg-gradient-to-br from-background via-muted/30 to-background">
        <Card className="w-full max-w-md mx-4">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Setup Inicial</CardTitle>
            <CardDescription>Configure o usuário administrador</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            {!success ? (
              <>
                <p className="text-sm text-muted-foreground">
                  Clique no botão abaixo para criar o usuário admin:
                  <br />
                  <strong>thiago@jubarthi.com.br</strong>
                </p>
                <Button
                  onClick={handleSetup}
                  disabled={loading}
                  className="w-full"
                >
                  {loading ? "Criando..." : "Criar Usuário Admin"}
                </Button>
              </>
            ) : (
              <div className="space-y-4">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
                <p className="text-lg font-semibold">Setup completo!</p>
                <p className="text-sm text-muted-foreground">
                  Usuário admin criado com sucesso. Você pode agora acessar o painel admin.
                </p>
                <Button
                  onClick={() => window.location.href = '/auth'}
                  className="w-full"
                >
                  Ir para Login
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Setup;
