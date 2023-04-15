import React, {useEffect, useState} from "react";
import CheckboxList from "../../ui/CheckboxList";
import {getCategoriesList} from "./api";
import {Typography} from "@mui/material";
import Paper from "@mui/material/Paper";


type FiltersProps = {
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

    return categories.length > 0 ? <Paper sx={{ border: '1px solid', borderColor: 'divider', p: 2, borderRadius: 2}}>
        <Typography sx={{ borderBottom: '1px solid', borderColor: 'divider', mx:-2, px:2, pb:1}}> Category </Typography>
        <CheckboxList values={categories} onChange={onfFilterChanged}></CheckboxList>
    </Paper> : null
}

export default ProductFilters

