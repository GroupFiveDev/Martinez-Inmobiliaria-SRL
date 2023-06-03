import React, { useState, useEffect } from "react";
import logo from '../../assets/logo/logo_blanco_fondo_negro-removebg-preview2.png'
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { useLocation, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import video from '../../assets/la_perla/video.mp4'
import video2 from '../../assets/la_perla/video_sm.mp4'


export default function Navbar() {
  const { pathname } = useLocation()
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false)
  const [scrollNav, setScrollNav] = useState(false);

  const title = document.getElementById("title")
  title.innerHTML = `TJ - ${pathname !== "/" && !pathname.includes("/card") ? pathname.slice(1) : "Servicios Inmobiliarios"}`

  const changeNav = () => {
    setIsOpen(false)
    if (window.scrollY >= 1) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
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
        <video controls={false} autoPlay loop muted className="h-full w-full hidden sm:flex object-cover">
          <source src={video} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <video controls={false} autoPlay loop muted className="h-full w-full flex sm:hidden object-cover">
          <source src={video2} type="video/mp4" />
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
              <img src={logo} className="w-full hover:opacity-50 " alt="inmobiliaria_Logo" />
            </div>
            <button onClick={() => setIsOpen(!isOpen)} aria-label="dropdown" type="button" className="h-fit inline-flex items-center p-2 bg-white text-sm text-gray-500 rounded-lg md:hidden  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>

          {/* pc */}
          <div className={`animate-movimiento max-[768px]:absolute max-[768px]:top-[125px] max-[768px]:lef-0 max-[768px]:right-0 items-center justify-center ${isOpen ? "" : "hidden"} md:h-fit w-full md:flex z-30 gap-5 bg-white md:bg-transparent font-medium pl-5 md:pl-0`} >
            <Link to="/" onClick={() => { setIsOpen(!isOpen), window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }} className="text-lg block py-2 pl-1 pr-4 text-black rounded md:text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:opacity-50 md:p-0">
              Inicio
            </Link>
            <a aria-label="fields" href="#campos" onClick={() => { setIsOpen(!isOpen); history.push("/") }} className=" block py-2 pl-1 pr-4 text-black md:text-white rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:opacity-50 md:p-0">
              Campos
            </a>
            <a aria-label="apartments" href="#campos" onClick={() => { setIsOpen(!isOpen); history.push("/") }} className="block py-2 pl-1 pr-4 text-black md:text-white rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:opacity-50 md:p-0">
              Departamentos
            </a>
            <Link to="/" className={`w-60 h-auto ${scrollNav && pathname == "/" ? "hidden" : ""}`}>
              <img src={logo} className="w-full hover:opacity-50 hidden md:flex" alt="inmobiliaria_Logo" />
            </Link>
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
      </nav >
    </div>
  );
};

