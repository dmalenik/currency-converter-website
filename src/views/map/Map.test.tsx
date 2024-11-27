import React from 'react'
import { render, screen } from '@testing-library/react'
import { Map } from './Map'
import { UnorderedList, Link } from '../../components'
import { GiEgyptianSphinx, GiSpain } from 'react-icons/gi'

test('Map renders in the document', () => {
  render(<Map />)

  const map = screen.getByTestId('map')

  expect(map).toBeInTheDocument()
})

test('Map includes map support and map countries elements', () => {
  render(<Map />)

  const map = screen.getByTestId('map')
  const mapSupport = screen.getByTestId('map-support')
  const mapCountries = screen.getByTestId('map-countries')

  expect(map).toContainElement(mapSupport)
  expect(map).toContainElement(mapCountries)
})

test('map support contains MoneyTransfer, Support, QuickLinks, and Legal components', () => {
  render(<Map />)

  const mapSupport = screen.getByTestId('map-support')
  const moneyTransfer = screen.getByTestId('money-transfer')
  const support = screen.getByTestId('support')
  const quickLinks = screen.getByTestId('quick-links')
  const legal = screen.getByTestId('legal')

  expect(mapSupport).toContainElement(moneyTransfer)
  expect(mapSupport).toContainElement(support)
  expect(mapSupport).toContainElement(quickLinks)
  expect(mapSupport).toContainElement(legal)
})

test('map countries includes map countries text, unordered list, and Markets component', () => {
  render(<Map />)

  const mapCountries = screen.getByTestId('map-countries')
  const mapCountriesText = screen.getByTestId('map-countries-text')
  const markets = screen.getByTestId('markets')

  expect(mapCountries).toContainElement(mapCountriesText)
  expect(mapCountries).toContainElement(markets)
})

test('unordered list renders in the document', () => {
  render(
    <UnorderedList>
      <Link
        icon={<GiEgyptianSphinx />}
        description={'Egypt'}
        ariaLabel='lorem ipsum'
      />
      <Link
        icon={<GiSpain />}
        description={'Phillippines'}
        ariaLabel='lorem ipsum'
      />
      <Link
        icon={<GiEgyptianSphinx />}
        description={'India'}
        ariaLabel='lorem ipsum'
      />
      <Link
        icon={<GiEgyptianSphinx />}
        description={'Lebanon'}
        ariaLabel='lorem ipsum'
      />
      <Link
        icon={<GiEgyptianSphinx />}
        description={'Tunisia'}
        ariaLabel='lorem ipsum'
      />
    </UnorderedList>,
  )

  const unorderedList = screen.getByTestId('unordered-list')
  const unorderedListChildren = screen.getAllByTestId('unordered-list-child')

  expect(unorderedList).toBeInTheDocument()
  expect(unorderedListChildren).toHaveLength(5)
})
