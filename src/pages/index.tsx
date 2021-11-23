import Button from '@/frontend/components/Button'
import RandomSwatch from '@/frontend/components/RandomSwatch'
import useQueryGenerateSwatch from '@/frontend/hooks/query/useQueryGenerateSwatch'
import { NextPageWithLayout } from '@/frontend/layouts/layout.types'
import { getMainLayout } from '@/frontend/layouts/MainLayout'

const RandomSwatchPage: NextPageWithLayout = () => {
  const { loading, error, data, refetch } = useQueryGenerateSwatch()

  return (
    <main className="p-4 w-full">
      <h1 className="text-4xl font-bold mb-6 text-center">Swatch Generator</h1>
      <div className="my-16">
        <RandomSwatch isLoading={loading} error={error} data={data} />
      </div>
      <div className="text-center">
        <Button onClick={() => refetch()} disabled={loading}>
          Shuffle
        </Button>
      </div>
    </main>
  )
}
RandomSwatchPage.getLayout = getMainLayout

export default RandomSwatchPage
