import { Link } from 'react-router-dom'

export default function Login()
{
    return(
        <>
        <h1 className="text-4xl font-black ">Iniciar sesión</h1>
        <p> Crea tu cuenta llenando el formulario</p>

     <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">  
        <form >
           

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

           

                <input 
                type="submit"
                value="Iniciar sesión" 
                className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                />

                <nav className="mt-5">
                    <Link to="/auth/registro"
                    className="text-blue-600"
                    > 
                    ¿No tienes una cuenta? Crear cuenta

                    </Link>

                </nav>
        </form>
     </div>

        </>
    )
}