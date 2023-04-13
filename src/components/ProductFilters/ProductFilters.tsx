import React, {useEffect, useState} from "react";
import CheckboxListView from "../../ui/CheckboxListView";
import {getCategoriesList} from "./api";


interface FiltersProps {
    onChange: Function
}

const ProductFilters = (props: FiltersProps) => {

    const {onChange} = props;
    const [categories, setCategories] = useState<String[]>([]);

    useEffect(() => {
        getCategoriesList.then(function (response: any) {
            setCategories(response.data.categories)
        });
    }, []);

    const onfFilterChanged = (checkedValues: String[]) => {
        onChange({
            categories: checkedValues
        });
    }

    return categories.length > 0 ? <div className={'w-full mb-5 max-w-xs'}>
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Category</h3>
        <CheckboxListView values={categories} onChange={onfFilterChanged}></CheckboxListView>
    </div> : null
}

export default ProductFilters

