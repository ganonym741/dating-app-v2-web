'use client';

import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import DatePicker from 'react-date-picker';
import type {
  FieldValues,
  Path,
  UseControllerProps,
  UseFormRegister,
} from 'react-hook-form';
import { Controller } from 'react-hook-form';

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { cn } from '@/utils/helper';

interface InputDatePickerProps<T extends FieldValues = FieldValues>
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  label: string;
  name: Path<T>;
  minDate?: Date;
  maxDate?: Date;
  control?: UseControllerProps<T>['control'];
  rules?: Parameters<UseFormRegister<T>>[1];
  onChange?: (value: any) => void;
  error?: string;
}

const InputDatePicker = <T extends FieldValues = FieldValues>({
  id,
  label,
  onChange,
  name,
  minDate,
  maxDate,
  control,
  rules,
  error,
  ...props
}: InputDatePickerProps<T>) => {
  return (
    <div className={cn(`relative w-full flex flex-col ${props.className}`)}>
      <Controller
        control={control}
        name={name}
        disabled={props.disabled}
        rules={rules}
        render={({ field }) => (
          <DatePicker
            id={id}
            className={cn(
              `border border-primary ${
                error && 'border-danger'
              } !text-black pt-6 pb-2 px-4 rounded-xl border-solid bg-white text-left [&>*]:!border-none`
            )}
            format={'dd-MM-yyyy'}
            dayPlaceholder={'__'}
            monthPlaceholder={'__'}
            yearPlaceholder={'____'}
            minDate={minDate}
            maxDate={maxDate}
            clearIcon={() => null}
            {...field}
            onChange={(e) => {
              field.onChange(e);
              onChange && onChange(e);
            }}
          />
        )}
      />
      <label
        className={
          'absolute pointer-events-none origin-top-left translate-x-0 translate-y-3 !text-primary scale-[0.8] left-4 -top-1.5'
        }
        htmlFor={id}
      >
        {label}
      </label>
      <p className={'text-red-500 text-sm mt-1'}>{error}</p>
    </div>
  );
};

export { InputDatePicker };
export type { InputDatePickerProps };
