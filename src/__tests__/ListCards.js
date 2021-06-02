import React from 'react'
import {Provider} from 'react-redux'
import {render, screen} from '@testing-library/react'
import * as ListCards from '../components/ListCards'
import {store} from '../redux-store'

test('can renders the mergersArray', () => {
    const {getByText} = render(
      <Provider store={store}>
        <ListCards />
      </Provider>,
    )
    const exampleArray = screen.getByText({ mergers.user.login })
    except.(exampleArray).toHaveLenght('30')
  })