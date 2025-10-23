import { Product } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

const ProductCard = ({product}: {product: Product}) => {
    return (
        <Card className="hover:scale-110 max-w-[350px] bg-white rounded-xl">
            <CardHeader>
                {product.productName}
            </CardHeader>
            <Divider/>
            <CardBody>
                <p>
                    Nombre del producto:<b> {product.productName}</b>
                </p>
                <p>
                    Precio del producto:<b> {product.productPrice}</b>
                </p>
            </CardBody>
        </Card>
    );
}
 
export default ProductCard;