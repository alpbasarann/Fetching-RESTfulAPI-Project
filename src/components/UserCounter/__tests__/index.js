import React from 'react'
import {Provider} from 'react-redux'
import { render, screen } from '@testing-library/react'
import UserCounter from '../'
import {store} from '../../../store'
import '@testing-library/jest-dom/extend-expect'


test('tests length', () => {
    const {getAllByTestId} = render(
        <Provider store={store}>
            <UserCounter/>
        </Provider>,
  )
    expect(getAllByTestId('user-counter')).toHaveLength(userRankList.length); 
})

