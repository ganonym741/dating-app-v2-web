import type { ChangeEvent} from "react";
import { cloneElement, useRef } from "react";

type BrowseFileProps = {
  children: React.ReactElement;
  onChange: (file: File | null) => void;
};

const BrowseFile = ({ children, onChange }: BrowseFileProps) => {
  const fileEl = useRef<HTMLInputElement | null>(null);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0] || null;
    
    onChange(selectedFile);
  }

  function browseFile() {
    fileEl.current?.click();
  }

  return (
    <div>
      {cloneElement(children, {
        onClick: browseFile
      })}

      <input
        ref={fileEl}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default BrowseFile;
