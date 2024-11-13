import React from 'react'
import { render, screen } from '@testing-library/react'
import { Search } from '../components'
import { Link } from '../components'
import { GiEgyptianSphinx } from 'react-icons/gi'
import { FaFlagUsa } from 'react-icons/fa'
import { FaLandmarkFlag } from 'react-icons/fa6'

test('search renders to document', () => {
  render(
    <Search
      items={[
        <Link
          icon={<GiEgyptianSphinx />}
          description={'EGP'}
          ariaLabel='EGP'
        />,
        <Link icon={<FaFlagUsa />} description={'USD'} ariaLabel='USD' />,
        <Link icon={<FaLandmarkFlag />} description={'UAH'} ariaLabel='UAH' />,
      ]}
    />,
  )

  const search = screen.getByTestId('search')

  expect(search).toBeInTheDocument()
})

test('search contains search result and search section', () => {
  render(
    <Search
      items={[
        <Link
          icon={<GiEgyptianSphinx />}
          description={'EGP'}
          ariaLabel='EGP'
        />,
        <Link icon={<FaFlagUsa />} description={'USD'} ariaLabel='USD' />,
        <Link icon={<FaLandmarkFlag />} description={'UAH'} ariaLabel='UAH' />,
      ]}
    />,
  )

  const search = screen.getByTestId('search')
  const result = screen.getByTestId('search-result')
  const section = screen.getByTestId('search-section')

  expect(search).toContainElement(result)
  expect(search).toContainElement(section)
})

test('search result contains search result item and search icon', () => {
  render(
    <Search
      items={[
        <Link
          icon={<GiEgyptianSphinx />}
          description={'EGP'}
          ariaLabel='EGP'
        />,
        <Link icon={<FaFlagUsa />} description={'USD'} ariaLabel='USD' />,
        <Link icon={<FaLandmarkFlag />} description={'UAH'} ariaLabel='UAH' />,
      ]}
    />,
  )

  const result = screen.getByTestId('search-result')
  const item = screen.getByTestId('search-result-item')
  const icon = screen.getByTestId('search-icon')

  expect(result).toContainElement(item)
  expect(result).toContainElement(icon)
})

test('search section contains search controller and search list', () => {
  render(
    <Search
      items={[
        <Link
          icon={<GiEgyptianSphinx />}
          description={'EGP'}
          ariaLabel='EGP'
        />,
        <Link icon={<FaFlagUsa />} description={'USD'} ariaLabel='USD' />,
        <Link icon={<FaLandmarkFlag />} description={'UAH'} ariaLabel='UAH' />,
      ]}
    />,
  )

  const section = screen.getByTestId('search-section')
  const controller = screen.getByTestId('search-controller')
  const list = screen.getByTestId('search-list')

  expect(section).toContainElement(controller)
  expect(section).toContainElement(list)
})

test('search controller contains search label and search input', () => {
  render(
    <Search
      items={[
        <Link
          icon={<GiEgyptianSphinx />}
          description={'EGP'}
          ariaLabel='EGP'
        />,
        <Link icon={<FaFlagUsa />} description={'USD'} ariaLabel='USD' />,
        <Link icon={<FaLandmarkFlag />} description={'UAH'} ariaLabel='UAH' />,
      ]}
    />,
  )

  const controller = screen.getByTestId('search-controller')
  const label = screen.getByTestId('search-label')
  const input = screen.getByTestId('search-input')

  expect(controller).toContainElement(label)
  expect(controller).toContainElement(input)
})

test('search list contains at least one search item', () => {
  render(
    <Search
      items={[
        <Link
          icon={<GiEgyptianSphinx />}
          description={'EGP'}
          ariaLabel='EGP'
        />,
        <Link icon={<FaFlagUsa />} description={'USD'} ariaLabel='USD' />,
        <Link icon={<FaLandmarkFlag />} description={'UAH'} ariaLabel='UAH' />,
      ]}
    />,
  )

  const items = screen.getAllByTestId('search-item')

  expect(items).toHaveLength(3)
})
