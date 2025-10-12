'use client'
import { Locations } from "@/entities";
import { Divider, Select, SelectItem } from "@heroui/react";
import { useRouter } from "next/navigation";

const SelectLocation = ({locations, store}: {locations:Locations[], store: string | string[] | undefined}) => {

    const router = useRouter();
    
    return (
        <Select 
            placeholder="Selecciona una tienda"
            label="Tienda" 
            classNames={{
                mainWrapper: "hover:ring-2 ring-red-300 rounded-xl transition-all bg-gray-200"
            }}
            selectedKeys={store ? store : "0"}
            onChange={((e) => {
                if (e.target.value === "0" || e.target.value === "") {
                     router.push("/dashboard")
                } else {
                    router.push(`/dashboard?store=${e.target.value}`)
                }
            })}
        >
            {locations.map((location: Locations) => {
                return (
                    <SelectItem className="bg-slate-100 py-1" key={location.locationId} id={location.locationId.toString()}>
                        {location.locationName}
                        <Divider/>
                    </SelectItem>
                )
            })}
        </Select>
    );
}

export default SelectLocation;