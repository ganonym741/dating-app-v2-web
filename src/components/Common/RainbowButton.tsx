import { cn } from '@/utils/helper';
import LoadingIcon from '@icons/Loading.svg';

type RainbowButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
};

const RainbowButton = ({
  children,
  isLoading = false,
  disabled = false,
  onClick,
}: RainbowButtonProps) => {
  return (
    <button
      aria-label="Action"
      disabled={disabled}
      className={cn(
        'h-[48px] shrink-0 rounded-[9px] flex items-center justify-center cursor-pointer',
        'disabled:opacity-50 disabled:cursor-not-allowed'
      )}
      style={{
        background: 'linear-gradient(108deg, #62CDCB 24.88%, #4599DB 78.49%)',
      }}
      onClick={onClick}
    >
      {isLoading ? (
        <LoadingIcon />
      ) : (
        <span className="text-base text-[1.2rem] font-bold">{children}</span>
      )}
    </button>
  );
};

export default RainbowButton;
