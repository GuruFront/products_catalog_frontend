import Header, { HeaderProps } from '../../components/Header'
import { Container, Grid } from '@mui/material'
import Sort from '../../components/Sort'
import ProductFilters, { CategoriesList } from '../../components/ProductFilters'
import ProductList from '../../components/ProductList'
import React, { useCallback } from 'react'
import { Product } from '../../ui/ProductView'

type ViewProductCatalogProps = HeaderProps &
  CategoriesList & {
  onSortChanged: (text: string) => void
  products: Product[] | []
  onFilterChanged: (i: CategoriesList) => void
  areProductLoading: boolean
  onPageChanged: (i: number) => void
  pagesCount: number
  page: number
}

const View = (props: ViewProductCatalogProps) => {
  const {
    onSearchTextChanged,
    onSortChanged,
    products,
    categories,
    onFilterChanged,
    areProductLoading,
    onPageChanged,
    pagesCount,
    page,
  } = props


  return (
    <>
      <Header onSearchTextChanged={onSearchTextChanged} />
      <Container maxWidth='xl' sx={{ my: 3 }}>
        <Sort onChange={onSortChanged} show={products.length > 0} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <ProductFilters categories={categories} onChange={onFilterChanged} />
          </Grid>
          <Grid item xs={12} md={9}>
            <ProductList
              areProductsLoading={areProductLoading}
              products={products}
              onChange={onPageChanged}
              allProductsCount={pagesCount}
              currentProductsCount={products.length}
              currentValue={page}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default View
