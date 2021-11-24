import { render, screen } from '@testing-library/react'
import React from 'react'
import { toCssColor } from '@/frontend/lib/toCssColor'
import { FormattedColor } from '@/service/color/formatter'
import SwatchGrid, { SwatchGridProps } from './SwatchGrid'

describe('SwatchGrid', () => {
  const mockColor: FormattedColor = {
    format: 'HEX',
    value: '#f37a01',
  }

  const mockedProps: SwatchGridProps = {
    swatch: [mockColor, mockColor, mockColor],
  }

  it('should render with the correct number of color boxes', () => {
    render(<SwatchGrid {...mockedProps} />)
    expect(screen.queryAllByTestId('ColorBox')).toHaveLength(
      mockedProps.swatch.length
    )
  })

  it('should render the correct color', () => {
    render(<SwatchGrid {...mockedProps} />)
    expect(screen.queryAllByTestId('ColorBox')[0]).toHaveStyle(
      `background-color: ${toCssColor(mockColor)}`
    )
  })
})
