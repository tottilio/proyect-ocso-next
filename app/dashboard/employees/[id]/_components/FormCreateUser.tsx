'use client'
import registerEmployee from "@/actions/users/register-employee";
import { Employee } from "@/entities";
import { Button, Input } from "@heroui/react";
import { useState } from "react";
import {generate} from "generate-password"
import { LuEye } from "react-icons/lu";

const FormCreateUser = ({employee} : {employee: Employee}) => {

    const [password, setPassword] = useState<string>();
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const {employeeId} = employee;
    const registerEmployeeById = registerEmployee.bind(null,employeeId);

    return (
        <form action={registerEmployeeById} className="py-10 flex flex-col gap-2">
            <h1 className="text-white text-center">Crear usuario</h1>
            <Input name="userEmail" label="Correo" />
            <Input value={password} type={isVisible ? "text" : "password"} name="userPassword" label="Contraseña" endContent={<Button type="button" onMouseUp={() => setIsVisible(false)} onMouseDown={() => setIsVisible(true)}><LuEye size="30"/></Button> }/>
            <Button onPress={() => {
                setPassword(generate({
                    length:10
                }))
            }} className="bg-orange-600">Generar contraseña</Button>
            <Button type="submit" className="bg-blue-600">Crear usuario</Button>
        </form>
    );
}
 
export default FormCreateUser;