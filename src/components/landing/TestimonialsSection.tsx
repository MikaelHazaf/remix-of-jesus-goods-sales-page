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
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            💬 Depoimentos Reais
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            O Que as <span className="text-primary">Mamães</span> Estão Dizendo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milhares de famílias já transformaram o momento de ensino bíblico 
            com o Kit Jesus Goods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-muted-foreground italic pl-6">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-6 pt-4 border-t">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
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
