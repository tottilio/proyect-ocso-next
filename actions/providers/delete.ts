'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const deleteProvider = async (providerId: string, formData: FormData) => {
    const res = await fetch(`${API_URL}/providers/${providerId}`, {
        method: "DELETE",
        headers:{...authHeaders()}
    })

    if(res.status === 200) {
        revalidateTag("dashboard:providers");
        redirect("/dashboard/providers");
    }
}

export default deleteProvider;