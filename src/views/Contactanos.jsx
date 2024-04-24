import {} from 'react-router-dom'
import { Link } from 'react-router-dom'
import 'animate.css/animate.min.css';

export default function Contactanos ()
{
    return(
        <>


<div className='flex md:float-end p-4 text-1xl font-serif '>
 {/*      <Link className='p-2 h-5' to='/Inicio'><img  className='h-6 p-1'src='../img/images.jpeg '/> </Link>  */} 
        <a href='https://www.facebook.com/profile.php?id=100081189810511'> <img  className='inline-block h-6 w-6 rounded-full ring-2 ring-white'  src='../img/iconofacebook.svg'/> </a>
          <a href='https://www.instagram.com/red_de_jovenescfa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>  <img  className='inline-block h-6 w-6 rounded-full ring-2 ring-white 'src='../img/iconoinstagram.svg'/> </a>
           <a href='https://www.youtube.com/@reddejovenescfa3721'><img  className='inline-block h-6 w-6 rounded-full ring-2 ring-white 'src='../img/iconoyoutube.png '/> </a> 
      
          </div>
     
            <header>
                <h1 className='p-5 font-black text-center uppercase  text-2xl  '>CONTACTANOS</h1>
            </header>

            <nav className='flex flex-col md:flex-row md:justify-between bg-cyan-500 m-auto '> 
               <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black ' to='/Inicio'>Inicio</Link>
           {/* <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='#'>Red Adolecentes</Link>   */}
               <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='/Red_joven'>Red Jovenes</Link>
               <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='#'>Noticias</Link>
               <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='/Contactanos'>Contactanos</Link>
            </nav>


            <img 
            src='../img/contactoPrin.jpg'
            className='w-full shadow-xl filter  	' 
            alt='Imagen principal'
            
            /> 


            <h3 className='text-center uppercase font-black p-5 text-2xl'>Contacto</h3>

<div class="flex flex-col md:flex-row items-center  ">
        <div className='p-5 '>
            <video className='w-full h-screen  shadow-xl filter 	' autoPlay muted loop>
            <source src='../video/bienvenida.mp4' type='video/mp4' ></source>
          </video>
       </div>


  
<form class=" mt-8 px-4 md:px-0 md:w-1/2 md:mx-auto ">
            <div class="mb-4">
                <label for="nombre" class="block  mb-2">Nombre</label>
                <input 
                    class="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
                    type="text" 
                    placeholder="Tu Nombre" 
                    id="nombre"
               />
            </div>
            <div class="mb-4">
                <label for="email" class="block mb-2">E-mail</label>
                <input 
                    class="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
                    type="email" 
                    placeholder="Tu E-mail" 
                    id="email"
                />
            </div>
            <div class="mb-4">
                <label for="mensaje" class="block mb-2">Mensaje</label>
                <textarea 
                    class="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black h-32 resize-none"
                    id="mensaje"
                ></textarea>
            </div>

            <div class="mb-4">
                <input type="submit" value="Enviar" class="bg-black text-white py-2 px-4 rounded cursor-pointer" />
            </div>
        </form>

        </div>

        <footer className='flex flex-col md:flex-row justify-center md:justify-between items-center bg-slate-800 p-5'>
    <div className='flex items-center'>
        <div className=''>
            <a href='https://www.facebook.com/profile.php?id=100081189810511'> <img className='inline-block h-6 w-6 rounded-full ring-2 ring-white ' src='../img/iconofacebook.svg' alt='Facebook' /> </a>
            <a href='https://www.instagram.com/red_de_jovenescfa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='> <img className='inline-block h-6 w-6 rounded-full ring-2 ring-white' src='../img/iconoinstagram.svg' alt='Instagram' /> </a>
            <a href='https://www.youtube.com/@reddejovenescfa3721'><img className='inline-block h-6 w-6 rounded-full ring-2 ring-white' src='../img/iconoyoutube.png' alt='YouTube' /> </a>
        </div>
        <Link to="/Inicio" className='p-2 mr-6 font-black uppercase text-white text-2xl'>Ministerio juvenil CFA</Link>
    </div>

    

    <nav className='flex flex-col md:flex-row md:items-center'>
        <Link className='p-2 md:p-4  text-white font-black' to='/Inicio'>Inicio</Link>
        <Link className='p-2 md:p-4  text-white font-black' to='/Red_joven'>Red Jovenes</Link>
        <Link className='p-2 md:p-4  text-white font-black' to='#'>Noticias</Link>
        <Link className='p-2 md:p-4  text-white font-black' to='#'>Contactanos</Link>
    </nav>
</footer>





        </>
    )
}