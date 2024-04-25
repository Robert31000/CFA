import { Link } from 'react-router-dom'
import 'animate.css/animate.min.css';



//OUTLET TE PERMITE QUE SE MUESTRE TU PAGINA DE INICIO AL PRINCIO

export default function Layout() {
    return (
  <div className=''>

       <div className='flex md:float-end p-4 text-1xl font-serif '>
 {/*      <Link className='p-2 h-5' to='/Inicio'><img  className='h-6 p-1'src='../img/images.jpeg '/> </Link>  */} 
        <a href='https://www.facebook.com/profile.php?id=100081189810511'> <img  className='inline-block h-6 w-6 rounded-full ring-2 ring-white'  src='../img/iconofacebook.svg'/> </a>
          <a href='https://www.instagram.com/red_de_jovenescfa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>  <img  className='inline-block h-6 w-6 rounded-full ring-2 ring-white 'src='../img/iconoinstagram.svg'/> </a>
           <a href='https://www.youtube.com/@reddejovenescfa3721'><img  className='inline-block h-6 w-6 rounded-full ring-2 ring-white 'src='../img/iconoyoutube.png '/> </a> 
       </div>
     
            <header>
                <h1 className='p-5 font-black text-center uppercase  text-2xl  '>Ministerio juvenil CFA</h1>
            </header>

            <nav className='flex flex-col md:flex-row md:justify-between bg-cyan-500 m-auto '> 
               <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black ' to='/Inicio'>Inicio</Link>
           {/* <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='#'>Red Adolecentes</Link>   */}
               <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='/Red_joven'>Red Jovenes</Link>
               <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='#'>Noticias</Link>
               <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='/Contactanos'>Contactanos</Link>
            </nav>

       <div>
       <img 
            src='../img/principal.jpg'
            className='w-full h-96 filter brightness-50 	' 
            alt='Imagen principal'
            
            />
            
            <div className="flex md:flex-column absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mb-8">
                   <p className="font-bold italic text-white text-2xl capitalize mb-4">Asambleas de Dios de Bolivia</p>
                   <p className="text-2xl font-bold italic text-white mb-4">Una iglesia para toda la familia.</p>
                   <p className="text-2xl font-bold italic text-white">Sirviendo a Dios y a Bolivia.</p>
           </div>

       </div>
         

     {/*   <div className='p-5'>
            <video className='w-full h-80 shadow-xl filter brightness-50	' autoPlay muted loop>
            <source src='../video/intro.mp4' type='video/mp4' ></source>
          </video>
       </div> */} 
          
      <div className='uppercase text-2xl  text-center p-3'>
        <h2 className='font-black text-cyan-700' >Ministerio Juvenil</h2>
      </div>

 <div className=" grid grid-flow-col gap-6 justify-center p-4 m-auto ">
    <img className="h-full w-auto rounded-lg" src="../img/red_joven.jpg" />
    <div className="text-center md:text-left">
        <h3 className="text-blue-600 font-black text-2xl mb-2">¿Qué es Red Juvenil?</h3>
        <p className="text-black p-1  ">
            El ministerio juvenil es una parte vital del trabajo de la iglesia que se enfoca en alcanzar, discipular
            y equipar a los jóvenes en su fe cristiana. Este ministerio está diseñado específicamente para 
            satisfacer las necesidades espirituales, emocionales y sociales de los jóvenes, generalmente entre 
            las edades de adolescencia y juventud temprana
        </p>
    </div>



    <img className="h-full rounded-lg  animate-flip-down animate-once

" src="../img/redJuvenil1.jpeg" />
    <div className="text-center md:text-left">
        <h3 className="text-blue-600 font-black text-2xl mb-2 md:text-lg">La visión del líder juvenil es ver a los jóvenes y adolescentes llegar a ser como Cristo.</h3>
        <p className="text-black p-1 animate-in fade-in zoom-in ">
        El ministerio juvenil no existe sin un propósito claro: ayudar a 
        los jóvenes a crecer espiritualmente y a reflejar a Cristo en sus vidas. Aunque 
        el ministerio con jóvenes puede ser desafiante, es fundamental mantener esta visión en mente. 
        No estamos aquí solo 
        </p>
    </div>

</div>

    <div className='text-center md:text-left mt-7 p-6 text-zinc-700 '>

    En el <span className='text-blue-600'>Ministerio juvenil Cristiano</span> creemos que debemos vivir un cristianismo práctico, por ello, animamos 
     a cada persona a que asista a dos reuniones semanales y que el resto de la semana practique un cristianismo
     real con sus semejantes fuera de la iglesia; de tal manera, que la iglesia camine y supla las necesidades 
     de otros en la vida diaria.

<div> 
Contamos con reuniones para estudiar la Palabra de Dios, las cuales se realizan en tanto en las instalaciones
 de Centro de Vida Cristiana, como en las casas de los miembros como lo describe <span className='text-blue-500'>Hechos 5:42.</span>
    </div>

    </div>

    <section className=' grid grid-cols-1 md:grid-cols-3  m-auto'>
  
      <img className='w-full  h-auto'
      src='../img/culto2.jpg'/>
     <img  className='w-full h-auto'
      src='../img/culto3.jpg'/>
     <img className='w-full h-full'
      src='../img/culto1.jpg'/>
    </section>

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
        <Link className='p-2 md:p-4  text-white font-black' to='/Contactanos'>Contactanos</Link>
    </nav>
</footer>




          
        
 </div>

    )
}

