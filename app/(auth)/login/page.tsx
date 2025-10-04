import { Button, Input } from "@heroui/react";
import Link from "next/link";

const LoginPage = () => {
    return (
        <div className="bg-orange-500 px-10 py-2 rounded-sm">
            <p className="text-2x1 my-4 text-white"> Iniciar sesión</p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label="Email" type="email" isRequired={true} size="sm" />
                <Input label="Contraseña" type="password" isRequired={true} size="sm" />
            </div>

            <div className='flex flex-col items-center gap-2'>
                <Button color="primary" >Iniciar sesión</Button>
                <p>¿No tienes cuenta? <Link href={'/singup'} className='text-red-600 underline'>Registrate</Link></p>
            </div>
        </div>
    );
}
export default LoginPage;