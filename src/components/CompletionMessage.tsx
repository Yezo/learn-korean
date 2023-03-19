import React from "react"
import ConfettiExplosion from "react-confetti-explosion"

type Props = {}

export default function CompletionMessage({}: Props) {
  return (
    <div className="grid place-items-center">
      Congratulations, you've learnt the Korean alphabet!
      <ConfettiExplosion />
    </div>
  )
}
