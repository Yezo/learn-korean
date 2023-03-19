type Props = {
  engLetter: string
  korLetter: string
}

export const Card = ({ engLetter, korLetter }: Props) => {
  return (
    <div className="bg-[#24273D] rounded-xl p-10">
      <div className="flex gap-10">
        <div className="w-12 h-12 bg-[#464d77] grid place-items-center rounded-lg ring-1 ring-black/[.15] shadow-sm">
          <span>{engLetter.toUpperCase()}</span>
        </div>
        <div className="w-12 h-12 bg-[#464d77] grid place-items-center rounded-lg ring-1 ring-black/[.15] shadow-sm">
          {korLetter}
        </div>
      </div>
      <p className="max-w-[20ch] text-sm mt-4">
        Tip: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ex?
      </p>
    </div>
  )
}
