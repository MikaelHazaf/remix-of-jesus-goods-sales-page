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
    icon: <Download className="w-8 h-8" />,
    title: "Download Imediato",
    description: "Receba o acesso instantaneamente após a confirmação do pagamento. Sem espera!"
  },
  {
    icon: <Infinity className="w-8 h-8" />,
    title: "Acesso Vitalício",
    description: "O material é seu para sempre. Acesse quando quiser, de qualquer dispositivo."
  },
  {
    icon: <Printer className="w-8 h-8" />,
    title: "Imprima Quantas Vezes Quiser",
    description: "Arquivos em PDF de alta qualidade, prontos para impressão ilimitada."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Para Diferentes Idades",
    description: "Atividades adaptadas para crianças de 3 a 10 anos, toda a família aproveita!"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Compra Segura",
    description: "Pagamento processado com total segurança. Seus dados estão protegidos."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Economize Tempo",
    description: "Material pronto e organizado. É só imprimir e usar, sem complicação!"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✨ Benefícios Exclusivos
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Por Que Escolher o <span className="text-primary">Jesus Goods</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mais do que um simples kit de atividades, é uma ferramenta completa 
            para edificar a fé dos seus filhos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 bg-background rounded-2xl border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center text-white shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
