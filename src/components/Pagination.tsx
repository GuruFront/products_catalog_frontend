import Button from "../ui/Button";
import React from "react";

type PaginationProps = {
    currentValue: number
    allProductsCount: number
    currentProductsCount: number
    onChange: (i: number) => void
}

const ONE_PAGE_PRODUCTS_COUNT = parseInt(process.env.REACT_APP_ONE_PAGE_PRODUCTS_COUNT ?? '8',10);

const Pagination = (props: PaginationProps) => {

    const {
        currentValue,
        allProductsCount,
        onChange,
        currentProductsCount
    } = props;


    return currentProductsCount > 0 ?
        <>
            <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing <span
            className="font-semibold text-gray-900 dark:text-white">
                    {currentValue * ONE_PAGE_PRODUCTS_COUNT + 1}</span> to <span
            className="font-semibold text-gray-900 dark:text-white">
                    {currentValue * ONE_PAGE_PRODUCTS_COUNT + currentProductsCount}</span> of <span
            className="font-semibold text-gray-900 dark:text-white">{allProductsCount}</span> Entries </span>

            <div className="inline-flex mt-2 xs:mt-0">
                {currentValue > 0 &&
                    <Button
                        onClick={() => {onChange(-1)}}>
                        Prev
                    </Button>
                }
                {currentValue * ONE_PAGE_PRODUCTS_COUNT + currentProductsCount ! < allProductsCount &&
                    <Button
                        onClick={() => {onChange(1)}}>
                        Next
                    </Button>
                }
            </div>
        </> : null
}

export default Pagination;