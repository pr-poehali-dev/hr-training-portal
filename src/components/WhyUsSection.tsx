import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const WhyUsSection = () => {
  const benefits = [
    {
      icon: 'Target',
      title: 'Максимум практики',
      text: 'Минимальное количество теории, максимум реальных кейсов',
    },
    {
      icon: 'Users',
      title: 'Эксперты-практики',
      text: 'Обучение ведут специалисты с многолетним стажем',
    },
    {
      icon: 'Clock',
      title: 'Удобный график',
      text: 'Очное и онлайн обучение по вашему расписанию',
    },
    {
      icon: 'MessageCircle',
      title: 'Личная поддержка',
      text: 'Индивидуальная обратная связь каждому студенту',
    },
    {
      icon: 'Briefcase',
      title: 'Трудоустройство',
      text: 'Гарантированное трудоустройство лучших выпускников',
    },
    {
      icon: 'Award',
      title: 'Гособразец диплома',
      text: 'Официальные документы установленного образца',
    },
  ];

  return (
    <section id="why-us" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll">
          Почему выбирают нашу школу?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-all border-t-4 border-t-primary animate-on-scroll">
              <CardContent className="p-6">
                <Icon name={item.icon as any} className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;