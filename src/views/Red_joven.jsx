import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css/animate.min.css';

const videos = [
  { id: 1, title: 'Como manejar la alegria', pastor: 'Pastor Jose Daniel', date: '11 de mayo', url: 'https://www.youtube.com/embed/YUOCEYb0la8?si=UbPWYrgczU9d4jyP' },
  { id: 2, title: 'Como manejar la alegria', pastor: 'Pastor Jose Daniel', date: '11 de mayo', url: 'https://www.youtube.com/embed/PoBkxBucY9A?si=pmm2kcos1AnQugCL' },
  { id: 3, title: 'Como manejar la alegria', pastor: 'Pastor Jose Daniel', date: '11 de mayo', url: 'https://www.youtube.com/embed/eYAuv5eRlZ8?si=CpgPZs5lUyzDxSyK' },
  { id: 4, title: 'Como manejar la alegria', pastor: 'Pastor Jose Daniel', date: '11 de mayo', url: 'https://www.youtube.com/embed/jjLh8Bo1wnM?si=YKaA6mfDvBbwPzAu' },
  { id: 5, title: 'Como manejar la alegria', pastor: 'Pastor Jose Daniel', date: '11 de mayo', url: 'https://www.youtube.com/embed/d2t2tDsZi5c?si=J2xEMS_X1wOV4s5n' },
  { id: 6, title: 'Como manejar la alegria', pastor: 'Pastor Jose Daniel', date: '11 de mayo', url: 'https://www.youtube.com/embed/5_b_dNU6fTA?si=hGa3ONJsRZ2htout' },
];

const itemsPerPage = 4;

