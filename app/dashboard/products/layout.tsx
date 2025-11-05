import { API_URL } from "@/constants";
import { Product } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import FilteredCards from "./_components/FilteredCards";
import { ReactNode } from "react";

const LayoutProducts = async ({children}: {children:ReactNode}) => {

    const resProducts = await fetch(`${API_URL}/product`, {
        method: 'GET',
        headers: { ...authHeaders() },
        next: {
            tags: ["dashboard:product"],
        }
    })
    const products: Product[] = await resProducts.json();

    const responseProviders = await fetch(`${API_URL}/providers`, {
        headers: {...authHeaders()},
        next:{
            tags:["dashboard:providers"]
        }
    }) 
    const providers = await responseProviders.json();
    return (
        <div className="h-[90vh] w-full flex flex-row">
            <div className="w-3/12">
                <FilteredCards products={products} providers={providers} />
            </div>
            <div className="w-6/12 ">
                {children}
            </div>
        </div>
    );
}

export default LayoutProducts;