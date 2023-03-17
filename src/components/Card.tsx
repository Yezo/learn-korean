type Props = {
  engLetter: string
  korLetter: string
}

export const Card = ({ engLetter, korLetter }: Props) => {
  return (
    <div className="bg-[#24273D] px-12 py-6 rounded-xl">
      <div className="flex gap-10">
        <div>{engLetter}</div>
        <div>{korLetter}</div>
      </div>
      <p className="max-w-[20ch] text-sm">
        Tip: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ex?
      </p>
    </div>
  )
}