export default function Red_Joven() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedVideos = videos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <div className='flex justify-end p-4 text-1xl font-serif'>
        <a href='https://www.facebook.com/profile.php?id=100081189810511'>
          <img className='inline-block h-6 w-6 rounded-full ring-2 ring-white' src='../img/iconofacebook.svg' />
        </a>
        <a href='https://www.instagram.com/red_de_jovenescfa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
          <img className='inline-block h-6 w-6 rounded-full ring-2 ring-white ' src='../img/iconoinstagram.svg' />
        </a>
        <a href='https://www.youtube.com/@reddejovenescfa3721'>
          <img className='inline-block h-6 w-6 rounded-full ring-2 ring-white ' src='../img/iconoyoutube.png ' />
        </a>
      </div>

      <header>
        <h1 className='p-5 font-black text-center uppercase text-2xl'>Red De Jovenes</h1>
      </header>

      <nav className='flex flex-col md:flex-row md:justify-between bg-cyan-500 m-auto items-center'>
        <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black ' to='/Inicio'>Inicio</Link>
        <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='/Red_joven'>Red Jovenes</Link>
        <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='#'>Noticias</Link>
        <Link className='p-2 md:p-4 md:hover:bg-yellow-500 text-white font-black' to='/Contactanos'>Contactanos</Link>
      </nav>

      <div className='w-full brightness-75'>
        <video className='h-96 w-full object-cover' autoPlay muted loop>
          <source src='../video/intro.mp4' type='video/mp4'></source>
        </video>
      </div>

      <div className="grid grid-rows-3 grid-flow-col gap-4 p-5">
        <div className="col-span-2 text-center font-black">PREDICACIONES Y ESTUDIOS</div>
        <div className="row-span-2 col-span-2 mx-12">Escucha una gran selección de enseñanzas de nuestra iglesia Centro de Vida Cristiana a través de audios y videos de distintas predicaciones, estudios dominicales, retiros, conferencias, aniversarios y más.</div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between m-auto items-center sm:grid sm:gap-x-8 sm:gap-y-4 sm:grid-cols-4">
        {paginatedVideos.map((video) => (
          <div key={video.id} className="w-60 h-60 m-auto">
            <iframe
              className='rounded-2xl'
              width="200"
              height="150"
              src={video.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p className="text-center mt-2 font-semibold">{video.title}</p>
            <p>{video.pastor}</p>
            <p>{video.date}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-end space-x-2 m-4">
        {Array.from({ length: Math.ceil(videos.length / itemsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 rounded ${index + 1 === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className='text-center font-bold'>
        <h4>Nuestros Pastores</h4>

    <div className="max-w-sm mx-auto overflow-hidden rounded-lg ">
      <div className="bg-white-400 p-5">
        <div className="flex items-center">
          <img
            className="w-16 h-16 rounded-full mr-4"
            src="https://scontent.fsrz4-1.fna.fbcdn.net/v/t1.6435-9/195833184_2513611418784079_4515032725592290532_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ClAc6TOvnwMQ7kNvgFP1hr1&_nc_ht=scontent.fsrz4-1.fna&oh=00_AYARoHQoYAse5j8A6Ocov17HnVDeNEHWpOv8Th-4ke_qbA&oe=66907C1D"
            alt="Avatar of Andrew Alfred"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-900">Jose Daniel Gutierrez</h3>
            <p className="text-gray-600">Pastor</p>
          </div>
        </div>
        </div>
    </div>


    <div className="max-w-sm mx-auto overflow-hidden rounded-lg ">
      <div className="bg-white-400 p-5">
        <div className="flex items-center">
          <img
            className="w-16 h-16 rounded-full mr-4"
            src="https://scontent.fsrz4-1.fna.fbcdn.net/v/t1.6435-9/65614924_10156492456119226_8143316379001421824_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IXX6_9mtSY4Q7kNvgHlun_S&_nc_ht=scontent.fsrz4-1.fna&oh=00_AYAvC6GWj2Z5FvCSSsAK_EB93nKVQnb7Ngyz0AUbQhQCtQ&oe=66904D9D"
            alt="Avatar of Andrew Alfred"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-900">Sarahi Jhoana Lara Ricaldi </h3>
            <p className="text-gray-600">Pastora</p>
          </div>
        </div>
        </div>
    </div>

      </div>




      <div className='py-4 font-bold'>
      <h4>Nuestros Lideres</h4>

      <div className="overflow-x-scroll py-4">
        <div className="flex space-x-4">
          <div className="flex-shrink-0 text-center">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src="https://scontent.fsrz4-1.fna.fbcdn.net/v/t1.6435-9/39441691_10212418554081494_1665806402943188992_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Oqj2qzn6wuUQ7kNvgF9Mp54&_nc_ht=scontent.fsrz4-1.fna&oh=00_AYBunaqywqAmerfwJc0srtcoaRi6rDay2jfWvcas6_fvvw&oe=66904F28"
              alt="Avatar of Eugenia Celia Mamani Balboa"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900">Eugenia Celia Mamani Balboa</h3>
              <p className="text-gray-600">Lider</p>
            </div>
          </div>
          <div className="flex-shrink-0 text-center">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src="https://scontent.fsrz4-1.fna.fbcdn.net/v/t1.18169-9/10931548_10152573432881497_4902022133023466465_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8X2BWuPyIjgQ7kNvgEhIUPZ&_nc_ht=scontent.fsrz4-1.fna&oh=00_AYDW8-Zhdq25QAxJr0M8voXuN_syhYCGz8r_Ad3b0Pm4zw&oe=66908C5D"
              alt="Avatar of Milton Sandoval"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900">Milton Sandoval</h3>
              <p className="text-gray-600">Lider</p>
            </div>
          </div>
          <div className="flex-shrink-0 text-center">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src="https://scontent.fsrz4-1.fna.fbcdn.net/v/t1.18169-9/10931548_10152573432881497_4902022133023466465_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8X2BWuPyIjgQ7kNvgEhIUPZ&_nc_ht=scontent.fsrz4-1.fna&oh=00_AYDW8-Zhdq25QAxJr0M8voXuN_syhYCGz8r_Ad3b0Pm4zw&oe=66908C5D"
              alt="Avatar of Milton Sandoval"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900">Milton Sandoval</h3>
              <p className="text-gray-600">Lider</p>
            </div>
          </div>
          <div className="flex-shrink-0 text-center">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src="https://scontent.fsrz4-1.fna.fbcdn.net/v/t1.18169-9/10931548_10152573432881497_4902022133023466465_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8X2BWuPyIjgQ7kNvgEhIUPZ&_nc_ht=scontent.fsrz4-1.fna&oh=00_AYDW8-Zhdq25QAxJr0M8voXuN_syhYCGz8r_Ad3b0Pm4zw&oe=66908C5D"
              alt="Avatar of Milton Sandoval"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900">Milton Sandoval</h3>
              <p className="text-gray-600">Lider</p>
            </div>
          </div>
        </div>
      </div>
    
      </div>



      

      <footer className='flex flex-col md:flex-row justify-center md:justify-between items-center bg-slate-800 p-5'>
        <div className='flex items-center'>
          <div>
            <a href='https://www.facebook.com/profile.php?id=100081189810511'>
              <img className='inline-block h-6 w-6 rounded-full ring-2 ring-slate-800' src='../img/iconofacebook.svg' alt='Facebook' />
            </a>
            <a href='https://www.instagram.com/red_de_jovenescfa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
              <img className='inline-block h-6 w-6 rounded-full ring-2 ring-slate-800' src='../img/iconoinstagram.svg' alt='Instagram' />
            </a>
            <a href='https://www.youtube.com/@reddejovenescfa3721'>
              <img className='inline-block h-6 w-6 rounded-full ring-2 ring-slate-800' src='../img/iconoyoutube.png' alt='YouTube' />
            </a>
          </div>
          <Link to="/Inicio" className='p-2 mr-6 font-black uppercase text-white text-2xl'>Ministerio juvenil CFA</Link>
        </div>

        <nav className='flex flex-col md:flex-row md:items-center'>
          <Link className='p-2 md:p-4 text-white font-black' to='/Inicio'>Inicio</Link>
          <Link className='p-2 md:p-4 text-white font-black' to='/Red_joven'>Red Jovenes</Link>
          <Link className='p-2 md:p-4 text-white font-black' to='#'>Noticias</Link>
          <Link className='p-2 md:p-4 text-white font-black' to='/Contactanos'>Contactanos</Link>
        </nav>
      </footer>
    </div>
  );
}
