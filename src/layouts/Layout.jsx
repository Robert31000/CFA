import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Resumen from '../components/Resumen';


//OUTLET TE PERMITE QUE SE MUESTRE TU PAGINA DE INICIO AL PRINCIO

export default function Layout() {
    return (
        <div >

          <div className='flex float-end p-2'>
            <img  className='h-6'src='../img/iconofacebook.svg'/>
            <img  className='h-6'src='../img/iconoinstagram.svg'/>
            <img  className='h-6'src='../img/iconoyoutube.png '/>
          </div>

            <header>
                <h1 className='p-5 font-bold text-center uppercase  text-2xl'>centro familiar de adoración</h1>
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
            className='w-full shadow-xl filter brightness-50	' 
            alt='Imagen principal'

            />
            <Sidebar/>
            
            <Outlet />

            <Resumen/>
        
        </div>

    )
}

