'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

const createProvider = async (formData: FormData) => {
    let provider: any = {}
    for(const key of formData.keys()){
        provider[key] = formData.get(key)
    }
    const res = await fetch(`${API_URL}/providers`, {
        method: 'POST',
        body: JSON.stringify(provider),
        headers:{...authHeaders(), 'Content-type': 'application/json' }
    })

    if ( res.status === 201) revalidateTag("dashboard:providers")

}

export default createProvider;