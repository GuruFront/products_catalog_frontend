import React from 'react';
import ProductView, {ProductProps} from "../ui/ProductView";
import Grid2 from '@mui/material/Unstable_Grid2';

const ProductList = (props: { products: ProductProps[] | [] }) => {

    const {products} = props;
    const areProductsExist = products.length > 0;

    return <>
        <Grid2 container spacing={2} sx={{justifyContent:'center', mb:2}}>
            {areProductsExist ? products?.map((i: any) =>
                        <Grid2 xs={12} sm={6} md={4} lg={4} xl={2}>
                        <ProductView product={i} key={i.product_id}/>
                    </Grid2>) :
                <h1>Products not found</h1>
            }
        </Grid2>
    </>
}

export default ProductList;


