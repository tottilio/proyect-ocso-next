'use server'
import { TOKEN_NAME } from "@/constants"
import axios from "axios"
import { cookies } from "next/headers"
import { API_URL } from "@/constants"

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
    const response = await axios.post(`${API_URL}/locations`, payload, {
      headers: { Authorization: `Bearer ${token}` }
    })
    console.log("✅ Location creada:", response.data)
  } catch (error: any) {
    console.error("❌ Error al crear la ubicación:", error.response?.data || error.message)
  }
}