'use client'
import { Provider } from "@/entities";
import { Select, SelectItem } from "@heroui/react";

const SelectProvider = ({providers, defaultProvider}: {providers: Provider[],defaultProvider?: string}) => {
    return (
        <Select defaultSelectedKeys={ defaultProvider ? [defaultProvider] : undefined} label="provedor"name="provider">
            {providers.map((provider) => {
                return (
                    <SelectItem key={provider.providerId}>
                        {provider.providerName}
                    </SelectItem>
                )
            })
            }
        </Select>
    );
}
 
export default SelectProvider;