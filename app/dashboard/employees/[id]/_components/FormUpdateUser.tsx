'use client'
import Update from "@/actions/users/update";
import { Employee, User } from "@/entities";
import { Button, Input } from "@heroui/react";
import { generate } from "generate-password";
import { useState } from "react";
import { LuEye } from "react-icons/lu";

const FormUpdateUser = ({user} : {user: User}) => {
    
    const [password, setPassword] = useState<string>();
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const {userId} = user;
    const updateUserById = Update.bind(null,userId);
    return (
        <form action={updateUserById} className="py-10 flex flex-col gap-2">
            <h1 className="text-white text-center">Actualizar usuario</h1>
            <Input defaultValue={user.userEmail} name="userEmail" label="Correo" />
            <Input value={password} type={isVisible ? "text" : "password"} name="userPassword" label="Contraseña" endContent={<Button type="button" onMouseUp={() => setIsVisible(false)} onMouseDown={() => setIsVisible(true)}><LuEye size="30"/></Button> }/>
            <Button onPress={() => {
                setPassword(generate({
                    length:10
                }))
            }} className="bg-orange-600">Generar contraseña</Button>
            <Button type="submit" className="bg-blue-600">Actualizar usuario</Button>
        </form>
    );
}
 
export default FormUpdateUser;