import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface Course {
  title: string;
  suitable: string;
  result: string;
  why: string;
  icon: string;
}

interface ProgramsSectionProps {
  courses: Course[];
}

const ProgramsSection = ({ courses }: ProgramsSectionProps) => {
  return (
    <section id="programs" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll">
          Наши образовательные направления
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-primary to-blue-600 text-white hover:shadow-2xl transition-all animate-on-scroll">
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

          <Card className="bg-gradient-to-br from-accent to-orange-600 text-white hover:shadow-2xl transition-all animate-on-scroll animate-on-scroll-delay-1">
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

        <h3 className="text-3xl font-bold text-center mb-8 animate-on-scroll">Курсы повышения квалификации</h3>
        <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
          {courses.map((course, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border-2 border-primary/20 rounded-lg px-6 animate-on-scroll"
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
  );
};

export default ProgramsSection;