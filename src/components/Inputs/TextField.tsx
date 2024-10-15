'use client';

import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import React, { useState } from 'react';

import type {
  FieldValues,
  Path,
  UseControllerProps,
  UseFormRegister,
} from 'react-hook-form';
import { Controller, useFormState } from 'react-hook-form';

import { ReactComponent as VisibleIcon } from '@icons/Visible.svg';
import { ReactComponent as InvisibleIcon } from '@icons/Invisible.svg';
import { cn } from '@/utils/helper';

interface TextFieldProps<T extends FieldValues = FieldValues>
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  align?: 'left' | 'right';
  className?: string;
  name: Path<T>;
  rules?: Parameters<UseFormRegister<T>>[1];
  control: UseControllerProps<T>['control'];
  isDisable?: boolean;
}

const TextField = <T extends FieldValues = FieldValues>({
  type = 'text',
  placeholder = 'Enter value',
  align = 'left',
  className = '',
  name,
  rules,
  control,
  isDisable,
}: TextFieldProps<T>) => {
  const [innerType, setInnerType] = useState<'text' | 'password' | 'email'>(
    type
  );

  const { errors } = useFormState({ control });

  return (
    <>
      <div
        className={cn(
          `flex flex-row justify-between items-center gap-2 px-3 h-[48px] text-sm w-full bg-gray-800 border border-gray-500 rounded-[9px] [&_*]:text-white text-${align}`,
          className,
          errors[name] ? 'border-red-500' : ''
        )}
      >
        <Controller
          control={control}
          name={name}
          disabled={isDisable}
          rules={rules}
          render={({ field }) => (
            <input
              {...field}
              type={innerType}
              placeholder={placeholder}
              className={cn(
                'w-full bg-inherit outline-none',
                innerType === 'password' ? '[-webkit-text-security:disc]' : ''
              )}
            />
          )}
        />

        {type === 'password' && (
          <div className="cursor-pointer select-none">
            {innerType === 'password' ? (
              <VisibleIcon
                className="w-[24px] aspect-square"
                onClick={() => setInnerType('text')}
              />
            ) : (
              <InvisibleIcon
                className="w-[24px] aspect-square"
                onClick={() => setInnerType('password')}
              />
            )}
          </div>
        )}
      </div>
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[name]?.message as string}
        </p>
      )}
    </>
  );
};

export default TextField;
