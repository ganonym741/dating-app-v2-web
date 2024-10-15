'use client';

import { cn } from '@/utils/helper';

type DateFieldProps = {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onInput?: (value: string) => void;
};

const DateField = ({
  value = '',
  placeholder = 'DD MM YYYY',
  disabled = false,
  onInput,
}: DateFieldProps) => {
  return (
    <div
      className={cn(
        'grow h-9 bg-[#D9D9D90F] rounded-lg border border-white/[22%] flex items-center justify-end px-5',
        'focus-within:border-[#62CDCB] focus-within:border-opacity-50',
        '[&:has(:invalid)]:bg-red-500/10'
      )}
    >
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          'w-[-webkit-fill-available] bg-transparent text-[13px] font-medium text-right outline-none',
          'disabled:text-white/[30%]',
          'placeholder:text-right'
        )}
        pattern="\d{1,2} \d{1,2} \d{4}"
        onInput={(e) => {
          onInput?.((e.target as HTMLInputElement).value);
        }}
      />
    </div>
  );
};

export default DateField;
