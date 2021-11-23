import { render, screen } from '@testing-library/react'
import React from 'react'
import { GenerateSwatch_generateSwatch } from '@/frontend/types/graphql/GenerateSwatch'
import { ColorTypes } from '@/frontend/types/graphql/global'
import SwatchGrid, { SwatchGridProps } from './SwatchGrid'

describe('SwatchGrid', () => {
  const mockColor: GenerateSwatch_generateSwatch = {
    __typename: 'Color',
    format: ColorTypes.HEX,
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
})
