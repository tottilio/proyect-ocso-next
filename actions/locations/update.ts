'use server'
import { authHeaders } from "@/helpers/authHeaders"
import { API_URL } from "@/constants"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import { Locations } from "@/entities"

export const updateLocation = async (store: string, formData: FormData) => {

  const locationName = String(formData.get("locationName") || "");
  const locationAdress = String(formData.get("locationAddress") || ""); // CUIDADO: Adress
  const locationLat = Number(formData.get("locationLat"));
  const locationLong = Number(formData.get("locationLong"));

  const payload = {
    locationName,
    locationAdress,
    locationLatLng: [locationLat, locationLong],
  };

  console.log("📦 Enviando payload:", payload);

  try {
    const response = await fetch(`${API_URL}/locations/${store}`, {
      method: "PATCH",
      credentials: "include",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        ...authHeaders(),
      },
    });

    const {locationId}: Locations = await response.json(); 

    if (response.status === 200) {
      revalidateTag("dashboard:location");
      revalidateTag(`dashboard:location:${store}`);
      redirect(`/dashboard?store=${locationId}`);
    }

  } catch (error: any) {
    console.error("❌ Error al crear la ubicación:", error.message);
  }
}