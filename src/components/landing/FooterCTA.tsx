import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Mail } from "lucide-react";

const CHECKOUT_URL = "https://pay.cakto.com.br/jdf8uyq_413393";

const FooterCTA = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Final CTA */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
              Última Chance!
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2">
              Não Deixe Essa Oportunidade Passar!
            </h2>
            
            <p className="text-white/70 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Por apenas <strong className="text-secondary">R$ 19,90</strong> (ao invés de R$ 97,00), 
              você garante +500 páginas de atividades bíblicas para transformar a educação 
              cristã do seu filho.
            </p>

            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
              <Button 
                size="lg"
                className="w-full sm:w-auto gradient-cta hover:opacity-90 text-white font-bold text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                Sim! Quero o Kit Jesus Goods
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-white/60">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Compra Segura</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Suporte via E-mail</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <div className="py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/50 text-center">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">✝️</span>
              <span className="font-bold text-white">Jesus Goods</span>
            </div>
            
            <p>© {new Date().getFullYear()} Jesus Goods. Todos os direitos reservados.</p>
            
            <p>
              Feito com <Heart className="w-3 h-3 sm:w-4 sm:h-4 inline text-accent" /> para famílias cristãs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
