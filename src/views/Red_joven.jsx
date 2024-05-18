import {} from 'react-router-dom'
import { Link } from 'react-router-dom'
import 'animate.css/animate.min.css';


export default function Red_Joven(){
    return(

    <div>
        <div className='flex justify-end p-4 text-1xl font-serif'>
           <a href='https://www.facebook.com/profile.php?id=100081189810511'> <img  className='inline-block h-6 w-6 rounded-full ring-2 ring-white'  src='../img/iconofacebook.svg'/> </a>
           <a href='https://www.instagram.com/red_de_jovenescfa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>  <img  className='inline-block h-6 w-6 rounded-full ring-2 ring-white 'src='../img/iconoinstagram.svg'/> </a>
           <a href='https://www.youtube.com/@reddejovenescfa3721'><img  className='inline-block h-6 w-6 rounded-full ring-2 ring-white 'src='../img/iconoyoutube.png '/> </a> 
      
          </div>
     
            <header>
                <h1 className='p-5 font-black text-center uppercase  text-2xl  '>Red De Jovenes</h1>
            </header>

            <nav className='flex flex-col md:flex-row md:justify-between bg-cyan-500 m-auto items-center'> 
               <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black ' to='/Inicio'>Inicio</Link>
           {/* <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='#'>Red Adolecentes</Link>   */}
               <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='/Red_joven'>Red Jovenes</Link>
               <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='#'>Noticias</Link>
               <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='/Contactanos'>Contactanos</Link>
            </nav>


            <div className='w-full brightness-75  '>
             <video className='  h-96 w-full object-cover' autoPlay muted loop>
             <source src='../video/intro.mp4' type='video/mp4' ></source>
            </video>
       </div>

       <div className="grid grid-rows-3 grid-flow-col gap-4 p-5">
      
       <div className="col-span-2 text-center font-black  ...">PREDICACIONES Y ESTUDIOS</div>
        <div className="row-span-2 col-span-2  mx-12"> Escucha una gran selección de enseñanzas de nuestra iglesia Centro de Vida Cristiana a través de audios y videos de distintas predicaciones, estudios dominicales, retiros, conferencias, aniversarios y más.</div>
      </div>

      
      <div className="overflow-x-auto">
    <div className="flex space-x-4 p-4">
        <div className="w-60 h-60 flex-none">
            <a href="https://youtu.be/PoBkxBucY9A?si=mQQ8OoHAid7XNBzI" target="_blank">
                <img src="img/culto11-05-24.jpg" alt="Video 1"/>
            </a>
            <p className="text-center mt-2 font-semibold">Como manejar la alegria</p>
            <p className=" mt-2">Pastor Jose Daniel </p>
            <p className=" mt-2">11 de mayo </p>


        </div>
        <div className="w-60 h-60 flex-none">
            <a href="https://youtu.be/eYAuv5eRlZ8?si=Ow4bP2k4V3ArLCp8" target="_blank">
                <img src="img/culto04-05-24.jpg" alt="Video 2" />
            </a>
            <p className=" mt-2 font-semibold">Como manejar el desagrado </p>
            <p className=" mt-2">Pastor Jose Daniel </p>
            <p className="mt-2">4 de mayo </p>


        </div>
        <div className="w-60 h-60 flex-none">
            <a href="https://youtu.be/jjLh8Bo1wnM?si=VIqxoLGgiybYDl6U" target="_blank">
                <img src="img/culto26-04-24.jpg" alt="Video 3" />
            </a>
            <p className=" mt-2 font-semibold">Como manejar el miedo y la ansiedad</p>
            <p className=" mt-2 font-semibold">Pastor Jose Daniel </p>
            <p className=" mt-2">26 de abril </p>

        </div>
    </div>
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
    )
}