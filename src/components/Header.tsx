import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '#programs', label: 'Программы' },
    { href: '#why-us', label: 'О школе' },
    { href: '#testimonials', label: 'Отзывы' },
    { href: '#contact', label: 'Контакты' },
  ];

  const handleMenuClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.poehali.dev/projects/7010b5f5-486d-440e-bf50-b566a8ed2282/files/15e7bb16-122c-4a62-bc66-7680eb7c66f4.jpg"
            alt="Логотип Эксперт"
            className="h-12 w-12 object-contain"
          />
          <span className="text-lg font-bold text-primary hidden lg:block">
            ООО ДВ центр кадровых технологий "Эксперт"
          </span>
          <span className="text-lg font-bold text-primary lg:hidden">Эксперт</span>
        </div>

        <div className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-primary transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex flex-col items-end text-sm">
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

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex items-center gap-3 pb-6 border-b">
                <img
                  src="https://cdn.poehali.dev/projects/7010b5f5-486d-440e-bf50-b566a8ed2282/files/15e7bb16-122c-4a62-bc66-7680eb7c66f4.jpg"
                  alt="Логотип Эксперт"
                  className="h-10 w-10 object-contain"
                />
                <span className="text-base font-bold text-primary">Эксперт</span>
              </div>

              <nav className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleMenuClick(item.href)}
                    className="text-left text-lg font-medium text-foreground hover:text-primary transition py-2"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="pt-6 border-t space-y-3">
                <a
                  href="tel:+74232001512"
                  className="flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  <Icon name="Phone" size={18} />
                  +7 (423) 200-15-12
                </a>
                <a
                  href="mailto:dv-expert@yandex.ru"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm"
                >
                  <Icon name="Mail" size={18} />
                  dv-expert@yandex.ru
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
