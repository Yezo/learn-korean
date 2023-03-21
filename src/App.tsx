import { useState, useEffect } from "react"
import { KoreanAlphabet } from "./data/Korean"
import MemorizationTest from "./components/MemorizationTest"
import CompletionMessage from "./components/CompletionMessage"
import Button from "./components/Button"
import { getAlphabet, saveAlphabet } from "./utils/Storage"

export default function App() {
  const [index, setIndex] = useState<number>(0)
  const [completed, setCompleted] = useState<boolean>(false)
  const [alphabet, setAlphabet] = useState(KoreanAlphabet)

  // DONE There should be a button that lets the user remove an entry after they finish memorizing it
  // DONE User should not be able to decrement the index to lessn than 0 or higher than alphabet length
  // DONE User should be congratulated after memorizing the entire alphabet (confetti?)
  // TODO Toggle to let users see hints or not
  // TODO Toggle to let users see the full list of alphabet letters
  // TODO Add images to hints?
  // TODO Debounce the increment/decrementing if clicking too fast ends up causing bugs?
  // TODO fix UI; maybe use headlessUI and learn MUI or something
  // TODO add simple animations with framer or animate-react
  // TODO cry

  useEffect(() => {
    index === alphabet.length || index < 0 ? setCompleted(true) : setCompleted(false)
  }, [index])

  //Utility functions
  const handleIncrementIndex = () => {
    //User cannot decrement above the total length of array
    if (index === alphabet.length - 1) return
    //Otherwise allow user to increment the count +1
    else {
      setIndex((prev) => {
        return prev + 1
      })
    }
  }
  const handleDecrementIndex = () => {
    //User cannot decrement under 0
    if (index === 0) return
    //Otherwise allow user to decrement the count -1
    else {
      setIndex((prev) => {
        return prev - 1
      })
    }
  }
  const handleResetIndex = () => {
    setIndex(0)
    setAlphabet(KoreanAlphabet)
    saveAlphabet(KoreanAlphabet)
  }

  const handleMemorizeIndex = () => {
    // Filter the alphabet array for all items except for the displayed letter that the user has memorized, and returns the rest of the items. If there is 1 or more items left remaining, return them, otherwise set the alphabet array to empty and mark the game as completed
    let currentItem = alphabet[index]
    let filtered = alphabet.filter(({ id }) => id !== currentItem.id)
    if (filtered.length > 0) {
      setAlphabet([...filtered])
      saveAlphabet([...filtered])
    }
    if (filtered.length === 0) {
      setAlphabet([])
      setCompleted(true)
    }

    //Handles a unique case where the default behavior of memorizing a letter displays the next item in the array, however, if items in the middle of the array get memorized, the index gets confused and may try to display undefined items. Therefore, if the current displayed letter gets memorized, check if the current item is indeed the last item in the array, if so, show the previous letter to prevent it from displaying a possibly undefined item

    let lastItem = alphabet.slice(-1)
    if (currentItem.id === lastItem[0].id) {
      setIndex((prev) => prev - 1)
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

  //Set the new list of letters to local storage whenever a user memorizes a letter
  useEffect(() => {
    const alphabets = getAlphabet()
    setAlphabet(alphabets)
  }, [handleMemorizeIndex])

  return (
    <main className="bg-primary min-h-screen text-white grid place-items-center">
      {completed ? (
        <>
          <CompletionMessage />
          <div className="flex gap-4 my-4">
            <Button handleClick={handleResetIndex}>Reset</Button>
          </div>
        </>
      ) : (
        <MemorizationTest
          alphabet={alphabet}
          index={index}
          completed={completed}
          handleMemorizeIndex={handleMemorizeIndex}
          handleDecrementIndex={handleDecrementIndex}
          handleIncrementIndex={handleIncrementIndex}
          handleIndexCount={handleIndexCount}
          handleResetIndex={handleResetIndex}
        />
      )}
    </main>
  )
}
