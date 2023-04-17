import React from 'react'
import Pagination2 from '@mui/material/Pagination'

type PaginationProps = {
  currentValue: number
  allProductsCount: number
  currentProductsCount: number
  onChange: (i: number) => void
}

const Pagination = (props: PaginationProps) => {
  const { currentValue, allProductsCount, onChange, currentProductsCount } = props

  return currentProductsCount > 0 ? (
    <Pagination2
      shape='rounded'
      sx={{ mb: 2 }}
      onChange={(e, i) => onChange(i)}
      count={allProductsCount}
      page={currentValue}
    />
  ) : null
}

export default Pagination
