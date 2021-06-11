import React from 'react'
import Loading from '../'
import { render, screen } from '@testing-library/react'

test('renders loading page', () => {
    const div = document.createElement('div')
    render(<Loading />, div)
    screen.getByText('Loading')
  })
