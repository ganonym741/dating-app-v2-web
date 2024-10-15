type CardProps = {
  children?: React.ReactNode;
}

const Card = ({ children }: CardProps) => {

  return (
    <div className="relative bg-[#0E191F] rounded-[14px] px-[27px] py-[13px] flex flex-col justify-between">
      {children}
    </div>
  );
}

export default Card;