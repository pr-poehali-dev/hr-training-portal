import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/projects/7010b5f5-486d-440e-bf50-b566a8ed2282/files/15e7bb16-122c-4a62-bc66-7680eb7c66f4.jpg" 
                alt="Логотип Эксперт" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold">Эксперт</span>
            </div>
            <p className="text-sm text-gray-400">
              Учебный центр дополнительного профессионального образования
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+74232001512" className="hover:text-primary transition">
                  +7 (423) 200-15-12
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:dv-expert@yandex.ru" className="hover:text-primary transition">
                  dv-expert@yandex.ru
                </a>
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Документы</h4>
            <div className="space-y-2 text-sm">
              <p>
                <a href="#" className="hover:text-primary transition">
                  Лицензия на образовательную деятельность
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-primary transition">
                  Политика конфиденциальности
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 ООО Дальневосточный центр кадровых технологий "Эксперт". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;