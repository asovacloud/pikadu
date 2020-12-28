import React from 'react'
import {render} from '@testing-library/react'
import {axe} from 'jest-axe'

function Form() {
  return (
    <form>
      <label htmlFor="form-email">Email:</label>
      <input placeholder="email" id="form-email" />
    </form>
  )
}

test('the form is accessible', async () => {
  const {container} = render(<Form />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
