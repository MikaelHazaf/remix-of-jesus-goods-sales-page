import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Mail } from "lucide-react";

const CHECKOUT_URL = "https://pay.cakto.com.br/jdf8uyq_413393";

const FooterCTA = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Final CTA */}
      <section className="py-16 lg:py-20 border-b border-white/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Heart className="w-4 h-4 text-accent" />
              Última Chance!
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Não Deixe Essa Oportunidade Passar!
            </h2>
            
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Por apenas <strong className="text-secondary">R$ 19,90</strong> (ao invés de R$ 97,00), 
              você garante +500 páginas de atividades bíblicas para transformar a educação 
              cristã do seu filho.
            </p>

            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="gradient-cta hover:opacity-90 text-white font-bold text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                Sim! Quero o Kit Jesus Goods
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Compra Segura</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Suporte via E-mail</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✝️</span>
              <span className="font-bold text-white">Jesus Goods</span>
            </div>
            
            <p>© {new Date().getFullYear()} Jesus Goods. Todos os direitos reservados.</p>
            
            <p>
              Feito com <Heart className="w-4 h-4 inline text-accent" /> para famílias cristãs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
