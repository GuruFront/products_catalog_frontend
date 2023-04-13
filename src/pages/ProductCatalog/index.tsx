import React, {useEffect, useState} from "react";
import ProductList from "../../components/ProductList";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import Pagination from "../../components/Pagination";
import {ProductProps} from "../../ui/ProductView";
import SearchForm from "../../components/SearchForm";
import Select from "../../ui/Select";
import {getProducts} from "./api";

interface Filters {
    categories: String[]
}

export interface AllFilters {
    page: number,
    searchText: string,
    sortByYear: string,
    filters?: Filters
}

const ProductCatalog = () => {

    const [products, setProducts] = useState<ProductProps[] | []>([]);
    const [itemsCount, setItemsCount] = useState<number>(0)
    const [areProductLoading, setProductLoading] = useState<boolean>(true)

    const [productsConfig, setProductsConfig] = useState<AllFilters>({
        page: 0,
        searchText: '',
        filters: {
            categories: []
        },
        sortByYear: ''
    })

    useEffect(() => {
        setProductLoading(true)
        getProducts(productsConfig)
            .then(function (response: any) {
                setProducts(response.data.products)
                setItemsCount(response.data.itemsCount)
                setProductLoading(false)
            })

    }, [productsConfig]);



    const onPageChanged = (i: number) => {
        setProductsConfig({...productsConfig, page: productsConfig.page + i})
    }

    const onFilterChanged = (filter: Filters) => {
        setProductsConfig({...productsConfig, filters: filter, page: 0});
    }

    const onSearchTextChanged = (text: string) => {
        setProductsConfig({...productsConfig, searchText: text, page: 0});
    }

    const onSortChanged = (text: string) => {
        setProductsConfig({...productsConfig, sortByYear: text, page: 0});
    }


    return (
        <>
            <div className='container py-2 mb-5'>
                <div className={'mb-5'}>
                    <SearchForm onSumbit={onSearchTextChanged}/>
                </div>
                <div className={'mb-5 w-full flex'}>
                    {products.length > 0 && <Select onChange={onSortChanged} values={['Year up', 'Year down']}/>}
                </div>
            </div>
            <div className="container flex px-1">
                <ProductFilters onChange={onFilterChanged}/>
                <div className="w-full bg-white " style={{minHeight: '953px'}}>

                    {areProductLoading ? <div className="loader-container">
                        <div className="spinner"></div>
                    </div> : <ProductList products={products}/>}

                    <div className="flex flex-col items-center">
                        <Pagination onChange={onPageChanged} currentValue={productsConfig.page}
                                    allProductsCount={itemsCount} currentProductsCount={products.length}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCatalog