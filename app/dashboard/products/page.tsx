import createProduct from "@/actions/products/create";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@heroui/react";
import { LuDollarSign } from "react-icons/lu";
import SelectProvider from "./_components/SelectProvider";

const ProductsPage = async () => {

    const resProviders = await fetch(`${API_URL}/providers`, {
        headers: { ...authHeaders() },
    })

    const providers = await resProviders.json()

    return (
        <form className=" pt-10 px-10 justify-center" action={createProduct}>
            <div className="bg-orange-600  flex flex-col p-10 rounded-md gap-6">
                <h1 className="text-2xl font-bold">Crear producto</h1>
                <Input label="Nombre" name="productName" />
                <Input label="Precio" endContent={<LuDollarSign size={"20"} />} name="productPrice" />
                <Input label="Num. de Sellos" name="productSeal" />
                <SelectProvider providers={providers} />
                <Button type="submit" className="bg-blue-600">
                    Crear producto
                </Button>
            </div>
        </form>
    );
}

export default ProductsPage;