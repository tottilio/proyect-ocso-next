'use client';
import { API_URL } from "@/constants";
import { Button, Input, Spinner } from "@heroui/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {

    const [submitting, setSubmitting] = useState(false);
    const [errorLoading, setErrorLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        setSubmitting(true);
        e.preventDefault();
        const formDatA = new FormData(e.target as HTMLFormElement);
        let authData: any = {}
        authData.userEmail = formDatA.get("userEmail")
        authData.userPassword = formDatA.get("userPassword")
        try {

            const response = await axios.post(`${API_URL}/auth/login`, { ...authData }, { withCredentials: true });
            if (response.status === 201) router.push('/dashboard')
            setSubmitting(false)

        } catch (error) {
            console.log(error)
            setSubmitting(false)
            setErrorLoading(true)
        }
        return;
    }

    return (
        <>
            {errorLoading && // --> Error al cargar en la petición
                <div className="bg-red-600 text-white my-5 px-4 py-2 rounded-md">
                    <h2>Error al cargar</h2>
                    <p>Intentalo de nuevo</p>
                </div>
            }
            <form className="bg-orange-500 px-10 py-2 rounded-md" onSubmit={handleSubmit}>
                <p className="text-2x1 my-4 text-white"> Iniciar sesión</p>
                <div className="flex flex-col gap-2 my-4 items-center">
                    <Input label="Email" name="userEmail" type="email" isRequired={true} size="sm" />
                    <Input label="Contraseña" name="userPassword" type="password" isRequired={true} size="sm" />
                </div>


                <div className='flex flex-col items-center gap-2'>
                    <Button
                        color="primary"
                        type="submit"
                        disabled={submitting}
                        className="bg-blue-700 rounded-lg px-10 py-2 text-white"
                    >
                        {submitting ? "Enviando..." : "Iniciar sesión"}
                    </Button>
                    <p className="text-white">¿No tienes cuenta? <Link href={'/singup'} className='text-red-600 underline'>Registrate</Link></p>
                </div>
            </form>
        </>
    );
}
export default LoginPage;