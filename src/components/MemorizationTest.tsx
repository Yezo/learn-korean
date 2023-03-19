import { Alphabet } from "../data/Korean"
import { Card } from "./Card"

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
  handleIndexCount,
  handleResetIndex,
}: Props) {
  return (
    <>
      <div className="text-center my-4 font-bold">{`Currently: ${handleIndexCount()}`}</div>
      {alphabet[index] && !completed ? (
        <Card engLetter={alphabet[index].english} korLetter={alphabet[index].korean} />
      ) : (
        "NOTFOUND OR COMPLETED"
      )}
      <div className="flex gap-4 my-4">
        <div>
          <button onClick={handleIncrementIndex} className="bg-[#24273D] p-4 font-bold">
            Increment
          </button>
        </div>
        <div>
          <button onClick={handleDecrementIndex} className="bg-[#24273D] p-4 font-bold">
            Decrement
          </button>
        </div>
      </div>
      <div className="flex gap-4 my-4">
        <div>
          <button onClick={handleResetIndex} className="bg-[#24273D] p-4">
            Reset
          </button>
        </div>
        <div>
          <button onClick={handleMemorizeIndex} className="bg-[#24273D] p-4">
            Memorized
          </button>
        </div>
      </div>
      <div>Index: {index}</div>
      <div>Status: {completed ? "completed" : "not completed"}</div>
    </>
  )
}
