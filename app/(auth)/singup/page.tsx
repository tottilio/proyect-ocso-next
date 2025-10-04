import { Button, Input } from '@heroui/react';
import Link from 'next/link';

const SingupPage = () => {
    return (
        <div className="bg-orange-500 px-10 py-2 rounded-sm">
            <p className="text-2x1 my-4 text-white"> Registrate</p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label="Email" type="email" isRequired={true} size="sm" />
                <Input label="Contraseña" type="password" isRequired={true} size="sm" />
                <Input label="Repetir contraseña" type="password" isRequired={true} size="sm" />
            </div>

            <div className='flex flex-col items-center gap-2'>
                <Button color="primary" >Registrarse</Button>
                <p>¿Ya cuentas con una cuenta? <Link href={'/login'} className='text-red-600 underline'>Inicia sesión</Link></p>
            </div>
        </div>
    );
}

export default SingupPage