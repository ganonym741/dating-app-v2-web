import { useEffect, useState } from 'react';

import GoldenText from '@/components/Common/GoldenText';
import { SeparatedField } from '@/components/Inputs';

type EditorProps = {
  value: string[];
  onChange?: (value: string[]) => void;
};

const Editor = ({ value = [], onChange }: EditorProps) => {
  const [options, setOptions] = useState<string[]>(value);

  useEffect(() => {
    setOptions(value);
  }, [value]);

  const handleChange = (newVal: string[]) => {
    setOptions(newVal);
    onChange?.(newVal);
  };

  return (
    <div className="flex flex-col justify-start gap-6">
      <div className="mt-16 flex flex-col mb-6">
        <GoldenText className="!text-sm !font-bold px-4">
          Tell everyone about yourself
        </GoldenText>

        <h4 className="mt-3 px-4">What interest you?</h4>

        <div className="mt-[35px]">
          <SeparatedField
            placeholder="What interest you?"
            options={options}
            onUpdateOptions={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
