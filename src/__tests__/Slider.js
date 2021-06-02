import React from 'react'
import Loading from '../components/Slider'
import {getByText} from 'jest'
import Slider from '../components/Slider/styled'

jest.fn(Slider)


test('renders loading page', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Loading />, div)
    expect(<Loading/>).toContain(<Slider/>) 
  })