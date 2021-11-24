import ColorBox, { ColorBoxPlaceholder } from '@/frontend/components/ColorBox'
import { toCssColor } from '@/frontend/lib/toCssColor'
import { FormattedColor } from '@/service/color/formatter'
import style from './SwatchGrid.module.css'

export type SwatchGridProps = {
  swatch: FormattedColor[]
}

const SwatchGrid = ({ swatch }: SwatchGridProps): JSX.Element => {
  return (
    <section className={style.swatchGrid} data-testid="SwatchGrid">
      {swatch.map((color, index) => (
        <ColorBox
          key={index}
          color={toCssColor(color)}
          formattedColor={color}
        />
      ))}
    </section>
  )
}

export type SwatchGridPlaceholderProps = {
  items?: number
}
export const SwatchGridPlaceHolder = ({
  items = 5,
}: SwatchGridPlaceholderProps): JSX.Element => {
  return (
    <section className={style.swatchGrid} aria-label="loading">
      {Array(items)
        .fill(0)
        .map((item, index) => (
          <ColorBoxPlaceholder key={index} />
        ))}
    </section>
  )
}

export default SwatchGrid
