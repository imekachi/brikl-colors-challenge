import clsx from 'clsx'

export type ColorBoxProps = {
  color: string
  className?: string
  'data-testid'?: string
}

const ColorBox = ({
  color,
  className,
  'data-testid': testId = 'ColorBox',
}: ColorBoxProps): JSX.Element => {
  return (
    <div className="aspect-h-1 aspect-w-1">
      <div
        className={clsx(
          'grid place-items-center rounded-2xl p-4 border border-gray-800 shadow-lg transition-colors duration-300 ease-in-out',
          className
        )}
        style={{ backgroundColor: color }}
        data-testid={testId}
        aria-label={color}
      >
        <span className="sr-only">{color}</span>
      </div>
    </div>
  )
}

export const ColorBoxPlaceholder = (): JSX.Element => (
  <ColorBox
    color="#444444"
    className="animate-pulse"
    data-testid="ColorBoxPlaceholder"
  />
)

export default ColorBox
