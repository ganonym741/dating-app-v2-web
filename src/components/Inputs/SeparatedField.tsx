import React, { useState } from 'react';

import Badge from '../Common/Badge';
import { cn } from '@/utils/helper';

type SeparatedFieldProps = {
  options: string[];
  placeholder?: string;
  onUpdateOptions: (updatedOptions: string[]) => void;
  outlined?: boolean;
};

const SeparatedField: React.FC<SeparatedFieldProps> = ({
  placeholder = '',
  outlined = false,
  options,
  onUpdateOptions,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      const updatedOptions = [...options, inputValue.trim()];

      onUpdateOptions(updatedOptions);
      setInputValue('');
    } else if (event.key === 'Backspace' && inputValue.trim() === '') {
      const updatedOptions = [...options];

      updatedOptions.pop();
      onUpdateOptions(updatedOptions);
    }
  };

  return (
    <div
      className={cn(
        'grow bg-white/[6%] flex items-center border',
        'px-[17px] py-2 rounded-[18px]',
        outlined ? 'border-white/[22%]' : 'border-transparent',
        'focus-within:border-[#62CDCB] focus-within:border-opacity-50',
        'flex flex-wrap gap-2'
      )}
    >
      {options.map((option, index) => (
        <Badge
          key={index}
          closeable
          onClose={() => {
            onUpdateOptions(
              options.slice(0, index).concat(options.slice(index + 1))
            );
          }}
        >
          {option}
        </Badge>
      ))}

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-sm py-2"
        style={{
          minWidth: placeholder.length * 8,
        }}
      />
    </div>
  );
};

export default SeparatedField;
