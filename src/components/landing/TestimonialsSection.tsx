import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ana Paula S.",
    location: "São Paulo, SP",
    avatar: "👩‍👧",
    rating: 5,
    text: "Minha filha de 5 anos ama as atividades! Ela pede todo dia para fazer 'o livro da Bíblia'. É lindo ver ela aprendendo sobre Deus de forma tão natural e divertida.",
  },
  {
    name: "Carla Mendes",
    location: "Belo Horizonte, MG",
    avatar: "👩‍👦‍👦",
    rating: 5,
    text: "Comprei para usar na escolinha dominical e foi um sucesso! As crianças ficam super engajadas. O material é muito bem feito e as ilustrações são lindas.",
  },
  {
    name: "Fernanda Costa",
    location: "Curitiba, PR",
    avatar: "👩‍👧‍👦",
    rating: 5,
    text: "Melhor investimento que fiz! Tenho 3 filhos de idades diferentes e todos conseguem aproveitar o material. Super recomendo para todas as mães cristãs!",
  },
  {
    name: "Priscila Oliveira",
    location: "Recife, PE",
    avatar: "👩",
    rating: 5,
    text: "O download foi super rápido e o material é excelente! Já imprimi várias vezes e meu filho leva para a escola. Valeu muito a pena!",
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-secondary text-secondary-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            💬 Depoimentos Reais
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-2">
            O Que as <span className="text-primary">Mamães</span> Estão Dizendo
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-2">
            Milhares de famílias já transformaram o momento de ensino bíblico 
            com o Kit Jesus Goods.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <div className="relative mb-3 sm:mb-4">
                  <Quote className="absolute -top-2 -left-1 sm:-left-2 w-6 h-6 sm:w-8 sm:h-8 text-primary/20" />
                  <p className="text-muted-foreground italic text-xs sm:text-sm pl-5 sm:pl-6">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center text-xl sm:text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
