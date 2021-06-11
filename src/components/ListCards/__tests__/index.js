import React from 'react'
import {Provider} from 'react-redux'
import {render} from '@testing-library/react'
import ListCards from '../'
import { createStore } from 'redux'
import reducers from '../../../reducers'
import DUMMY_DATA from '../dummy'
import '@testing-library/jest-dom/extend-expect'

const store = createStore(reducers)

store.dispatch({
  type: "FETCH_MERGERS_SUCCESS",
  payload: DUMMY_DATA,
})

const DUMMY_DATA_LEN = DUMMY_DATA.length

test('can renders the mergersArray', () => {
  const {getByTestId, getAllByTestId} = render(
    <Provider store={store}>
      <ListCards />
    </Provider>,
  )
  expect(getByTestId('list-cards-wrapper')).toBeInTheDocument()
  expect(getAllByTestId('list-cards')).toHaveLength(DUMMY_DATA_LEN)
})
