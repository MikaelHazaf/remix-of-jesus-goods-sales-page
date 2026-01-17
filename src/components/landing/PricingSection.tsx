import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Zap, Gift } from "lucide-react";

const CHECKOUT_URL = "https://pay.cakto.com.br/jdf8uyq_413393";

const included = [
  "E-book Aprendendo a Orar (+100 páginas)",
  "E-book Atividades ABC Bíblicas (+100 páginas)",
  "E-book Colorindo com Propósito (+100 páginas)",
  "E-book Antigo Testamento (+100 páginas)",
  "E-book Passatempo Bíblico (+100 páginas)",
  "Acesso vitalício ao material",
  "Download imediato",
  "Atualizações gratuitas"
];

const PricingSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 gradient-hero text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-20 sm:w-40 h-20 sm:h-40 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 sm:w-60 h-32 sm:h-60 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              Oferta Por Tempo Limitado
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-2">
              Garanta Seu Kit Bíblico Completo Agora!
            </h2>
            <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto px-2">
              Invista no futuro espiritual do seu filho com um material completo 
              e de alta qualidade. Preço promocional por tempo limitado!
            </p>
          </div>

          <div className="bg-white text-foreground rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
              {/* Benefits List */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  <h3 className="text-lg sm:text-xl font-bold">O que está incluso:</h3>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Card */}
              <div className="flex-1 text-center">
                <div className="bg-muted rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">De:</p>
                  <p className="text-2xl sm:text-3xl font-bold text-muted-foreground line-through mb-3 sm:mb-4">
                    R$ 97,00
                  </p>
                  
                  <p className="text-xs sm:text-sm text-success font-semibold mb-1 sm:mb-2">Por apenas:</p>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-xl sm:text-2xl font-bold">R$</span>
                    <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-success">19</span>
                    <span className="text-xl sm:text-2xl font-bold text-success">,90</span>
                  </div>
                  
                  <div className="inline-block bg-accent text-accent-foreground text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
                    Economia de R$ 77,10!
                  </div>

                  <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="block">
                    <Button 
                      size="lg"
                      className="w-full gradient-cta hover:opacity-90 text-white font-bold text-base sm:text-lg py-5 sm:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
                    >
                      Quero Garantir Meu Kit
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>

                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-3 sm:mt-4">
                    🔒 Compra 100% segura • Acesso imediato
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
