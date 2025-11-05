import { API_URL } from "@/constants";
import ProductCard from "../_components/ProductCard";
import { authHeaders } from "@/helpers/authHeaders";
import { Product, Provider } from "@/entities";
import UpdateProduct from "./_components/UpdateProduct";
import DeleteProduct from "./_components/DeleteProduct";

const ProductPage = async ({ params }: { params: { id: string } }) => {

    const resProduct = await fetch(`${API_URL}/products/${params.id}`, {
        headers: { ...authHeaders() },
        next: {
            tags: [`dashboard:products:${params.id}`]
        }
    })
    const product: Product = await resProduct.json()

    const resProviders = await fetch(`${API_URL}/providers`, {
        headers: { ...authHeaders() }
    });
    const providers: Provider[] = await resProviders.json()

    return (
        <div className="w-full">
            <div className="bg-orange-600">
                <h1 className="text-center w-full font-bold text-white text-2xl py-2">{product.productName}</h1>
                <h2 className="text-center font-bold text-white text-xl" >{product.productSeal}</h2>
                <h2 className="text-center text-md font-bold text-white py-2">{product.productPrice}</h2>
            </div>
            <UpdateProduct product={product} providers={providers} />
            <div className="pl-10">
                <DeleteProduct productId={product.productId} />
            </div>
        </div>
    )
}

export default ProductPage;