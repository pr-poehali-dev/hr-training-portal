import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Станьте специалистом в управлении кадрами уже завтра!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-50">
            Освойте востребованные навыки и получите диплом государственного образца
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <Icon name="Rocket" className="mr-2" />
            Запишись на бесплатное тестирование уже сегодня!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
