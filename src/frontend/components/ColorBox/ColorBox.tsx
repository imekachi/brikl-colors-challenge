export type ColorBoxProps = {
  color: string
}

const ColorBox = ({ color }: ColorBoxProps): JSX.Element => {
  return (
    <div className="aspect-h-1 aspect-w-1">
      <div
        className="grid place-items-center rounded-2xl p-4 border border-gray-800 shadow-lg transition-colors duration-300 ease-in-out"
        style={{ backgroundColor: color }}
        data-testid="ColorBox"
      >
        <span className="sr-only">{color}</span>
      </div>
    </div>
  )
}

export default ColorBox
