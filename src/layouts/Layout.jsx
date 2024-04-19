import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Resumen from '../components/Resumen';


//OUTLET TE PERMITE QUE SE MUESTRE TU PAGINA DE INICIO AL PRINCIO

export default function Layout() {
    return (
        <div >

       <div className='flex float-end p-2'>
        <a href='https://www.facebook.com/cfa.org.bo'> <img  className='h-6 p-1'  src='../img/iconofacebook.svg'/> </a>
          <a href='https://www.instagram.com/cfa.org.bo/'>  <img  className='h-6 p-1'src='../img/iconoinstagram.svg'/> </a>
           <a href='https://www.youtube.com/@cfa-bo'><img  className='h-6 p-1'src='../img/iconoyoutube.png '/> </a> 
          </div>

          

     
            <header>
                <h1 className='p-5 font-black text-center uppercase  text-2xl'>Centro Familia De Adoración</h1>
            </header>

            <nav className='flex md:flex-row justify-between bg-cyan-500 text-w '> 
               <a className='p-2 md:hover:bg-yellow-500 text-white font-black' href='#'>Inicio</a>
               <a className='p-2 md:hover:bg-yellow-500 text-white font-black' href='#'>Red Adolecentes</a>
               <a className='p-2 md:hover:bg-yellow-500 text-white font-black' href='#'>Red Jovenes</a>
               <a className='p-2 md:hover:bg-yellow-500 text-white font-black' href='#'>Noticias</a>
               <a className='p-2 md:hover:bg-yellow-500 text-white font-black' href='#'>Contactanos</a>
            </nav>

       <div>
       <img 
            src='../img/principal.jpg'
            className='w-full shadow-xl filter brightness-50	' 
            alt='Imagen principal'
            
            />
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                   <p className="font-bold italic text-white text-2xl capitalize">Asambleas de Dios de Bolivia</p>
                   <p className="text-amber-400 text-2xl font-bold italic">Una iglesia para toda la familia.</p>
                   <p className="text-amber-400 text-2xl font-bold italic">Sirviendo a Dios y a Bolivia.</p>
</div>

       </div>
         

    

        <div className='p-5'>
            <video className='w-full h-80 shadow-xl filter brightness-50	' autoPlay muted loop>
            <source src='../video/intro.mp4' type='video/mp4' ></source>
          </video>

          </div>
            <Sidebar/>
            
            <Outlet />

            <Resumen/>
        
        </div>

    )
}

