import React, {useState} from "react";
import Loader from "./Loader";


export type ProductProps = {
    product: {
        productdisplayname: string
        product_img: string
        basecolour: string
        season: string
        year: number
    }
}

const ProductView = (props: ProductProps) => {

    const {
        productdisplayname,
        product_img,
        basecolour,
        season,
        year,
    } = props.product;

    const [isImgLoading, setImgStatus] = useState(true)

    return <a href="#"
              className="max-w-xs mx-4 mb-5 max-w-xs border-1 py-2 pt-0 border border-gray-200 rounded-lg
               dark:bg-gray-700 dark:border-gray-600 w-full overflow-hidden">
        <div
            className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7border-b">
            <img
                onLoad={() => {
                    setImgStatus(false)
                }}
                src={product_img}
                alt={productdisplayname}
                className="h-full w-full object-contain object-center group-hover:opacity-75"
            />
        </div>

        <div className="px-2">
            <h3 className="mt-4 text-sm text-gray-700">{productdisplayname}</h3>
            <p className="mt-1 text-xs font-light text-gray-900"> Collection: {season} {year}</p>
            <p className="mt-1 text-xs font-light text-gray-900">Color: {basecolour}</p>
        </div>
    </a>
}

export default ProductView