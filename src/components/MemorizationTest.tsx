import { Alphabet } from "../data/Korean"
import Button from "./Button"
import Card from "./Card"

type Props = {
  handleMemorizeIndex: () => void
  handleIncrementIndex: () => void
  handleDecrementIndex: () => void
  handleResetIndex: () => void
  handleIndexCount: () => void
  alphabet: Alphabet[]
  index: number
  completed: boolean
}

export default function MemorizationTest({
  alphabet,
  index,
  completed,
  handleMemorizeIndex,
  handleDecrementIndex,
  handleIncrementIndex,
  handleResetIndex,
}: Props) {
  return (
    <div>
      {alphabet[index] && !completed ? (
        <Card alphabet={alphabet} index={index} />
      ) : (
        "NOTFOUND OR COMPLETED"
      )}
      <div className="flex gap-4 my-4">
        <Button handleClick={handleDecrementIndex}>
          <LeftChevronSVG />
        </Button>
        <Button handleClick={handleMemorizeIndex}>Memorized</Button>
        <Button handleClick={handleIncrementIndex}>
          <RightChevronSVG />
        </Button>
      </div>

      <div className="flex gap-4 my-4">
        <Button handleClick={handleResetIndex}>Reset </Button>
      </div>
    </div>
  )
}

const LeftChevronSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="11 17 6 12 11 7"></polyline>
      <polyline points="18 17 13 12 18 7"></polyline>
    </svg>
  )
}

const RightChevronSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="13 17 18 12 13 7"></polyline>
      <polyline points="6 17 11 12 6 7"></polyline>
    </svg>
  )
}
