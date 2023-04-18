import Header, { HeaderProps } from '../../components/Header'
import { Container, Grid } from '@mui/material'
import Sort from '../../components/Sort'
import ProductFilters, { CategoriesList } from '../../components/ProductFilters'
import ProductList from '../../components/ProductList'
import React from 'react'
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
  return (
    <>
      <Header onSearchTextChanged={props.onSearchTextChanged} />
      <Container maxWidth='xl' sx={{ my: 3 }}>
        <Sort onChange={props.onSortChanged} show={props.products.length > 0} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <ProductFilters categories={props.categories} onChange={props.onFilterChanged} />
          </Grid>
          <Grid item xs={12} md={9}>
            <ProductList
              areProductsLoading={props.areProductLoading}
              products={props.products}
              onChange={props.onPageChanged}
              allProductsCount={props.pagesCount}
              currentProductsCount={props.products.length}
              currentValue={props.page}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default View
