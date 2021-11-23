import { render } from '@testing-library/react'
import React from 'react'
import MainLayout from './MainLayout'

describe('MainLayout', () => {
  it('should render the children correctly', () => {
    const text = 'Hello world'
    const { queryByText } = render(<MainLayout>{text}</MainLayout>)
    expect(queryByText(text)).toBeInTheDocument()
  })
})
