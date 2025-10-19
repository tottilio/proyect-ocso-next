'use client'
import { Locations } from "@/entities";
import { Select, SelectItem } from "@heroui/react";

const SelectStore = ({stores, defaultStore}: {stores:Locations[], defaultStore: number}) => {
    const disableStores = stores.map((store:Locations) => {
            if(store.manager !== undefined){
                return String(store.locationId)
            }
    }).filter((storeId) => storeId !== undefined)
    return (
        <Select defaultSelectedKeys={defaultStore?[defaultStore]:undefined} disabledKeys={disableStores}>
            {
                stores.map((store: Locations) => {
                    return  (
                        <SelectItem key={store.locationId}>{store.locationName}</SelectItem>
                    )
                })
            }
        </Select>
    );
}
 
export default SelectStore;