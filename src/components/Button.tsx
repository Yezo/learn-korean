type Props = {
  handleClick: () => void
  children?: React.ReactNode
}

export default function Button({ handleClick, children }: Props) {
  return (
    <button
      onClick={handleClick}
      className="bg-secondary px-4 py-2 ring-1 ring-black/20 shadow-sm rounded-full capitalize font-primary text-sm hover:bg-tertiary transition-colors min-w-[4rem] grid place-items-center"
    >
      {children}
    </button>
  )
}
