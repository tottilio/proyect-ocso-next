'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { count } from "console";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const updateProduct = async (productId:string, formData: FormData) => {
    let product: any = {}

    for(const key of formData.keys()){
        if(!key.includes("ACTION")){
            product[key] = formData.get(key)
        }
    }
    product.price = +product.price;
    product.countSeal = +product.countSeal;

    const res = await fetch(`${API_URL}/products/${productId}`, {
        method: "PATCH",
        body: JSON.stringify(product),
        headers:{...authHeaders(), 'Content-type': "application/json"}
    })
    const data = await res .json
    if ( res.status === 200) {
        revalidateTag("dashboard:products")
        revalidateTag(`dashboard:products:${productId}`)
    }
}

export default updateProduct;