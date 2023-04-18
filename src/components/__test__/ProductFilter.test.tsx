import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductFilters, { CategoriesList } from '../ProductFilters'

describe('ProductFilters', () => {
  const categoriesList: CategoriesList = { categories: ['Test Category 1', 'Test Category 2'] }
  const onChangeMock = jest.fn()

  beforeEach(() => {
    onChangeMock.mockClear()
  })

  it('renders without crashing', () => {
    render(<ProductFilters onChange={onChangeMock} categories={categoriesList.categories} />)
  })

  it('renders the categories header when there are categories', () => {
    render(<ProductFilters onChange={onChangeMock} categories={categoriesList.categories} />)
    const categoryHeading = screen.getByText('Category')
    expect(categoryHeading).toBeInTheDocument()
  })

  it('does not render the categories list when there are no categories', () => {
    render(<ProductFilters onChange={onChangeMock} categories={[]} />)
    const categoryHeading = screen.queryByText(/Category/)
    expect(categoryHeading).not.toBeInTheDocument()
    const checkboxesList = screen.queryByTestId('filter-category-list')
    expect(checkboxesList).not.toBeInTheDocument()
  })
})
