import { ApolloError } from '@apollo/client'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { QueryGenerateSwatch } from '@/frontend/hooks/query/useQueryGenerateSwatch'
import { FormattedColor } from '@/service/color/formatter'
import RandomSwatch from './RandomSwatch'

describe('RandomSwatch', () => {
  it('should render the loading state when isLoading: true', () => {
    render(<RandomSwatch isLoading />)
    expect(screen.queryByLabelText('loading')).toBeInTheDocument()
  })

  it('should render the error message when there is an error', () => {
    const errorMessage = 'Error message test'
    render(
      <RandomSwatch
        isLoading={false}
        error={new ApolloError({ errorMessage })}
      />
    )
    expect(screen.queryByText(errorMessage)).toBeInTheDocument()
  })

  it('should render No data message when there is no data', () => {
    render(<RandomSwatch isLoading={false} />)
    expect(screen.queryByText('No data')).toBeInTheDocument()
  })

  it('should render the swatch when the data is present', () => {
    const mockColor: FormattedColor = {
      format: 'HEX',
      value: '#f37a01',
    }

    const mockData: QueryGenerateSwatch = {
      generateSwatch: Array(5).fill(mockColor),
    }

    render(<RandomSwatch isLoading={false} data={mockData} />)
    expect(screen.queryByTestId('SwatchGrid')).toBeInTheDocument()
  })
})
