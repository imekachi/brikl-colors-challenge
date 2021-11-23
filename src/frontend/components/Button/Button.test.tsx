import { render } from '@testing-library/react'
import React from 'react'
import Button, { ButtonProps } from './Button'

describe('Button', () => {
  const mockedProps: ButtonProps = {}

  it('should render without crashing', () => {
    render(<Button {...mockedProps} />)
  })
})
