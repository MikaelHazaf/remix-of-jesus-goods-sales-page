import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import mockupKit from "@/assets/mockup-kit.png";

const CHECKOUT_URL = "https://pay.cakto.com.br/jdf8uyq_413393";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-warm py-12 lg:py-20">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-secondary/30 blur-2xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Kit Bíblico Infantil Completo
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
              Transforme o aprendizado bíblico do seu filho em uma{" "}
              <span className="text-gradient">aventura divertida!</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              +500 páginas de atividades criativas para ensinar valores cristãos 
              de forma lúdica e educativa. Perfeito para crianças de 3 a 10 anos.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Download Imediato</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Acesso Vitalício</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Imprima Quantas Vezes Quiser</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="gradient-cta hover:opacity-90 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
                >
                  Quero o Kit Agora
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <div className="text-center sm:text-left">
                <p className="text-sm text-muted-foreground line-through">De R$ 97,00</p>
                <p className="text-2xl font-bold text-success">Por apenas R$ 19,90</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative">
            <div className="relative z-10">
              <img 
                src={mockupKit} 
                alt="Kit Bíblico Jesus Goods - Mockup com todos os materiais" 
                className="w-full max-w-lg mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Badge de desconto */}
            <div className="absolute -top-4 -right-4 lg:top-0 lg:right-0 bg-accent text-accent-foreground font-bold text-sm px-4 py-2 rounded-full shadow-lg animate-bounce">
              -79% OFF
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
