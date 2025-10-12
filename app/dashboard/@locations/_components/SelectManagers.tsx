'use client'
import { Managers } from "@/entities";
import { Select, SelectItem } from "@heroui/react";

const SelectManager = async ({managers}: {managers: Managers[]}) => {
    

    return (
        <Select name="manager" aria-label="Manager">
            {managers.map((manager: Managers) => {
                return(
                    <SelectItem key={manager.managerId}>
                        {manager.managerFullName}
                    </SelectItem>
                )
            })}
        </Select>
    );
}
 
export default SelectManager;