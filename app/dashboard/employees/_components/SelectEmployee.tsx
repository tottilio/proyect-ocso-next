'use client'
import { Locations } from "@/entities";
import { Select, SelectItem } from "@heroui/react";

const SelectLocations = ({stores, defaultStore}: {stores:Locations[], defaultStore?: number}) => {
    return (
        <Select label="Tienda" name="location" defaultSelectedKeys={defaultStore?[String(defaultStore)]:undefined}>
            {
                stores.map((store: Locations) => {
                    return  (
                        <SelectItem key={String(store.locationId)}>{store.locationName}</SelectItem>
                    )
                })
            }
        </Select>
    );
}
 
export default SelectLocations;