// TODO: add store to separate model from view/controller

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


  const fetchCategoriesList = () => {
    getCategoriesList.then(function(response: CategoriesResponse) {
      setCategories(response.data.categories)
    })
  }

  const fetchProducts = (data: AllFilters) => {
    setProductLoading(true)
    setProductsConfig({ ...data, filters: { categories: data.filters?.categories ?? [] } })
    getProducts(data)
      .then(function(response: ProductsResponse) {
        setProducts(response.data.products)
        setPagesCount(response.data.pagesCount)
      })
      .catch((e) => {
        console.error(e)
      }).finally(() => {
      setProductLoading(false)
    })
  }

  useEffect(() => {
    fetchCategoriesList()
    fetchProducts(productsConfig)
  }, [])

  const onPageChanged = (i: number) => {
    if (productsConfig.page !== i) {
      fetchProducts({ ...productsConfig, page: i })
    }
  }

  const onFilterChanged = (filter: Filters) => {
    if (filter.categories.length !== productsConfig.filters?.categories.length) {
      fetchProducts({ ...productsConfig, filters: filter, page: 1 })
    }
  }

  const onSearchTextChanged = (text: string) => {
    fetchProducts({ ...productsConfig, searchText: text, page: 1 })
  }

  const onSortChanged = (text: string) => {
    fetchProducts({ ...productsConfig, sortByYear: text, page: 1 })
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
