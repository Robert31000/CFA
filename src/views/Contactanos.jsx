import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css/animate.min.css';

export default function Contactanos() {
    return (
        <>
        <div className='bg-gray-100'>

        <div className='flex md:float-end p-4 text-1xl font-serif '>
 {/*      <Link className='p-2 h-5' to='/Inicio'><img  className='h-6 p-1'src='../img/images.jpeg '/> </Link>  */} 
        <a href='https://www.facebook.com/profile.php?id=100081189810511'> <img  className='inline-block h-6 w-6 rounded-full ring-2 ring-white'  src='../img/iconofacebook.svg'/> </a>
          <a href='https://www.instagram.com/red_de_jovenescfa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>  <img  className='inline-block h-6 w-6 rounded-full ring-2 ring-white 'src='../img/iconoinstagram.svg'/> </a>
           <a href='https://www.youtube.com/@reddejovenescfa3721'><img  className='inline-block h-6 w-6 rounded-full ring-2 ring-white 'src='../img/iconoyoutube.png '/> </a> 
       </div>


            <header>
                <h1 className='p-5 font-black text-center uppercase text-2xl'>CONTACTANOS</h1>
            </header>
            
            <nav className='flex flex-col md:flex-row md:justify-between md:text-center items-center bg-cyan-500 m-auto'>
                <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='/Inicio'>Inicio</Link>
                <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='/Red_joven'>Red Jovenes</Link>
                <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='#'>Noticias</Link>
                <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='/Contactanos'>Contactanos</Link>
            </nav>


            <img
                src='../img/contactoPrin.jpg'
                className='w-full filter brightness-50'
                alt='Imagen principal'
            />
            
         <div className="absolute md:top-1/2 left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:text-center">
                <p className="md:text-1xl font-bold italic text-white mt-auto">  </p>
                <div className="flex items-center justify-center mt-4">
                 {/*   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="88" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFC107" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="11" r="3" />
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                    </svg>  */}
                    <p className="text-white md:text-1xl capitalize ml-auto">  </p>
                </div>
             {/*   <a className='text-white font-bold bg-teal-600 p-4 md:hover:bg-yellow-500 rounded-lg mt-8' href='https://wa.me/71666743'>  </a> */}
         </div>

         
            <h3 className='text-center uppercase font-black p-5 text-2xl'>Contacto</h3>

            <div class="flex flex-col md:flex-row items-center ">
                <div className='p-5 '>
                    <video className='w-full h-auto md:h-screen shadow-xl filter' autoPlay muted loop>
                        <source src='../video/bienvenida.mp4' type='video/mp4'></source>
                    </video>
                </div>

                <form class="mt-8 px-4 md:px-0 md:w-1/2 md:mx-auto">
                    <div class="mb-4">
                        <label for="nombre" class="block mb-2">Nombre</label>
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
                        <a href='https://www.facebook.com/profile.php?id=100081189810511'><img className='inline-block h-6 w-6 rounded-full ring-2 ring-slate-800' src='../img/iconofacebook.svg' alt='Facebook' /></a>
                        <a href='https://www.instagram.com/red_de_jovenescfa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='><img className='inline-block h-6 w-6 rounded-full ring-2 ring-slate-800' src='../img/iconoinstagram.svg' alt='Instagram' /></a>
                        <a href='https://www.youtube.com/@reddejovenescfa3721'><img className='inline-block h-6 w-6 rounded-full ring-2 ring-slate-800' src='../img/iconoyoutube.png' alt='YouTube' /></a>
                    </div>
                    <Link to="/Inicio" className='p-2 mr-6 font-black uppercase text-white text-2xl'>Ministerio juvenil CFA</Link>
                </div>

                <nav className='flex flex-col md:flex-row md:items-center'>
                    <Link className='p-2 md:p-4 text-white font-black' to='/Inicio'>Inicio</Link>
                    <Link className='p-2 md:p-4 text-white font-black' to='/Red_joven'>Red Jovenes</Link>
                    <Link className='p-2 md:p-4 text-white font-black' to='#'>Noticias</Link>
                    <Link className='p-2 md:p-4 text-white font-black' to='#'>Contactanos</Link>
                </nav>
            </footer>
            </div>
        </>
    )
}
