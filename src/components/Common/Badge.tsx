import { cn } from '@/utils/helper';
import CloseIcon from '@icons/Close.svg';

type BadgeProps = {
  children?: React.ReactNode;
  rounded?: boolean;
  closeable?: boolean;
  onClose?: () => void;
};

const Badge = ({ children, rounded, closeable, onClose }: BadgeProps) => {
  return (
    <div
      className={cn(
        'flex items-center',
        rounded
          ? 'py-2 bg-[#FFFFFF0F] rounded-[100px]'
          : 'py-2  bg-white/10 rounded',
        closeable ? 'pl-2 pr-1 gap-[7px]' : 'px-4'
      )}
    >
      <span className="text-sm font-semibold">{children}</span>
      {!!closeable && (
        <div className="cursor-pointer select-none" onClick={onClose}>
          <CloseIcon />
        </div>
      )}
    </div>
  );
};

export default Badge;
