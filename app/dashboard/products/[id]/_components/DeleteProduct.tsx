import deleteProduct from "@/actions/products/delete";
import { Button } from "@heroui/react";
import { LuTrash } from "react-icons/lu";

const DeleteProduct = ({productId}: {productId:string}) => {

    const deleteProductById = deleteProduct.bind(null, productId);

    return (
        <form className="w-full flex" action={deleteProductById}> 
            <Button type="submit" className="bg-red-600">
                <LuTrash size={'20'} />
            </Button>
        </form>
    );
}
 
export default DeleteProduct;