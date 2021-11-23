import { render, screen } from '@testing-library/react'
import React from 'react'
import ColorBox, { ColorBoxProps } from './ColorBox'

describe('ColorBox', () => {
  const mockedProps: ColorBoxProps = {
    color: '#f37a01',
  }

  it('should render with the color as a background', () => {
    render(<ColorBox {...mockedProps} />)
    expect(screen.getByTestId('ColorBox')).toHaveStyle(
      `background-color: ${mockedProps.color}`
    )
  })
})
