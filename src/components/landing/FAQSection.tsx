import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como recebo o material após a compra?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link de acesso para baixar todos os 5 e-books em formato PDF. O download é instantâneo!"
  },
  {
    question: "Posso imprimir quantas vezes eu quiser?",
    answer: "Sim! Os arquivos são seus para sempre. Você pode imprimir quantas cópias precisar, seja para seus filhos, sobrinhos, ou até para usar em classes de escola dominical."
  },
  {
    question: "Para qual faixa etária é indicado?",
    answer: "O kit foi desenvolvido para crianças de 3 a 10 anos. Temos atividades de diferentes níveis de complexidade, desde colorir para os mais novos até caça-palavras e leitura para os maiores."
  },
  {
    question: "O pagamento é seguro?",
    answer: "Totalmente! O pagamento é processado pela plataforma Cakto, que utiliza criptografia de última geração. Você pode pagar com cartão de crédito, PIX ou boleto."
  },
  {
    question: "Preciso de algum programa especial para abrir os arquivos?",
    answer: "Não! Os arquivos são em PDF, formato universal que pode ser aberto em qualquer computador, tablet ou celular. Basta ter um leitor de PDF (como o Adobe Reader gratuito)."
  },
  {
    question: "E se eu não gostar do material?",
    answer: "Ficamos tristes, mas entendemos! Se por qualquer motivo você não ficar satisfeita, entre em contato conosco que avaliaremos seu caso com todo carinho."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ❓ Perguntas Frequentes
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Tire Suas <span className="text-accent">Dúvidas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reunimos as perguntas mais frequentes para ajudar você 
            a tomar a melhor decisão.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border rounded-2xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
