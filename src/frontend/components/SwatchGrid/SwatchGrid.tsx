import ColorBox, { ColorBoxPlaceholder } from '@/frontend/components/ColorBox'
import { GenerateSwatch_generateSwatch } from '@/frontend/types/graphql/GenerateSwatch'
import style from './SwatchGrid.module.css'

export type SwatchGridProps = {
  swatch: GenerateSwatch_generateSwatch[]
}

const SwatchGrid = ({ swatch }: SwatchGridProps): JSX.Element => {
  return (
    <div className={style.swatchGrid} data-testid="SwatchGrid">
      {swatch.map((color, index) => (
        <ColorBox key={index} color={color.value} />
      ))}
    </div>
  )
}

export type SwatchGridPlaceholderProps = {
  items?: number
}
export const SwatchGridPlaceHolder = ({
  items = 5,
}: SwatchGridPlaceholderProps): JSX.Element => {
  return (
    <div className={style.swatchGrid} aria-label="loading">
      {Array(items)
        .fill(0)
        .map((item, index) => (
          <ColorBoxPlaceholder key={index} />
        ))}
    </div>
  )
}

export default SwatchGrid
