'use client'
import { Locations } from "@/entities";
import { Select, SelectItem } from "@heroui/react";

const SelectStore = ({stores, defaultStore}: {stores:Locations[], defaultStore?: number}) => {

    const disableStores = stores.map((store:Locations) => {
            if(store.manager !== undefined  && store.locationId !== defaultStore){
                return String(store.locationId)
            }
    }).filter((storeId) => storeId !== undefined)
    return (
        <Select label="Tienda" name="location" defaultSelectedKeys={defaultStore?[String(defaultStore)]:undefined} disabledKeys={disableStores}>
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
 
export default SelectStore;