import { API_URL } from "@/constants";
import { Provider } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import ProviderCard from "./_components/ProviderCard";
import Link from "next/link";
import { LuPlus } from "react-icons/lu";


const ProvidersPage = async () => {

    const res = await fetch(`${API_URL}/providers`, {
        headers: { ...authHeaders() }
    });
    const providers: Provider[] = await res.json()
    return (
        <div className="flex flex-grow-0 flex-col h-[90vh] items-end w-full px-10 pt-10">
            <button className="w-fit bg-blue-500 text-white p-2 rounded-md  justify-center"><LuPlus size={'20'} /></button>
            <div className="w-full flex flex-row flex-grow-0 py-20 gap-14 flex-wrap" >
                {providers.map((provider: Provider) => (
                    <Link className="hover:scale-110 transition-transform " href={{ pathname: `/dashboard/providers/${provider.providerId}` }}>
                        <ProviderCard provider={provider} key={provider.providerId} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProvidersPage;