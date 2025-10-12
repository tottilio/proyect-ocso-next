'use server'
import { TOKEN_NAME } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"
import { cookies } from "next/headers"
import { API_URL } from "@/constants"
import { revalidateTag } from "next/cache"

export const createLocation = async (formData: FormData) => {
  const token = cookies().get(TOKEN_NAME)?.value

  const locationName = String(formData.get('locationName') || '')
  const locationAdress = String(formData.get('locationAddress') || '') // CUIDADO no es Address -> Adress
  const locationLat = Number(formData.get('locationLat'))
  const locationLong = Number(formData.get('locationLong'))

  const payload = {
    locationName,
    locationAdress,
    locationLatLng: [locationLat, locationLong],
  }

  console.log("📦 Enviando payload:", payload)

  try {
    const response = await fetch(`${API_URL}/locations`,{ method: 'POST' , body: JSON.stringify(payload) , headers:{...authHeaders()} })
    console.log("✅ Location creada:", response.json)
    if(response.status === 201) return revalidateTag("dashboard:location")
    
  } catch (error: any) {
    console.error("❌ Error al crear la ubicación:", error.response?.data || error.message)
  }
}