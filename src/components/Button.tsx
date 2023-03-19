type Props = {
  handleClick: () => void
  action: string
}

export default function Button({ handleClick, action }: Props) {
  return (
    <button
      onClick={handleClick}
      className="bg-secondary px-4 py-2 ring-1 ring-black/20 shadow-sm rounded-full capitalize font-primary text-sm hover:bg-tertiary transition-colors"
    >
      {action}
    </button>
  )
}
