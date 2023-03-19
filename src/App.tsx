import { useState, useEffect } from "react"
import { KoreanAlphabet } from "./data/Korean"
import { Card } from "./components/Card"

export default function App() {
  const [index, setIndex] = useState<number>(0)
  const [completed, setCompleted] = useState<boolean>(false)
  const [alphabet, setAlphabet] = useState(KoreanAlphabet)

  // DONE There should be a button that lets the user remove an entry after they finish memorizing it
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
    //check for alphabet.length
    setIndex((prev) => {
      return prev + 1
    })

  const decrementCount = () =>
    //check for alphabet.length
    setIndex((prev) => {
      return prev - 1
    })

  const resetCount = () => setIndex(0)

  const memorizedLetter = () => {
    let idx = alphabet[index]
    let filtered = alphabet.filter(({ id }) => id !== idx.id)
    if (filtered.length > 0) {
      setAlphabet([...filtered])
    }
    if (filtered.length === 0) {
      setAlphabet([])
      setCompleted(true)
    }
  }

  const handleIndexCount = () => {
    if (alphabet.length > 0) {
      return index + 1 + "/" + alphabet.length
    }
    if (alphabet.length == 0) {
      return index + "/" + alphabet.length
    }
  }

  return (
    <main className="bg-[#181824] min-h-screen text-white grid place-items-center">
      <div>
        <div className="text-center my-4 font-bold">Currently: {handleIndexCount()}</div>
        {alphabet[index] && !completed ? (
          <Card engLetter={alphabet[index].english} korLetter={alphabet[index].korean} />
        ) : (
          "NOTFOUND OR COMPLETED"
        )}

        <div className="flex gap-4 my-4">
          <div>
            <button onClick={incrementCount} className="bg-[#24273D] p-4 font-bold">
              Increment
            </button>
          </div>
          <div>
            <button onClick={decrementCount} className="bg-[#24273D] p-4 font-bold">
              Decrement
            </button>
          </div>
        </div>

        <div className="flex gap-4 my-4">
          <div>
            <button onClick={resetCount} className="bg-[#24273D] p-4">
              Reset
            </button>
          </div>
          <div>
            <button onClick={memorizedLetter} className="bg-[#24273D] p-4">
              Memorized
            </button>
          </div>
        </div>
        <div>Index: {index}</div>
        <div>Status: {completed ? "completed" : "not completed"}</div>
      </div>

      <div>
        <h2>Alphabet</h2>
        {alphabet.map((item, index) => (
          <div>
            {item.id} - {item.english}
          </div>
        ))}
      </div>
    </main>
  )
}
