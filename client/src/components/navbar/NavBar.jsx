import React, { useState, useEffect } from "react";
import logo from '../../assets/logo/blanco-fondo-negro-removebg-preview2.webp'
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const video = "https://res.cloudinary.com/dgei1j8pa/video/upload/v1690897866/TJInmobiliaria/Videos/Video_sm_ovehrl.mp4"
const video2 = "https://res.cloudinary.com/dgei1j8pa/video/upload/v1690897865/TJInmobiliaria/Videos/Video_md_lawyl3.mp4"


export default function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    setIsOpen(false)
    if (window.scrollY >= 1) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const handleScrollToCampos = () => {
    navigate('/');

    setTimeout(() => {
      const camposElement = document.getElementById('campos');
      if (camposElement) {
        camposElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  useEffect(() => {
    if (pathname === "/") {
      window.addEventListener("scroll", changeNav);
    } else {
      window.scrollY = 0
    }
  }, []);

  return (
    <div>
      <div className={`${pathname === "/" ? "flex" : "hidden"} top-0 w-full h-screen relative`}>
        <video controls={false} autoPlay loop muted className="h-screen w-full hidden sm:flex object-cover">
          <source src={video2} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <video controls={false} autoPlay loop muted className="h-screen w-full flex sm:hidden object-cover">
          <source src={video} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
      <nav className={`z-[60] ${pathname === "/" ? "md:fixed absolute" : "flex"} ${pathname === "/" ? "bg-gradient-to-b from-black" : "bg-[#276163]"} top-0 w-full $ md:h-fit`}>
        <div className='absolute left-5 gap-5 mt-4 hidden md:flex z-40'>
          <a aria-label="instagram" href="https://www.instagram.com/tjinmobiliria/" target='_blank'>
            <AiOutlineInstagram size={"1.5rem"} className='hover:opacity-50' color='white' />
          </a>
          <a aria-label="wsp" href="https://wa.me/2473509269?text=Hola%20me%20interesaria%20charlar%20sobre%20una%20propiedad%20en%20especifico." target="_blank">
            <AiOutlineWhatsApp size={"1.5rem"} className='hover:opacity-50' color='white' />
          </a>
        </div>
        <div className="relative flex flex-wrap items-center justify-end p-4 w-full" >

          {/* responsive */}
          <div className="flex w-full justify-between items-center md:order-2 md:hidden">
            <div onClick={() => window.location.assign('/')} className={`w-40 h-auto`}>
              <img src={logo} className="w-[160px] h-[113px] hover:opacity-50 " alt="inmobiliaria_Logo" />
            </div>
            <button onClick={() => setIsOpen(!isOpen)} aria-label="dropdown" type="button" className="h-fit inline-flex items-center p-2 bg-white text-sm text-gray-500 rounded-lg md:hidden  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>

          {/* pc */}
          <div className={`${isOpen ? "" : "hidden"} animate-movimiento w-full items-center justify-center z-30 gap-5 bg-white font-medium pl-5 md:pl-0 max-[767px]:absolute max-[767px]:top-[145px] max-[767px]:lef-0 max-[767px]:right-0 md:h-fit md:flex md:bg-transparent`} >
            <div className={` ${scrollNav && pathname === "/" ? "h-auto" : "h-[170px]"} pb-5 flex gap-5 items-end justify-center`}>
              <Link to="/" onClick={() => { setIsOpen(!isOpen), window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }} className="text-lg block py-2 pl-1 pr-4 text-black rounded md:text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:opacity-50 md:p-0">
                Inicio
              </Link>
              <span aria-label="fields" onClick={() => { setIsOpen(!isOpen); handleScrollToCampos() }} className="hover:cursor-pointer block py-2 pl-1 pr-4 text-black md:text-white rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:opacity-50 md:p-0">
                Campos
              </span>
              <span aria-label="apartments" onClick={() => { setIsOpen(!isOpen); handleScrollToCampos() }} className="hover:cursor-pointer block py-2 pl-1 pr-4 text-black md:text-white rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:opacity-50 md:p-0">
                Departamentos
              </span>
            </div>
            <Link to="/" className={`w-60 h-auto ${scrollNav && pathname == "/" ? "hidden" : ""}`}>
              <img src={logo} className="w-[240px] h-[170px] hover:opacity-50 hidden md:flex" alt="inmobiliaria_Logo" />
            </Link>
            <div className={` ${scrollNav && pathname === "/" ? "h-auto" : "h-[170px]"} pb-5 flex gap-5 items-end justify-center`}>
              <Link to="/Mapa" onClick={() => setIsOpen(!isOpen)} className={`block py-2 pl-1 pr-4 text-black rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:opacity-50 md:p-0 ${pathname === "/Mapa" ? "md:text-black" : "md:text-white"}`}>
                Mapa
              </Link>
              <Link to="/Nosotros" onClick={() => setIsOpen(!isOpen)} className={`block py-2 pl-1 pr-4 text-black rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:opacity-50 md:p-0 ${pathname === "/Nosotros" ? "md:text-black" : "md:text-white"}`}>
                Nosotros
              </Link>
              <Link to="/Contacto" onClick={() => setIsOpen(!isOpen)} className={`block py-2 pl-1 pr-4 text-black rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:opacity-50 md:p-0 md:m-0 ${pathname === "/Contacto" ? "md:text-black" : "md:text-white"}`}>
                Contacto
              </Link>
              <a aria-label="call" href="tel:2473509269" onClick={() => setIsOpen(!isOpen)} target="_blank" className="md:hidden block py-2 pl-1 pr-4 text-black md:text-white  rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:opacity-50 md:p-0">
                Llamanos
              </a>
            </div>
          </div>
        </div>
      </nav >
    </div>
  );
};

