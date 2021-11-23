import { ReactNode } from 'react'
import { GetLayout } from '@/frontend/layouts/layout.types'

export type MainLayoutProps = {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col justify-start">
      <div className="flex-1 flex flex-col justify-center items-center pt-8">
        {children}
      </div>
    </div>
  )
}

export const getMainLayout: GetLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}

export default MainLayout
