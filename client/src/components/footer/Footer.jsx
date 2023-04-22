import logo from '../../assets/logo/logo_blanco_fondo_negro-removebg-preview.png'
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp
} from 'react-icons/ai';

export default function Footer() {
  return (
    <>
      <footer class="bg-[#368a8c] p-4">
        <div class="w-full">
          <div class="md:flex md:justify-between md:w-full md:items-center">
            <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com" class="flex items-center">
                <img src={logo} class="mr-3 h-8" alt="TyJ_Logo" className='w-40' />
                <span class="self-center text-2xl font-semibold whitespace-nowrap">TyJ Inmobiliaria</span>
              </a>
            </div>
            <div className='flex flex-col items-center mb-6'>
              <h2 class="text-sm font-semibold text-gray-900 uppercase mb-2">Seguinos</h2>
              <div class="flex space-x-6 sm:justify-center">
                <AiOutlineInstagram className='w-5 h-5 hover:cursor-pointer' />
                <AiOutlineTwitter className='w-5 h-5 hover:cursor-pointer' />
                <AiOutlineWhatsApp className='w-5 h-5 hover:cursor-pointer' />
              </div>
            </div>

            <div class=" gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Campos</h2>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Nosotros</h2>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Contacto</h2>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div class="flex justify-center">
            <span class="text-sm sm:text-center">
              © 2023 TyJ Inmobiliaria | Diseño por Group Five Dev.
            </span>

          </div>
        </div>
      </footer>
    </>
  )
}