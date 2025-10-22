import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyUsSection from '@/components/WhyUsSection';
import PainPointsSection from '@/components/PainPointsSection';
import ProgramsSection from '@/components/ProgramsSection';
import BenefitsSection from '@/components/BenefitsSection';
import PromotionsSection from '@/components/PromotionsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import PromoPopup from '@/components/PromoPopup';

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
      <Header />
      <HeroSection />
      <WhyUsSection />
      <PainPointsSection />
      <ProgramsSection courses={courses} />
      <BenefitsSection />
      <PromotionsSection />
      <TestimonialsSection testimonials={testimonials} />
      <ContactForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
      <Footer />
      <PromoPopup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
};

export default Index;
