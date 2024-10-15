import Badge from "../Common/Badge"

type DisplayProps = {
  value: string[];
}

const Display = ({ value = [] }: DisplayProps) => {
  return (
    <div className="my-2">
      <div className="flex items-start flex-wrap gap-3 mt-4">
        {
          value.map((item, index) => (
            <Badge key={index} rounded>{item}</Badge>
          ))
        }
      </div>
    </div>
  )
}

export default Display