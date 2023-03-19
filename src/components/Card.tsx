import { Alphabet } from "../data/Korean"
import Counter from "./Counter"

type Props = {
  alphabet: Alphabet[]
  index: number
}

export default function Card({ alphabet, index }: Props) {
  return (
    <div className="bg-secondary ring-1 ring-black/20 shadow-sm rounded px-8 py-10 font-primary flex flex-col gap-4">
      <Counter alphabet={alphabet} index={index} />

      <div className="flex items-center justify-between">
        <div className="uppercase font-bold text-2xl ring-1 ring-black/20 shadow-sm bg-tertiary px-5 py-4 min-w-[4rem] rounded-lg grid place-items-center">
          {alphabet[index].english}
        </div>

        <BilateralArrowSVG />

        <div className="uppercase font-bold text-2xl ring-1 ring-black/20 shadow-sm bg-tertiary px-5 py-4 min-w-[4rem] rounded-lg grid place-items-center">
          {alphabet[index].korean}
        </div>
      </div>
    </div>
  )
}

const BilateralArrowSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16"></polyline>
      <polyline points="6 8 2 12 6 16"></polyline>
      <line x1="2" y1="12" x2="22" y2="12"></line>
    </svg>
  )
}
