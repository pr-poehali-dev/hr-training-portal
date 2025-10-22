import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const BenefitsSection = () => {
  const benefits = [
    'Только действующие законы и изменения российского трудового права',
    'Учебные пособия разработаны ведущими профессорами и опытными юристами',
    'Небольшие группы позволяют уделять достаточно внимания каждому ученику',
    'Доступ к дополнительной библиотеке статей и полезных материалов по кадровому делу',
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll">
          Зачем учиться именно у нас?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow animate-on-scroll">
              <CardContent className="p-6 flex items-start gap-4">
                <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={24} />
                <p className="text-lg">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;