import clsx from 'clsx'
import { FormattedColor } from '@/service/color/formatter'

export type ColorBoxProps = {
  color: string
  formattedColor?: FormattedColor
  className?: string
  'data-testid'?: string
}

const ColorBox = ({
  color,
  formattedColor,
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
        {!!formattedColor && (
          <div className="text-center text-white text-shadow">
            <div className="font-bold">{formattedColor.format}</div>
            <div>{formattedColor.value}</div>
          </div>
        )}
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
