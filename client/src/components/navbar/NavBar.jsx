import { Link, useLocation, useHistory } from 'react-router-dom';
import logo from '../../assets/logo/logo_blanco_fondo_negro-removebg-preview.png'
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { useState } from 'react';

export default function NavBar() {
  const { pathname } = useLocation()
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false)

  const title = document.getElementById("title")
  title.innerHTML = `TJ - ${pathname !== "/" && !pathname.includes("/card") ? pathname.slice(1) : "Servicios Inmobiliarios"}`

  return (
    <nav className="bg-[#368a8c]">
      <div className='absolute left-5 gap-5 mt-4 hidden md:flex z-40'>
        <a href="https://www.instagram.com/tjinmobiliria/" target='_blank'>
          <AiOutlineInstagram size={"1.5rem"} className='hover:opacity-50' color='white' />
        </a>
        <a href="https://wa.me/2473509269?text=Hola%20me%20interesaria%20charlar%20sobre%20una%20propiedad%20en%20especifico." target="_blank">
          <AiOutlineWhatsApp size={"1.5rem"} className='hover:opacity-50' color='white' />
        </a>
      </div>
      <div className="relative flex flex-wrap items-center justify-end p-4 w-full" >

        {/* responsive */}
        <div className="flex w-full justify-between items-center md:order-2 md:hidden">
          <Link to="/">
            <img src={logo} className="w-40 scale-150" alt="inmobiliaria_Logo" />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} type="button" className="h-fit inline-flex items-center p-2 bg-white text-sm text-gray-500 rounded-lg md:hidden  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
        </div>

        {/* pc */}
        <div className={`animate-movimiento max-[768px]:absolute max-[768px]:top-[125px] max-[768px]:lef-0 max-[768px]:right-0 items-center justify-center ${isOpen ? "" : "hidden"} md:h-fit w-full md:flex z-30`} >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#368a8c] md:items-center">
            <li className='h-fit'>
              <Link to="/" onClick={() => setIsOpen(!isOpen)} className="text-lg block py-2 pl-3 pr-4 text-black rounded md:text-white hover:bg-gray-100 md:hover:bg-transparent hover:text-black md:p-0">
                Inicio
              </Link>
            </li>
            <li className='hidden md:flex h-fit'>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-black md:p-0 md:w-auto">
                Comprar
                <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
              <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#campos" onClick={() => history.push("/")} className="text-lg block px-4 py-2 hover:bg-gray-100">Campos</a>
                  </li>
                  <li>
                    <a href="#campos" onClick={() => history.push("/")} className="text-lg block px-4 py-2 hover:bg-gray-100">Departamentos</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className='h-fit md:hidden'>
              <Link to={pathname !== "/" ? "/#campos" : "#campos"} onClick={() => setIsOpen(!isOpen)} className=" block py-2 pl-3 pr-4 text-black md:text-white rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0">
                Campos
              </Link>
            </li>
            <li className='h-fit md:hidden'>
              <Link to={pathname !== "/" ? "/#campos" : "#campos"} onClick={() => setIsOpen(!isOpen)} className="block py-2 pl-3 pr-4 text-black md:text-white rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0">
                Departamentos
              </Link>
            </li>
            <li className="hidden md:flex h-fit">
              <Link to="/" className="mx-5">
                <img src={logo} className="w-40 h-40 hover:opacity-50 scale-150" alt="inmobiliaria_Logo" />
              </Link>
            </li>
            <li className='h-fit'>
              <Link to="/Nosotros" onClick={() => setIsOpen(!isOpen)} className={`block py-2 pl-3 pr-4 text-black rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 ${pathname === "/Nosotros" ? "md:text-black" : "md:text-white"}`}>
                Nosotros
              </Link>
            </li>
            <li className='h-fit'>
              <Link to="/Contacto" onClick={() => setIsOpen(!isOpen)} className={`block py-2 pl-3 pr-4 text-black rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 ${pathname === "/Contacto" ? "md:text-black" : "md:text-white"}`}>
                Contacto
              </Link>
            </li>
            <li className='h-fit'>
              <a href="tel:2473509269" onClick={() => setIsOpen(!isOpen)} target="_blank" className="md:hidden block py-2 pl-3 pr-4 text-black md:text-white  rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0">
                Llamanos
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav >



  )
}
