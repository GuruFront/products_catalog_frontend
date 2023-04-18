import React from 'react'
import ProductView, { Product } from '../ui/ProductView'
import Grid2 from '@mui/material/Unstable_Grid2'
import Pagination, { PaginationProps } from '../ui/Pagination'
import { Box, Container, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

type ProductListProps = PaginationProps & {
  products: Product[] | []
  areProductsLoading: boolean
}

const ProductList = (props: ProductListProps) => {
  const {
    products,
    onChange,
    allProductsCount,
    currentProductsCount,
    currentValue,
    areProductsLoading,
  } = props
  const areProductsExist = products.length > 0

  return (
    <>
      <Grid2 container spacing={2} sx={{ mb: 2 }}>
        {areProductsLoading && (
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
        )}
        {!areProductsLoading && areProductsExist ? (
          <>
            {products?.map((i: Product) => (
              <Grid2 xs={12} sm={6} md={4} lg={4} xl={2} key={i.product_id} sx={{ mb: 2 }}>
                <ProductView product={i} />
              </Grid2>
            ))}
            <Container>
              <Pagination
                onChange={onChange}
                currentValue={currentValue}
                allProductsCount={allProductsCount}
                currentProductsCount={currentProductsCount}
              />
            </Container>
          </>
        ) : (
          <Typography variant='h5' sx={{ textAlign: 'center', width: '100%' }}>
            Products not found
          </Typography>
        )}
      </Grid2>
    </>
  )
}

export default ProductList
