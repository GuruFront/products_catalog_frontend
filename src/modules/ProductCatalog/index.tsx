import React, { useEffect, useState } from 'react'
import { CategoriesResponse } from '../../components/ProductFilters'
import { Product } from '../../ui/ProductView'
import { getProducts, getCategoriesList } from './api'
import View from './View'

type Filters = {
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
  const [categories, setCategories] = useState<string[]>([])

  const [productsConfig, setProductsConfig] = useState<AllFilters>({
    page: 1,
    searchText: '',
    filters: {
      categories: [],
    },
    sortByYear: '',
  })

  useEffect(() => {
    getCategoriesList.then(function (response: CategoriesResponse) {
      setCategories(response.data.categories)
    })
  }, [])

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

  return (
    <View
      areProductLoading={areProductLoading}
      categories={categories}
      onFilterChanged={onFilterChanged}
      onPageChanged={onPageChanged}
      onSearchTextChanged={onSearchTextChanged}
      onSortChanged={onSortChanged}
      page={productsConfig.page}
      pagesCount={pagesCount}
      products={products}
    />
  )
}

export default ProductCatalog
