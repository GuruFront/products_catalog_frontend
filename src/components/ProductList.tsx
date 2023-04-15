import React from 'react';
import ProductView, {ProductProps} from "../ui/ProductView";

const ProductList = (props: { products: ProductProps[] | [] }) => {

    const {products} = props;
    const areProductsExist = products.length > 0;

    return <div className={`flex flex-wrap  mx-auto w-full ${areProductsExist ? 'justify-center' : ''}`}>
        {areProductsExist ? products?.map((i: any) => <ProductView product={i} key={i.product_id}/>) :
            <h1 className="w-full mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Products are not found
            </h1>
        }
    </div>
}

export default ProductList


