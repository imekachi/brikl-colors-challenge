/* eslint-disable @typescript-eslint/ban-types */
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

export type GetLayout = (page: ReactElement) => JSX.Element | ReactNode | null

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: GetLayout
}
