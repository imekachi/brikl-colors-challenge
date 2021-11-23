import ColorBox from '@/frontend/components/ColorBox'
import { GenerateSwatch_generateSwatch } from '@/frontend/types/graphql/GenerateSwatch'

export type SwatchGridProps = {
  swatch: GenerateSwatch_generateSwatch[]
}

const SwatchGrid = ({ swatch }: SwatchGridProps): JSX.Element => {
  return (
    <div className="swatch-list grid grid-cols-[repeat(auto-fit,minmax(5rem,1fr))] gap-6">
      {swatch.map((color, index) => (
        <ColorBox key={index} color={color.value} />
      ))}
    </div>
  )
}

export default SwatchGrid
