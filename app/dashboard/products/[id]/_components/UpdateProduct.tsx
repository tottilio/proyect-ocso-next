import updateProduct from "@/actions/products/update";
import { Product, Provider } from "@/entities";
import { Button, Input } from "@heroui/react";
import SelectProvider from "../../_components/SelectProvider";
import DeleteProduct from "./DeleteProduct";
import { LuCheck } from "react-icons/lu";

const UpdateProduct = ({ product, providers }: { product: Product, providers: Provider[] }) => {

    const { productId } = product
    const updateProductById = updateProduct.bind(null, productId);

    return (
        <form action={updateProductById} className="flex flex-col p-10 gap-4">
            <Input name="productName" label="Producto" defaultValue={product.productName} />
            <Input name="countSeal" label="Precio" defaultValue={String(product.productPrice)} />
            <Input name="price" label="Num. de Sellos" defaultValue={String(product.productSeal)} />
            <SelectProvider providers={providers} defaultProvider={product.provider.providerId} />
            <div className="flex flex-row  flex-grow-0"> 
                <Button type="submit" className="bg-blue-600">
                    <LuCheck size={'20'} />
                </Button>
            </div>
        </form>
    );
}

export default UpdateProduct;