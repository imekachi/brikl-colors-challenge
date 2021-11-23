import { render, screen } from '@testing-library/react'
import React from 'react'
import MessageBox from './MessageBox'

describe('MessageBox', () => {
  it('should render the children', () => {
    const message = 'Hello World'
    render(<MessageBox>{message}</MessageBox>)
    expect(screen.queryByText(message)).toBeInTheDocument()
  })
})
