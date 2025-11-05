'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

const createProduct = async (formData: FormData) => {
    let product: any = {}
    for(const key of formData.keys()){
        if(key.includes("$ACTION_ID")){
            product[key] = formData.get(key)
        }
    }
    product.price = +product.price
    product.countSeal = +product.countSeal
    const res = await fetch(`${API_URL}/products`, {
        method: 'POST',
        body: JSON.stringify(product),
        headers:{...authHeaders(), 'Content-type': 'application/json'}
    })

    if ( res.status === 201) revalidateTag("dashboard:products")

}

export default createProduct;