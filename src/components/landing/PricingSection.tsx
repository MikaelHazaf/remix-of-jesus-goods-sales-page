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
    <section className="py-16 lg:py-24 gradient-hero text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              Oferta Por Tempo Limitado
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Garanta Seu Kit Bíblico Completo Agora!
            </h2>
            <p className="text-white/80 max-w-xl mx-auto">
              Invista no futuro espiritual do seu filho com um material completo 
              e de alta qualidade. Preço promocional por tempo limitado!
            </p>
          </div>

          <div className="bg-white text-foreground rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Benefits List */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-6">
                  <Gift className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">O que está incluso:</h3>
                </div>
                <ul className="space-y-3">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Card */}
              <div className="flex-1 text-center lg:text-right">
                <div className="bg-muted rounded-2xl p-6 lg:p-8">
                  <p className="text-sm text-muted-foreground mb-2">De:</p>
                  <p className="text-3xl font-bold text-muted-foreground line-through mb-4">
                    R$ 97,00
                  </p>
                  
                  <p className="text-sm text-success font-semibold mb-2">Por apenas:</p>
                  <div className="flex items-baseline justify-center lg:justify-end gap-1 mb-2">
                    <span className="text-2xl font-bold">R$</span>
                    <span className="text-6xl lg:text-7xl font-extrabold text-success">19</span>
                    <span className="text-2xl font-bold text-success">,90</span>
                  </div>
                  
                  <div className="inline-block bg-accent text-accent-foreground text-sm font-bold px-4 py-2 rounded-full mb-6">
                    Economia de R$ 77,10!
                  </div>

                  <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="block">
                    <Button 
                      size="lg"
                      className="w-full gradient-cta hover:opacity-90 text-white font-bold text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
                    >
                      Quero Garantir Meu Kit
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>

                  <p className="text-xs text-muted-foreground mt-4">
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
