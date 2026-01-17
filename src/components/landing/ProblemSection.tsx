import { Heart, AlertCircle, Lightbulb } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 px-2">
            Você sente dificuldade em ensinar a Palavra de Deus 
            de forma <span className="text-accent">divertida</span> para seu filho?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
            <div className="bg-background p-5 sm:p-6 rounded-2xl shadow-sm border">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <AlertCircle className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-2">Falta de Tempo</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                A correria do dia a dia dificulta encontrar tempo de qualidade para 
                ensinar valores cristãos aos pequenos.
              </p>
            </div>

            <div className="bg-background p-5 sm:p-6 rounded-2xl shadow-sm border">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-2">Materiais Dispersos</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                É difícil encontrar atividades bíblicas organizadas, de qualidade 
                e adequadas para a idade do seu filho.
              </p>
            </div>

            <div className="bg-background p-5 sm:p-6 rounded-2xl shadow-sm border sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-secondary-foreground" />
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-2">Engajamento</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Crianças perdem o interesse rapidamente se o conteúdo não for 
                apresentado de forma lúdica e colorida.
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-primary/5 rounded-2xl border border-primary/20">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-primary">
              💡 A boa notícia: O Kit Jesus Goods resolve todos esses problemas!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
