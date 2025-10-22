import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PainPointsSection = () => {
  const painPoints = [
    'Трудности с оформлением трудовой документации?',
    'Нужна помощь в подборе эффективных сотрудников?',
    'Необходимо повысить квалификацию для карьерного роста?',
    'Хочется обрести новую перспективную специальность?',
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-accent/10 to-primary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Основные боли вашей аудитории
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {painPoints.map((pain, index) => (
            <Card key={index} className="border-l-4 border-l-accent">
              <CardContent className="p-4 flex items-center gap-4">
                <Icon name="AlertCircle" className="text-accent" size={32} />
                <p className="text-lg font-semibold">{pain}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
