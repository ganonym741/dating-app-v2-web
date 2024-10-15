'use client';

import { useCallback, useMemo, useState } from 'react';

import { cn } from '@/utils/helper';

type UnitFieldProps = {
  value?: number;
  placeholder?: string;
  units?: {
    label: string;
    formula: (val: number) => number;
    primary?: boolean;
  }[];
  onInput?: (value: any) => void;
};

const UnitField = ({
  value = 0,
  placeholder = '',
  units = [],
  onInput,
}: UnitFieldProps) => {
  const [internalValue, setInternalValue] = useState(`${value}`);
  const [unit, setUnit] = useState(units.find((u) => u.primary) || units[0]);

  const primaryUnit = useMemo(() => {
    return units.find((u) => u.primary) || units[0];
  }, [units]);

  const handleInput = useCallback(
    (val: string) => {
      let newVal = parseFloat(val);

      if (!Number.isFinite(newVal)) {
        newVal = 0;
      }

      setInternalValue(`${newVal}`);

      if (primaryUnit.label === unit.label) {
        onInput?.(newVal);
      } else {
        const convertedValue = primaryUnit.formula(newVal);

        onInput?.(convertedValue);
      }
    },
    [onInput, unit, primaryUnit]
  );

  const changeUnit = useCallback(() => {
    if (units.length <= 1) return;
    const index = units.findIndex((item) => item.label === unit.label);
    const nextIndex = (index + 1) % units.length;
    const nextUnit = units[nextIndex];

    setUnit(nextUnit);

    if (primaryUnit.label === nextUnit.label) {
      setInternalValue(`${value}`);
    } else {
      setInternalValue(`${nextUnit.formula(value)}`);
    }
  }, [unit, units, value, primaryUnit.label]);

  return (
    <div
      className={cn(
        'relative',
        'grow h-9 bg-[#D9D9D90F] rounded-lg border border-white/[22%] flex items-center justify-end gap-2 px-5',
        'focus-within:border-[#62CDCB] focus-within:border-opacity-50'
      )}
    >
      <input
        type="number"
        value={internalValue}
        placeholder={placeholder}
        className={cn(
          'peer w-[-webkit-fill-available] bg-transparent text-[13px] font-medium text-right outline-none',
          'placeholder:text-right',
          '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
        )}
        onInput={(event) =>
          handleInput((event.target as HTMLInputElement).value)
        }
        onKeyDown={(event) => {
          if (event.code === 'Period') {
            event.preventDefault();
            event.stopPropagation();
          }
        }}
      />
      {!!internalValue && (
        <div
          className={[
            'flex items-center justify-center select-none',
            units.length > 1 && 'cursor-pointer',
          ].join(' ')}
          onClick={changeUnit}
        >
          <span>{unit.label}</span>
        </div>
      )}
    </div>
  );
};

export default UnitField;
