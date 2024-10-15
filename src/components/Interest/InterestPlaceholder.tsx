import { RectShape, TextBlock, TextRow } from "@/components/Placeholder";

const InterestPlaceholder = (
  <div className='relative w-full h-40 rounded-2xl overflow-hidden'>
    <RectShape color='#3a3a3a' className="absolute inset-0" />

    <div className="absolute inset-0 p-8">
      <TextBlock rows={2} color='gray' lineSpacing={16} widths={[30, 0]} />

      <TextRow maxHeight={40} color="gray" />
    </div>
  </div>
);

export default InterestPlaceholder;