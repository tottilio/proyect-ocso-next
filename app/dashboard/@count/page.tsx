import axios from "axios";
import { TOKEN_NAME } from '@/constants'
import { cookies } from 'next/headers'

const CountPage = async () => {
    const userCookies = cookies()
    const token = userCookies.get(TOKEN_NAME)?.value
    const countLocation = await axios.get("http://localhost:4000/locations", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const cantidad = countLocation?.data?.length
    return (
        `Hay ${cantidad} tienda${cantidad > 1 ? "s": ""}`
    );
}
 
export default CountPage;