import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="GraduationCap" className="text-primary" size={32} />
          <span className="text-2xl font-bold text-primary">Кадровик Профи</span>
        </div>
        <div className="hidden md:flex gap-6">
          <a href="#programs" className="text-foreground hover:text-primary transition">
            Программы
          </a>
          <a href="#why-us" className="text-foreground hover:text-primary transition">
            О школе
          </a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition">
            Отзывы
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition">
            Контакты
          </a>
        </div>
        <div className="flex flex-col items-end text-sm">
          <a href="tel:+74232001512" className="text-primary font-semibold hover:underline">
            +7 (423) 200-15-12
          </a>
          <a
            href="mailto:dv-expert@yandex.ru"
            className="text-muted-foreground hover:text-primary text-xs"
          >
            dv-expert@yandex.ru
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
