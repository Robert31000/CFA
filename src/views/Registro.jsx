import {Link} from 'react-router-dom'

export default function Registro()
{
    return(
        <>
        <h1 className="text-4xl font-black ">Crea tu cuenta</h1>
        <p> Crea tu cuenta llenando el formulario si eres administrador de la iglesia</p>

     <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">  
        <form >
            <div className="mb-4">
                <label className="text-slate-800 "
                htmlFor="name">
                    Nombre:
                 </label>
                <input 
                    type="text"
                    id="name"
                    className="mt-2 w-full p-3 bg-gray-50"
                    placeholder=" Escribe tu nombre"
                    name="name"
                />
            </div>

            <div className="mb-4">
                <label className="text-slate-800 "
                htmlFor="email">
                    Correo electronico:
                 </label>
                <input 
                    type="text"
                    id="email"
                    className="mt-2 w-full p-3 bg-gray-50"
                    placeholder=" Escribe tu correo electronico"
                    name="email"
                />
            </div>

            <div className="mb-4">
                <label className="text-slate-800 "
                htmlFor="password">
                    Contraseña:
                 </label>
                <input 
                    type="password"
                    id="password"
                    className="mt-2 w-full p-3 bg-gray-50"
                    placeholder=" Escribe tu Contraseña"
                    name="password"
                />
            </div>

            <div className="mb-4">
                <label className="text-slate-800 "
                htmlFor="password_confirmation">
                   Confirmar Contraseña:
                 </label>
                <input 
                    type="password_confirmation"
                    id="password_confirmation"
                    className="mt-2 w-full p-3 bg-gray-50"
                    placeholder="Confirma tu Contraseña"
                    name="password_confirmation"
                />

                <input 
                type="submit"
                value="Crear cuenta" 
                className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                />
            </div>
            <nav className='mt-5'>
                <Link to='/auth/Login' 
                className='text-blue-600'
                >
                    Iniciar sesión
                </Link>

            </nav>

        </form>
     </div>
        </>
    )
}