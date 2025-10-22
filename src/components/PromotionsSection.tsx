import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PromotionsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-accent to-orange-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="Zap" className="mx-auto mb-6" size={64} />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Акционные предложения</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6">
                <Icon name="Tag" className="mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">Скидка 15%</h3>
                <p className="text-orange-100">До конца месяца</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6">
                <Icon name="Gift" className="mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">Бесплатный урок</h3>
                <p className="text-orange-100">При записи на программу</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6">
                <Icon name="UserPlus" className="mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">Ограниченный набор</h3>
                <p className="text-orange-100">Успейте записаться!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
