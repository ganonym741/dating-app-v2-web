import { cn } from '@/utils/helper';

type StackProps = {
  className?: string;
  children?: React.ReactNode;
};

const Stack = ({ className, children }: StackProps) => {
  return (
    <div className={cn('relative overflow-hidden', className)}>{children}</div>
  );
};

export default Stack;
