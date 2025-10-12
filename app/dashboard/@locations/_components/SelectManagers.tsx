'use client'
import { Locations, Managers } from "@/entities";
import { Select, SelectItem } from "@heroui/react";

const SelectManager = async ({managers, locations}: {managers: Managers[], locations: Locations[]}) => {
    
    const disableKeys = locations.map((location: Locations) => {
        return location.manager?.managerId 

    }).filter((managerId) => managerId === undefined)
    return (
        <Select label="Manager" className="bg-zinc-100" name="managerId" disabledKeys={disableKeys} aria-label="Manager">
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