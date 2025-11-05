import { Product } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import Link from "next/link";

const ProductCard = ({product}: {product: Product}) => {
    return (
        <Card className="max-w-[350px] bg-white rounded-xl mb-10">
            <CardHeader>
                {product.productName}
            </CardHeader>
            <Divider/>
            <CardBody>
                <p>
                    Nombre del producto: <b>{product.productName}</b>
                </p>
                <p>
                    Precio del producto: <b>{product.productPrice}</b>
                </p>
                <p>
                     Proveedor: <Link className="font-bold underline" href={`/dashboard/providers/${product.provider.providerId}`}>{product.provider.providerName}</Link>
                </p>
            </CardBody>
        </Card>
    );
}
 
export default ProductCard;