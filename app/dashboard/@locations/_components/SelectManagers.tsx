'use client'
import { Locations, Managers } from "@/entities";
import { Select, SelectItem } from "@heroui/react";

//📌 To fixes
interface SelectManagerProps {
    managers: Managers[],
    locations: Locations[],
    defaultManager?: string
}


const SelectManager = async ({managers, locations, defaultManager}: SelectManagerProps) => {
    
    const disableKeys = locations
  .map((location: Locations) => {
    if(location.manager?.managerId === defaultManager) {
        return location.manager?.managerId
    }
} )
  .filter(Boolean);

    return (
        <Select defaultSelectedKeys={defaultManager !== undefined ? [defaultManager]: []} label="Manager" className="bg-zinc-100" name="managerId" disabledKeys={disableKeys} aria-label="Manager">
            {managers.map((manager: Managers) => {
                return(
                    <SelectItem className="bg-zinc-300" key={manager.managerId}>
                        {manager.managerFullName}
                    </SelectItem>
                )
            })}
        </Select>
    );
}
 
export default SelectManager;