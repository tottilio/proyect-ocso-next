import { TOKEN_NAME } from "@/constants"
import { cookies } from "next/headers"
import { cache } from "react"

export const authHeaders = cache (() => {
    const token = cookies().get(TOKEN_NAME)?.value
    return {
        'Authorization' : `Bearer ${token}`
    }
})