'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

const deleteManager = async (managerId: string, formData: FormData) => {
    const res = await fetch(`${API_URL}/managers/${managerId}`, {
        method: "DELETE",
        headers:{...authHeaders()}
    })

    revalidateTag("dashboard:managers")

}

export default deleteManager;