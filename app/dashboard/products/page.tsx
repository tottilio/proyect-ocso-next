import { API_URL } from "@/constants";
import { Product } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import FilteredCards from "./_components/FilteredCards";

const ProductsPage = async () => {

    const res = await fetch(`${API_URL}/product`, {
        method: 'GET',
        headers: { ...authHeaders() },
        next: {
            tags: ["dashboard:product"],
        }
    })

    const products: Product[] = await res.json();
    return (
        <div className="h-[90vh] w-full ">
            <div className="w-3/12">
                <FilteredCards products={products} />
            </div>
        </div>
    );
}

export default ProductsPage;