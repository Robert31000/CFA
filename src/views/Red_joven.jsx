import {} from 'react-router-dom'
import { Link } from 'react-router-dom'
import 'animate.css/animate.min.css';


export default function Red_Joven(){
    return(

    <div>
        <div className='flex md:float-end p-4 text-1xl font-serif'>
<a href='https://www.facebook.com/profile.php?id=100081189810511'> <img  className='inline-block h-6 w-6 rounded-full ring-2 ring-white'  src='../img/iconofacebook.svg'/> </a>
          <a href='https://www.instagram.com/red_de_jovenescfa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>  <img  className='inline-block h-6 w-6 rounded-full ring-2 ring-white 'src='../img/iconoinstagram.svg'/> </a>
           <a href='https://www.youtube.com/@reddejovenescfa3721'><img  className='inline-block h-6 w-6 rounded-full ring-2 ring-white 'src='../img/iconoyoutube.png '/> </a> 
      
          </div>
     
            <header>
                <h1 className='p-5 font-black text-center uppercase  text-2xl  '>Red De Jovenes</h1>
            </header>

            <nav className='flex flex-col md:flex-row md:justify-between bg-cyan-500 m-auto '> 
               <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black ' to='/Inicio'>Inicio</Link>
           {/* <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='#'>Red Adolecentes</Link>   */}
               <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='/Red_joven'>Red Jovenes</Link>
               <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='#'>Noticias</Link>
               <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='/Contactanos'>Contactanos</Link>
            </nav>
    </div>
    )
}