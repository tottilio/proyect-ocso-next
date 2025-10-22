import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import ProviderCard from "../_components/ProviderCard";
import { Product, Provider } from "@/entities";
import ProductCard from "./_components/ProductCard";
import Link from "next/link";

const ProviderPage = async ({params}: {params:{id:number}}) => {

    const provider: Provider = await (await fetch(`${API_URL}/providers/${params.id}`, {
        headers:{...authHeaders()},
        
    })).json()

    return (
        <div className="flex flex-col pl-10 gap-10 h-[90vh] pt-10">
            <ProviderCard provider={provider}/>
            <div className="h-1 flex flex-row bg-orange-900 w-[80vw] "/>
            <div className="flex flex-wrap gap-10">
            {provider.products.map((product: Product) => {
                return(
                    <Link className="hover:scale-110 transition-all" href={{pathname: `/dashboard/products/${product.productId}`}} key={product.productId}>
                        <ProductCard product={product} />
                    </Link>
                )
            })}
            </div>
        </div>
    )
}

export default ProviderPage;