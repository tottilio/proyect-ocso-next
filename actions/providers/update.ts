'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

const updateProvider = async (providerid: string,formData: FormData) => {
    let provider: any = {}
    for(const key of formData.keys()){
        provider[key] = formData.get(key)
    }
    const res = await fetch(`${API_URL}/providers/${providerid}`, {
        method: 'PATCH',
        body: JSON.stringify(provider),
        headers:{...authHeaders(), 'Content-type': 'application/json' },
        
    })

    if ( res.status === 200) revalidateTag("dashboard:providers")

}

export default updateProvider;