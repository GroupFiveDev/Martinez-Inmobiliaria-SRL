import logo from '../../assets/logo/logo_blanco_fondo_negro-removebg-preview.png'
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp
} from 'react-icons/ai';

export default function NavBar() {
  return (
    <nav class="bg-[#368a8c]">
      <div className='flex absolute left-5 gap-5 mt-4'>
        <AiOutlineInstagram size={"1.5rem"} />
        <AiOutlineTwitter size={"1.5rem"} />
        <AiOutlineWhatsApp size={"1.5rem"} />
      </div>
      <div class=" flex flex-wrap items-center justify-end p-4 w-full" >

        {/* responsive */}
        <div class="flex md:order-2 md:hidden">
          <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 bg-white text-sm text-gray-500 rounded-lg md:hidden  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-search" aria-expanded="false">
            <span class="sr-only">Open menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>

        {/* pc */}
        <div class="items-center justify-center hidden w-full md:flex" id="navbar-search">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#368a8c] md:items-center">
            <li className='hidden md:flex h-fit'>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
                Comprar
                <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Propiedad Urbana</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className='h-fit'>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                Campos
              </a>
            </li>
            <li class="hidden md:flex h-fit">
              <img src={logo} class="mr-3 w-40 h-40" alt="Flowbite Logo" />
            </li>
            <li className='h-fit'>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                Nosotros

              </a>
            </li>
            <li className='h-fit'>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                Contacto
              </a>
            </li>
          </ul>

        </div>

      </div>
    </nav>



  )
}
