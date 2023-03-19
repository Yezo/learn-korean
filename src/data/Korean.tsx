export type Alphabet = {
  id: number
  english: string
  korean: string
  memorized: boolean
}

export const KoreanAlphabet: Alphabet[] = [
  { id: 0, english: "n", korean: "ㄴ", memorized: false },
  { id: 1, english: "g", korean: "ㄱ", memorized: false },
  { id: 2, english: "d", korean: "ㄷ", memorized: false },
  { id: 3, english: "h", korean: "ㅎ", memorized: false },
  { id: 4, english: "b", korean: "ㅂ", memorized: false },
]
