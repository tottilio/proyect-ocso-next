'use client';
import { API_URL } from "@/constants";
import { Button, Input } from "@heroui/react";
import axios from "axios";
import Link from "next/link";

const LoginPage = () => {

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formDatA = new FormData(e.target);
        let authData: any ={}
        authData.userEmail = formDatA.get("userEmail")
        authData.userPassword = formDatA.get("userPassword")
        const {data} = await axios.post(`${API_URL}/auth/login`, {...authData});
        console.log(data)
        return;
    }

    return (
        <form className="bg-orange-500 px-10 py-2 rounded-sm" onSubmit={handleSubmit}>
            <p className="text-2x1 my-4 text-white"> Iniciar sesión</p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label="Email" name="userEmail" type="email" isRequired={true} size="sm" />
                <Input label="Contraseña" name="userPassword" type="password" isRequired={true} size="sm" />
            </div>

            <div className='flex flex-col items-center gap-2'>
                <Button color="primary" type="submit" >Iniciar sesión</Button>
                <p>¿No tienes cuenta? <Link href={'/singup'} className='text-red-600 underline'>Registrate</Link></p>
            </div>
        </form>
    );
}
export default LoginPage;