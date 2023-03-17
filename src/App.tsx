import { useState, useEffect } from "react"
import { KoreanAlphabet } from "./data/Korean"
import { Card } from "./components/Card"

export default function App() {
  const [index, setIndex] = useState<number>(0)
  const [completed, setCompleted] = useState<boolean>(false)

  // DONE Increase and decrease the index when user clicks on respective buttons
  // DONE There should be a reset button that resets index back to 0
  // TODO There should be a button that lets the user remove an entry after they finish memorizing it
  // TODO User should not be able to decrement the index to lessn than 0 or higher than alphabet length
  // TODO User should be congratulated after memorizing the entire alphabet (confetti?)
  // TODO Toggle to let users see hints or not
  // TODO Toggle to let users see the full lsit of alphabet letters
  // TODO Add images to hints?
  // TODO Debounce the increment/decrementing if clicking too fast ends up causing bugs?
  // TODO fix UI; maybe use headlessUI and learn MUI or something
  // TODO add simple animations with framer or animate-react
  // TODO cry

  useEffect(() => {
    index === KoreanAlphabet.length ? setCompleted(true) : setCompleted(false)
  }, [index])

  //Utility functions
  const incrementCount = () =>
    setIndex((prev) => {
      return prev + 1
    })

  const decrementCount = () =>
    setIndex((prev) => {
      return prev - 1
    })

  const resetCount = () => setIndex(0)

  return (
    <main className="bg-[#181824] min-h-screen text-white grid place-items-center">
      <div>
        <div>Currently: {index + "/" + KoreanAlphabet.length}</div>
        {KoreanAlphabet[index] ? (
          <Card
            engLetter={KoreanAlphabet[index].english}
            korLetter={KoreanAlphabet[index].korean}
          />
        ) : (
          "NOTFOUND"
        )}

        <div className="flex gap-4 mt-4">
          <div>
            <button onClick={incrementCount} className="bg-[#24273D] p-4 mb-4">
              Increment
            </button>
          </div>
          <div>
            <button onClick={decrementCount} className="bg-[#24273D] p-4">
              Decrement
            </button>
          </div>
        </div>

        <div>
          <button onClick={resetCount} className="bg-[#24273D] p-4">
            Reset
          </button>
        </div>
        <div>Index: {index}</div>
        <div>Status: {completed ? "completed" : "not completed"}</div>
      </div>
    </main>
  )
}
