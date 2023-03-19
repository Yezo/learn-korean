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
        <Button handleClick={handleDecrementIndex} action="Previous" />
        <Button handleClick={handleMemorizeIndex} action="Memorized" />
        <Button handleClick={handleIncrementIndex} action="Next" />
      </div>

      <div className="flex gap-4 my-4">
        <Button handleClick={handleResetIndex} action="Reset" />
      </div>
      {/* <div>Index: {index}</div>
      <div>Status: {completed ? "completed" : "not completed"}</div> */}
    </div>
  )
}
