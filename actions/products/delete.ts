'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const deleteProduct = async (productId:string, formData: FormData) => {
    const res = await fetch(`${API_URL}/products/${productId}`, {
        method: 'DELETE',
        headers:{...authHeaders(), 'Content-type': 'application/json'}
    })

    if ( res.status === 200) {
        revalidateTag("dashboard:products")
        redirect("/dashboard/products")
    }
}

export default deleteProduct;