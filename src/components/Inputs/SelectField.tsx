'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { cn } from '@/utils/helper';

type SelectFieldProps = {
  value?: string;
  placeholder?: string;
  options?: {
    label: string;
    value: any;
  }[];
  onInput?: (value: any) => void;
};

const SelectField = ({
  value = '',
  placeholder = '',
  options = [],
  onInput,
}: SelectFieldProps) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const [selected, setSelected] = useState(() =>
    options.find((item) => item.value === value)
  );

  const filteredOptions = useMemo(
    () => options.filter((item) => item.value === value),
    [options, value]
  );

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onInput?.(e.target.value);
    },
    [onInput]
  );

  const handleFocus = useCallback(() => {
    selectRef.current?.focus();
  }, []);

  const handleBlur = useCallback(() => {
    selectRef.current?.blur();
  }, []);

  const handleSelectChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onInput?.(options[e.target.selectedIndex].value);
    },
    [onInput, options]
  );

  useEffect(() => {
    setSelected(filteredOptions[0]);
  }, [filteredOptions]);

  return (
    <div
      className={cn(
        'relative',
        'grow h-9 bg-[#D9D9D90F] rounded-lg border border-white/[22%] flex items-center justify-end gap-2.5 px-5',
        'focus-within:border-[#62CDCB] focus-within:border-opacity-50'
      )}
    >
      <input
        type="text"
        tabIndex={-1}
        value={selected?.label}
        placeholder={placeholder}
        className={cn(
          'w-[-webkit-fill-available] bg-transparent text-[13px] font-medium text-right outline-none',
          'placeholder:text-right'
        )}
        onInput={handleInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className="w-2.5 h-2.5 flex items-center justify-center -mr-2 peer-focus:rotate-180 transition-transform duration-300">
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1L6 6L1 0.999999"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <select
        ref={selectRef}
        value={selected?.value}
        onChange={handleSelectChange}
        className="absolute inset-0 opacity-0 cursor-pointer"
      >
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
