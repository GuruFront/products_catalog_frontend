import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

export type ProductProps = {
    product: {
        productdisplayname: string
        product_img: string
        basecolour: string
        season: string
        year: number
        images: { product_img: string }[]
    }
}

const ProductView = (props: ProductProps) => {

    const {
        productdisplayname,
        images,
        basecolour,
        season,
        year,
    } = props.product;

    const [isImgLoading, setImgStatus] = useState(true)

    return <Card elevation={1}>
        <CardMedia
            sx={{height: 229, display: isImgLoading ? 'none' : 'block', objectFit: 'contain'}}
            component='img'
            onLoad={(e) => {
                setImgStatus(false)
            }}
            image={images[0]?.product_img}
            title="green iguana"
        />

        {isImgLoading ? <Skeleton variant="rectangular" animation="wave" width={'100%'} height={229}/> : null}

        <CardContent sx={{borderTop: '1px solid', borderColor: 'divider', pb: 1}}>
            <Typography gutterBottom component="div" sx={{height: 45, overflow: 'hidden'}}>
                {productdisplayname}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{height: 45, overflow: 'hidden'}}>
                Collection: {season} {year}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{height: 45, overflow: 'hidden', pb: 0}}>
                Color: {basecolour}
            </Typography>
        </CardContent>
    </Card>
}

export default ProductView