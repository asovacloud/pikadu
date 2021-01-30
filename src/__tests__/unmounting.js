import React from 'react'
import {render, act} from '@testing-library/react'

import {Countdown} from '../countdown'

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

afterAll(() => {
  console.error.mockRestore()
})

afterEach(() => {
  jest.clearAllMocks()
  jest.useRealTimers()
})

test('does not attempt to set state when unmounted', () => {
  jest.useFakeTimers()
  const {unmount} = render(<Countdown />)

  unmount()
  act(() => jest.runOnlyPendingTimers())
  expect(console.error).not.toHaveBeenCalled()
})
