import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Palette, Puzzle, Cross, Sparkles } from "lucide-react";
import aprendendo from "@/assets/aprendendo-a-orar.png";
import colorindo from "@/assets/colorindo-com-proposito.webp";
import atividades from "@/assets/atividades-abc-biblicas.webp";
import antigo from "@/assets/antigo-testamento.png";
import passatempo from "@/assets/passatempo-biblico.png";

const materials = [
  {
    title: "Aprendendo a Orar",
    description: "Ensine seus filhos a desenvolver uma vida de oração desde cedo com atividades práticas e ilustradas.",
    image: aprendendo,
    icon: <Sparkles className="w-5 h-5" />,
    pages: "100+ páginas"
  },
  {
    title: "Atividades ABC Bíblicas",
    description: "Alfabetização cristã! Aprenda as letras enquanto conhece personagens e histórias da Bíblia.",
    image: atividades,
    icon: <BookOpen className="w-5 h-5" />,
    pages: "100+ páginas"
  },
  {
    title: "Colorindo com Propósito",
    description: "Desenhos lindos para colorir que ensinam valores cristãos e desenvolvem a criatividade.",
    image: colorindo,
    icon: <Palette className="w-5 h-5" />,
    pages: "100+ páginas"
  },
  {
    title: "Antigo Testamento",
    description: "As principais histórias do Antigo Testamento adaptadas para crianças com atividades interativas.",
    image: antigo,
    icon: <Cross className="w-5 h-5" />,
    pages: "100+ páginas"
  },
  {
    title: "Passatempo Bíblico",
    description: "Caça-palavras, labirintos, jogos dos 7 erros e muito mais para aprender brincando!",
    image: passatempo,
    icon: <Puzzle className="w-5 h-5" />,
    pages: "100+ páginas"
  }
];

const KitContentsSection = () => {
  return (
    <section className="py-16 lg:py-24 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📦 O Que Você Vai Receber
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            5 E-books Completos com{" "}
            <span className="text-gradient">+500 Páginas</span> de Atividades
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Material completo e organizado para você ter tudo em um só lugar. 
            Desenvolvido por educadores cristãos para máximo aproveitamento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {materials.map((material, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={material.image} 
                  alt={material.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {material.icon}
                  </div>
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full">
                    {material.pages}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {material.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {material.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitContentsSection;
