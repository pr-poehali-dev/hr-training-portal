import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface PromoPopupProps {
  showPopup: boolean;
  setShowPopup: (show: boolean) => void;
}

const PromoPopup = ({ showPopup, setShowPopup }: PromoPopupProps) => {
  return (
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
  );
};

export default PromoPopup;
