import React from 'react'
import ReactDOM from 'react-dom'

import {FavoriteNumber} from '../favorite-number'

it('renders a number input with a label FavoriteNumber', () => {
  const div = document.createElement('div')

  ReactDOM.render(<FavoriteNumber />, div)
  expect(div.querySelector('input').type).toBe('number')
  expect(div.querySelector('label').textContent).toBe('Favorite Number')
})
