import { 
  Download, 
  Infinity, 
  Printer, 
  Users, 
  Shield, 
  Clock 
} from "lucide-react";

const benefits = [
  {
    icon: <Download className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Download Imediato",
    description: "Receba o acesso instantaneamente após a confirmação do pagamento. Sem espera!"
  },
  {
    icon: <Infinity className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Acesso Vitalício",
    description: "O material é seu para sempre. Acesse quando quiser, de qualquer dispositivo."
  },
  {
    icon: <Printer className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Imprima Quantas Vezes Quiser",
    description: "Arquivos em PDF de alta qualidade, prontos para impressão ilimitada."
  },
  {
    icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Para Diferentes Idades",
    description: "Atividades adaptadas para crianças de 3 a 10 anos, toda a família aproveita!"
  },
  {
    icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Compra Segura",
    description: "Pagamento processado com total segurança. Seus dados estão protegidos."
  },
  {
    icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Economize Tempo",
    description: "Material pronto e organizado. É só imprimir e usar, sem complicação!"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-success/10 text-success px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            ✨ Benefícios Exclusivos
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-2">
            Por Que Escolher o <span className="text-primary">Jesus Goods</span>?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-2">
            Mais do que um simples kit de atividades, é uma ferramenta completa 
            para edificar a fé dos seus filhos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-background rounded-2xl border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl gradient-hero flex items-center justify-center text-white shrink-0">
                {benefit.icon}
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
