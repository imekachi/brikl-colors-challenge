import Button from '@/frontend/components/Button'
import SwatchGrid from '@/frontend/components/SwatchGrid'
import useQueryGenerateSwatch from '@/frontend/hooks/query/useQueryGenerateSwatch'
import { NextPageWithLayout } from '@/frontend/layouts/layout.types'
import { getMainLayout } from '@/frontend/layouts/MainLayout'

const RandomSwatchPage: NextPageWithLayout = () => {
  const { loading, called, data, refetch } = useQueryGenerateSwatch()

  return (
    <div className="p-4 w-full">
      <h1 className="text-4xl font-bold mb-6 text-center">Swatch Generator</h1>
      <div className="my-16">
        {loading || !called ? (
          'loading...'
        ) : data ? (
          <SwatchGrid swatch={data.generateSwatch} />
        ) : (
          'no data'
        )}
      </div>
      <div className="text-center">
        <Button onClick={() => refetch()} disabled={loading}>
          Generate
        </Button>
      </div>
    </div>
  )
}
RandomSwatchPage.getLayout = getMainLayout

export default RandomSwatchPage
