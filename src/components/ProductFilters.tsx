import React, { useEffect, useState } from 'react'
import CheckboxList from '../ui/CheckboxList'
import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

export type CategoriesList = {
  categories: string[] | []
}

type FiltersProps = CategoriesList & {
  onChange: (i: CategoriesList) => void
}

export type CategoriesResponse = {
  data: CategoriesList
}

const ProductFilters = (props: FiltersProps) => {
  const { onChange, categories } = props
  const [show, setShow] = useState<boolean>(true)

  const onfFilterChanged = (checkedValues: string[]) => {
    onChange({
      categories: checkedValues,
    })
  }

  const handleFilterShow = (width: number) => {
    if (width < 900 && show) {
      setShow(false)
      return
    }

    if (width >= 900 && !show) {
      setShow(true)
      return
    }
  }

  useEffect(() => {
    handleFilterShow(window.innerWidth)
    window.addEventListener('resize', () => {
      handleFilterShow(window.innerWidth)
    })
  }, [])

  return categories?.length > 0 ? (
    <Paper
      sx={{ border: '1px solid', borderColor: 'divider', p: 2, pb: 1, borderRadius: 2 }}
      data-testid='filter'
    >
      <div data-testid='categories'>
        <Typography
          onClick={() => {
            setShow(!show)
          }}
          sx={{
            borderBottom: ` ${show ? '1' : '0'}px solid`,
            borderColor: 'divider',
            cursor: 'pointer',
            mx: -2,
            px: 2,
            pb: 1,
          }}
        >
          Category{' '}
          <ArrowDropDownIcon
            sx={{ mb: -1, transform: `rotate(${show ? '180deg' : 0})`, opacity: 0.54 }}
          />
        </Typography>
        <CheckboxList
          show={show}
          data-testid='filter-category-list'
          values={categories}
          onChange={onfFilterChanged}
        ></CheckboxList>
      </div>
    </Paper>
  ) : null
}

export default ProductFilters
