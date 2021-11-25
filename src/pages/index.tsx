import Button from '@/frontend/components/Button'
import RandomSwatch from '@/frontend/components/RandomSwatch'
import useQueryGenerateSwatch from '@/frontend/hooks/query/useQueryGenerateSwatch'
import { NextPageWithLayout } from '@/frontend/layouts/layout.types'
import { getMainLayout } from '@/frontend/layouts/MainLayout'

const RandomSwatchPage: NextPageWithLayout = () => {
  const { loading, error, data, refetch } = useQueryGenerateSwatch()

  return (
    <main className="px-4 py-8 w-full max-w-7xl mx-auto md:px-10">
      <div className="h-16 text-center mb-8">
        <img
          className="h-full mx-auto"
          src="/images/BrikLSquare.svg"
          alt="BrikL logo"
        />
      </div>
      <h1 className="text-4xl font-bold mb-6 text-center md:text-6xl">
        Swatch Generator
      </h1>
      <div className="mt-12 mb-10 md:mt-16 md:mb-16">
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
