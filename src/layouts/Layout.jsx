import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Resumen from '../components/Resumen';


//OUTLET TE PERMITE QUE SE MUESTRE TU PAGINA DE INICIO AL PRINCIO

export default function Layout() {
    return (
        <div className=' '>

          

            <header>
                <h1 className='p-5 font-bold text-center  uppercase '>centro familiar de adoración</h1>
            </header>

            <nav className='flex md:flex-row justify-between bg-cyan-500 text-w'> 
               <a className='p-2 text-white font-black' href='#'>Inicio</a>
               <a className='p-2 text-white font-black' href='#'>Red Adolecentes</a>
               <a className='p-2 text-white font-black' href='#'>Red Jovenes</a>
               <a className='p-2 text-white font-black' href='#'>Noticias</a>
               <a className='p-2 text-white font-black' href='#'>Contactanos</a>



            </nav>

            <img 
            src='../img/principal.jpg'
            className='w-full shadow-md' 

            />
            <Sidebar/>
            
            <Outlet />

            <Resumen/>
        
        </div>

    )
}

