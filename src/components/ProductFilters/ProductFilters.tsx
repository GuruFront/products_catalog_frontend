import React, { useEffect, useState } from 'react'
import CheckboxList from '../../ui/CheckboxList'
import { getCategoriesList } from './api'
import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper'

type CategoriesList = {
  categories: string[]
}

type FiltersProps = {
  onChange: (i: CategoriesList) => void
}

export type CategoriesResponse = {
  data: CategoriesList
}

const ProductFilters = (props: FiltersProps) => {
  const { onChange } = props
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    getCategoriesList.then(function(response: CategoriesResponse) {
      setCategories(response.data.categories)
    })
  }, [])

  const onfFilterChanged = (checkedValues: string[]) => {
    onChange({
      categories: checkedValues,
    })
  }

  return categories.length > 0 ? (
    <Paper
      sx={{ border: '1px solid', borderColor: 'divider', p: 2, borderRadius: 2 }}
      data-component='filter'
    >
      <div data-component='categories'>
        <Typography sx={{ borderBottom: '1px solid', borderColor: 'divider', mx: -2, px: 2, pb: 1 }}>
          {' '}
          Category{' '}
        </Typography>
        <CheckboxList values={categories} onChange={onfFilterChanged}></CheckboxList>
      </div>
    </Paper>
  ) : null
}

export default ProductFilters
