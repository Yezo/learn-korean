import { Alphabet, KoreanAlphabet } from "../data/Korean"

const STORAGE_KEY = "alphabet"

export function saveAlphabet(data: Alphabet[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function getAlphabet() {
  const data = localStorage.getItem(STORAGE_KEY)
  if (!data) return [...KoreanAlphabet]
  return JSON.parse(data)
}
