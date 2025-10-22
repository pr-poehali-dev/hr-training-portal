import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    time: '',
  });
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', phone: '', email: '', city: '', time: '' });
  };

  const courses = [
    {
      title: 'Специалист по кадровому делопроизводству',
      suitable: 'Новичков и тех, кто хочет освежить знания по ведению кадровой документации',
      result: 'Базовые навыки оформления кадровых документов согласно российским стандартам',
      why: 'Безошибочное ведение документации, отсутствие штрафов и конфликтов с проверяющими органами',
      icon: 'FileText',
    },
    {
      title: 'Специалист по подбору персонала',
      suitable: 'Начинающих и практикующих специалистов по подбору сотрудников',
      result: 'Эффективные техники отбора сотрудников, успешные стратегии проведения интервью',
      why: 'Закрытие сложных вакансий быстро и качественно, экономия ресурсов работодателя',
      icon: 'Users',
    },
    {
      title: 'Специалист по обучению и развитию персонала',
      suitable: 'HR-специалистов, желающих развивать компетенции в области корпоративного обучения',
      result: 'Методики оценки потребностей в обучении, создание эффективных программ развития',
      why: 'Повышение квалификации команды, рост производительности и лояльности сотрудников',
      icon: 'GraduationCap',
    },
    {
      title: 'Специалист по мотивации персонала',
      suitable: 'Руководителей и HR-менеджеров, заинтересованных в удержании талантов',
      result: 'Современные системы мотивации и вовлечения сотрудников',
      why: 'Снижение текучести кадров, повышение продуктивности и командного духа',
      icon: 'TrendingUp',
    },
  ];

  const testimonials = [
    {
      name: 'Анна Соколова',
      position: 'HR-менеджер',
      text: 'После прохождения курса получила повышение и теперь руковожу отделом кадров. Программа дала все необходимые знания!',
      rating: 5,
    },
    {
      name: 'Дмитрий Петров',
      position: 'Специалист по подбору',
      text: 'Отличная практическая программа! Преподаватели - настоящие профессионалы. Рекомендую всем, кто хочет развиваться в HR.',
      rating: 5,
    },
    {
      name: 'Елена Морозова',
      position: 'Кадровик',
      text: 'Благодаря обучению смогла систематизировать знания и уверенно работать с любой кадровой документацией.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
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
            <a href="mailto:dv-expert@yandex.ru" className="text-muted-foreground hover:text-primary text-xs">
              dv-expert@yandex.ru
            </a>
          </div>
        </div>
      </header>

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
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Rocket" className="mr-2" />
              Запишись на бесплатное тестирование уже сегодня!
            </Button>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Почему выбирают нашу школу?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all border-t-4 border-t-primary">
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

      <section className="py-16 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Основные боли вашей аудитории
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              'Трудности с оформлением трудовой документации?',
              'Нужна помощь в подборе эффективных сотрудников?',
              'Необходимо повысить квалификацию для карьерного роста?',
              'Хочется обрести новую перспективную специальность?',
            ].map((pain, index) => (
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

      <section id="programs" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Наши образовательные направления
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-primary to-blue-600 text-white hover:shadow-2xl transition-all">
              <CardContent className="p-8">
                <Icon name="Award" className="mb-4" size={56} />
                <h3 className="text-2xl font-bold mb-4">
                  Дополнительная профессиональная подготовка
                </h3>
                <p className="text-lg mb-4 text-blue-50">
                  <strong>Программа:</strong> Управление кадрами предприятия
                </p>
                <p className="mb-4 text-blue-50">
                  Специальная программа для освоения полноценной карьеры в сфере управления
                  персоналом.
                </p>
                <p className="text-sm text-blue-100 flex items-start gap-2">
                  <Icon name="CheckCircle2" size={20} />
                  Диплом установленного государством образца
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent to-orange-600 text-white hover:shadow-2xl transition-all">
              <CardContent className="p-8">
                <Icon name="TrendingUp" className="mb-4" size={56} />
                <h3 className="text-2xl font-bold mb-4">Повышение квалификации</h3>
                <p className="text-lg mb-4 text-orange-50">
                  <strong>Программы:</strong> Специализированные курсы по различным аспектам
                </p>
                <p className="mb-4 text-orange-50">
                  Целевые программы повышения уровня профессионализма в конкретных направлениях
                  кадрового дела.
                </p>
                <p className="text-sm text-orange-100 flex items-start gap-2">
                  <Icon name="CheckCircle2" size={20} />
                  Удостоверение о повышении квалификации
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-3xl font-bold text-center mb-8">Курсы повышения квалификации</h3>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
            {courses.map((course, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border-2 border-primary/20 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-4">
                    <Icon name={course.icon as any} className="text-primary" size={32} />
                    <span className="text-xl font-bold">{course.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <div>
                    <p className="font-semibold text-primary mb-2">Подходит для:</p>
                    <p className="text-muted-foreground">{course.suitable}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">Что получаете:</p>
                    <p className="text-muted-foreground">{course.result}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">Зачем проходить:</p>
                    <p className="text-muted-foreground">{course.why}</p>
                  </div>
                  <Button
                    className="mt-4"
                    onClick={() =>
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    Записаться на курс
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Зачем учиться именно у нас?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Только действующие законы и изменения российского трудового права',
              'Учебные пособия разработаны ведущими профессорами и опытными юристами',
              'Небольшие группы позволяют уделять достаточно внимания каждому ученику',
              'Доступ к дополнительной библиотеке статей и полезных материалов по кадровому делу',
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={24} />
                  <p className="text-lg">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Отзывы студентов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Заявка на консультацию
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@mail.ru"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">Город проживания</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Владивосток"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Время предпочтительного контакта</Label>
                    <Input
                      id="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      placeholder="10:00 - 18:00"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white font-bold text-lg py-6"
                    size="lg"
                  >
                    <Icon name="Send" className="mr-2" />
                    Оставить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" size={32} />
                <span className="text-2xl font-bold">Кадровик Профи</span>
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
            <p>&copy; 2025 Кадровик Профи. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">
              <Icon name="Gift" className="inline mr-2 text-accent" />
              Специальное предложение!
            </DialogTitle>
            <DialogDescription className="text-center text-lg pt-4">
              Только сегодня - <span className="text-accent font-bold text-xl">скидка 15%</span> на
              все программы обучения!
            </DialogDescription>
          </DialogHeader>
          <div className="text-center py-4">
            <p className="mb-6">Успейте записаться по акционной цене</p>
            <Button
              className="w-full bg-accent hover:bg-accent/90 text-white font-bold"
              onClick={() => {
                setShowPopup(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Записаться со скидкой
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
