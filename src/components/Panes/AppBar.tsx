type AppBarProps = {
  title?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
}

const AppBar = ({ title, leading, trailing }: AppBarProps) => {
  return (
    <div className="relative shrink-0 h-14 mx-4">
      {
        !!leading && (
          <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center">
            {
              leading
            }
          </div>
        )
      }

      {
        !!title && (
          <div className="w-full h-full px-20 flex items-center justify-center select-none">
            <span className="text-sm font-semibold truncate">{title}</span>
          </div>
        )
      }

      {
        !!trailing && (
          <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
            {
              trailing
            }
          </div>
        )
      }
    </div>
  )
}

export default AppBar;