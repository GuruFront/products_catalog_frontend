import React from 'react'
import PaginationMui from '@mui/material/Pagination'

export type PaginationProps = {
  currentValue: number
  allProductsCount: number
  currentProductsCount: number
  onChange: (i: number) => void
}

const Pagination = (props: PaginationProps) => {
  const { currentValue, allProductsCount, onChange, currentProductsCount } = props

  return currentProductsCount > 0 ? (
    <PaginationMui
      shape='rounded'
      sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}
      onChange={(e, i) => onChange(i)}
      count={allProductsCount}
      page={currentValue}
    />
  ) : null
}

export default Pagination
