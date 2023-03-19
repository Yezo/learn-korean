import { Alphabet } from "../data/Korean"

type Props = {
  handleIndexCount?: () => void
  alphabet: Alphabet[]
  index: number
}

export default function Counter({ alphabet, index }: Props) {
  return (
    <div className="max-w-fit flex gap-1 items-center justify-center bg-tertiary rounded-lg px-4 py-1 font-primary font-bold ring-1 ring-black/20 shadow-sm select-none min-w-[5.5rem]">
      <span>{index + 1}</span>
      <span>/ {alphabet.length}</span>
    </div>
  )
}
