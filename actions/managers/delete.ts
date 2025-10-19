'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const deleteManager = async (managerId: string, formData: FormData) => {
    const res = await fetch(`${API_URL}/managers/${managerId}`, {
        method: "DELETE",
        headers:{...authHeaders()}
    })

    if(res.status === 200) {
        revalidateTag("dashboard:managers")
        redirect("/dashboard/managers")
    }
}

export default deleteManager;