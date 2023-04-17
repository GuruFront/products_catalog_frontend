import React, { useEffect, useState } from 'react'
import ProductList from '../../components/ProductList'
import ProductFilters from '../../components/ProductFilters/ProductFilters'
import Pagination from '../../ui/Pagination'
import { Product } from '../../ui/ProductView'
import SearchForm from '../../ui/SearchForm'
import Select from '../../ui/Select'
import { getProducts } from './api'
import CircularProgress from '@mui/material/CircularProgress'
import { Box, Container, Grid } from '@mui/material'
import Paper from '@mui/material/Paper'
import { grey } from '@mui/material/colors'

interface Filters {
  categories: string[]
}

export type AllFilters = {
  page: number
  searchText: string
  sortByYear: string
  filters?: Filters
}

export type ProductsResponse = {
  data: Pick<AllFilters, 'page'> & {
    products: []
    pagesCount: number
  }
}

const ProductCatalog = () => {
  const [products, setProducts] = useState<Product[] | []>([])
  const [pagesCount, setPagesCount] = useState<number>(0)
  const [areProductLoading, setProductLoading] = useState<boolean>(true)

  const [productsConfig, setProductsConfig] = useState<AllFilters>({
    page: 1,
    searchText: '',
    filters: {
      categories: [],
    },
    sortByYear: '',
  })

  useEffect(() => {
    setProductLoading(true)
    getProducts(productsConfig)
      .then(function (response: ProductsResponse) {
        setProducts(response.data.products)
        setPagesCount(response.data.pagesCount)
        setProductLoading(false)
      })
      .catch((e) => {
        setProductLoading(false)
        console.error(e)
      })
  }, [productsConfig])

  const onPageChanged = (i: number) => {
    if (productsConfig.page !== i) setProductsConfig({ ...productsConfig, page: i })
  }

  const onFilterChanged = (filter: Filters) => {
    setProductsConfig({ ...productsConfig, filters: filter, page: 1 })
  }

  const onSearchTextChanged = (text: string) => {
    setProductsConfig({ ...productsConfig, searchText: text, page: 1 })
  }

  const onSortChanged = (text: string) => {
    setProductsConfig({ ...productsConfig, sortByYear: text, page: 1 })
  }
  console.log('products', products)
  return (
    <>
      <Paper
        square
        elevation={5}
        sx={{
          py: 2,
          bgcolor: grey[900],
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <Container maxWidth='xl'>
          <SearchForm onSumbit={onSearchTextChanged} />
        </Container>
      </Paper>
      <Container maxWidth='xl' sx={{ my: 3 }}>
        {products.length > 0 && (
          <Select title={'Sort'} onChange={onSortChanged} values={['Year up', 'Year down']} />
        )}
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <ProductFilters onChange={onFilterChanged} />
          </Grid>
          <Grid item xs={12} md={9}>
            {areProductLoading ? (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  height: '100%',
                  alignItems: 'center',
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <>
                <ProductList products={products} />
                <div className='flex flex-col items-center'>
                  <Pagination
                    onChange={onPageChanged}
                    currentValue={productsConfig.page}
                    allProductsCount={pagesCount}
                    currentProductsCount={products.length}
                  />
                </div>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default ProductCatalog
