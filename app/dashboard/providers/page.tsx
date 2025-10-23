import { API_URL } from "@/constants";
import { Provider } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import ProviderCard from "./_components/ProviderCard";
import Link from "next/link";
import FormCreateProvider from "./_components/FormCreateProvider";


const ProvidersPage = async () => {

    const res = await fetch(`${API_URL}/providers`, {
        headers: { ...authHeaders() },
        next:{tags:["dashboard:providers"]}
    });
    const providers: Provider[] = await res.json()
    return (
        <div className="flex flex-grow-0 flex-col h-[90vh] items-end w-full px-10 pt-10">
            {/* <CreateProvider> */}
            <FormCreateProvider/>
            {/* </CreateProvider> */}
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