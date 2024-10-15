type GoldenTextProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GoldenText = ({ children, className, onClick }: GoldenTextProps) => {
  return (
    <span className={["font-medium", className].join(' ')} style={{
      background: 'linear-gradient(74deg, #94783E -6.8%, #F3EDA6 16.76%, #F8FAE5 30.5%, #FFE2BE 49.6%, #D5BE88 78.56%, #F8FAE5 89.01%, #D5BE88 100.43%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }} onClick={onClick}>
      {children}
    </span>
  )
}

export default GoldenText;