import { Heart, AlertCircle, Lightbulb } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
            Você sente dificuldade em ensinar a Palavra de Deus 
            de forma <span className="text-accent">divertida</span> para seu filho?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-background p-6 rounded-2xl shadow-sm border">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Falta de Tempo</h3>
              <p className="text-muted-foreground text-sm">
                A correria do dia a dia dificulta encontrar tempo de qualidade para 
                ensinar valores cristãos aos pequenos.
              </p>
            </div>

            <div className="bg-background p-6 rounded-2xl shadow-sm border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Materiais Dispersos</h3>
              <p className="text-muted-foreground text-sm">
                É difícil encontrar atividades bíblicas organizadas, de qualidade 
                e adequadas para a idade do seu filho.
              </p>
            </div>

            <div className="bg-background p-6 rounded-2xl shadow-sm border">
              <div className="w-14 h-14 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Engajamento</h3>
              <p className="text-muted-foreground text-sm">
                Crianças perdem o interesse rapidamente se o conteúdo não for 
                apresentado de forma lúdica e colorida.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20">
            <p className="text-xl font-semibold text-primary">
              💡 A boa notícia: O Kit Jesus Goods resolve todos esses problemas!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
