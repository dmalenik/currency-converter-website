import React from 'react'
import { render, screen } from '@testing-library/react'
import { Heading } from '../components'

test('heading renders in the document', () => {
  render(<Heading level={1} title={'Hello world'} />)

  const heading = screen.getByTestId('heading')

  expect(heading).toBeInTheDocument()
})

test('heading includes title, and description attributes', () => {
  render(
    <Heading
      level={1}
      title={'Hello world'}
      description={'heading description'}
    />,
  )

  const heading = screen.getByTestId('heading')
  const title = screen.getByTestId('h1')
  const description = screen.getByTestId('description')

  expect(heading).toContainElement(title)
  expect(heading).toContainElement(description)
})

test('heading includes level and title attributes and does not include description attribute', () => {
  render(<Heading level={3} title={'Hello world'} />)

  const heading = screen.getByTestId('heading')
  const title = screen.getByTestId('h3')
  const description = screen.queryByTestId('description')

  expect(heading).toContainElement(title)
  expect(heading).not.toContainElement(description)
})
