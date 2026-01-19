import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import mockupKit from "@/assets/mockup-kit.webp";
const CHECKOUT_URL = "https://pay.cakto.com.br/jdf8uyq_413393";
const HeroSection = () => {
  return <section className="relative overflow-hidden gradient-warm py-8 sm:py-12 lg:py-20">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-secondary/30 blur-2xl hidden sm:block" />
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl hidden sm:block" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Kit Bíblico Infantil Completo
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 sm:mb-6">
              Transforme o aprendizado bíblico do seu filho em uma{" "}
              <span className="text-gradient">aventura divertida!</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">+500 páginas de atividades criativas para ensinar valores cristãos de forma lúdica e educativa. Perfeito para crianças de 3 a 12 anos.</p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                <span>Download Imediato</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                <span>Acesso Vitalício</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                <span>Imprima Quantas Vezes</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto gradient-cta hover:opacity-90 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all group">
                  Quero o Kit Agora
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <div className="text-center sm:text-left">
                <p className="text-xs sm:text-sm text-muted-foreground line-through">De R$ 97,00</p>
                <p className="text-xl sm:text-2xl font-bold text-success">Por apenas R$ 19,90</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative order-1 lg:order-2 w-full max-w-sm sm:max-w-md lg:max-w-none">
            <div className="relative z-10">
              <img 
                src={mockupKit} 
                alt="Kit Bíblico Jesus Goods - Mockup com todos os materiais" 
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="500"
                height="500"
              />
            </div>
            {/* Header de urgência - fixo no topo */}
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="fixed top-0 left-0 right-0 z-50 bg-accent text-accent-foreground font-bold text-sm sm:text-base py-2 sm:py-3 text-center shadow-lg hover:opacity-90 transition-opacity cursor-pointer block">
              🔥 ÚLTIMAS 7 VAGAS COM 79% OFF 🔥
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;