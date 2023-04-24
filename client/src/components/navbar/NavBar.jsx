import logo from '../../assets/logo/logo_blanco_fondo_negro-removebg-preview.png'
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp
} from 'react-icons/ai';

export default function NavBar() {
  return (
    <nav className="bg-[#368a8c]">
      {/* 
 llamanos 
 <a class="ast-custom-button-link" href="tel:+54%209%203413%2059-0101" target="_blank"><div class="ast-custom-button">LLAMANOS</div></a>
 */}
      <div className='absolute left-5 gap-5 mt-4 hidden md:flex'>

        <AiOutlineInstagram size={"1.5rem"} />
        <AiOutlineTwitter size={"1.5rem"} />
        <a href="https://wa.me/2473509269?text=Hola%20me%20interesaria%20charlar%20sobre%20una%20propiedad%20en%20especifico." target="_blank">
          <AiOutlineWhatsApp size={"1.5rem"} />
        </a>
      </div>
      <div className=" flex flex-wrap items-center justify-end p-4 w-full" >

        {/* responsive */}
        <div className="flex w-full justify-between items-center md:order-2 md:hidden">
          <img src={logo} className="w-40" alt="inmobiliaria_Logo" />

          <button data-collapse-toggle="navbar-search" type="button" className="h-fit inline-flex items-center p-2 bg-white text-sm text-gray-500 rounded-lg md:hidden  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-search" aria-expanded="false">
            <span className="sr-only">Open menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
        </div>

        {/* pc */}
        <div className="items-center justify-center hidden w-full md:flex" id="navbar-search">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#368a8c] md:items-center">
            <li className='hidden md:flex h-fit'>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
                Comprar
                <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
              <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Propiedad Urbana</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className='h-fit'>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                Campos
              </a>
            </li>
            <li className="hidden md:flex h-fit">
              <img src={logo} className="w-40 h-40" alt="inmobiliaria_Logo" />
            </li>
            <li className='h-fit'>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                Nosotros

              </a>
            </li>
            <li className='h-fit'>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                Contacto
              </a>
            </li>
            <li className='h-fit'>
              <a href="tel:+2473400240" target="_blank" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                Llamanos
              </a>
            </li>
          </ul>

        </div>

      </div>
    </nav>



  )
}
