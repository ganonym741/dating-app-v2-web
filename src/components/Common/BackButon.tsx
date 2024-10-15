import { ReactComponent as ChevronLeftIcon } from '@icons/ChevronLeft.svg';

type BackButtonProps = {
  label?: string;
  onClick?: () => void;
};

const BackButton = ({ label = 'Back', onClick }: BackButtonProps) => {
  return (
    <button
      aria-label="Back"
      className="flex items-center gap-2"
      onClick={onClick}
    >
      <ChevronLeftIcon />
      <span className="text-sm font-bold">{label}</span>
    </button>
  );
};

export default BackButton;
