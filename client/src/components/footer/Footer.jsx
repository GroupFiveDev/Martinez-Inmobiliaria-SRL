import logo from '../../assets/logo/logo_blanco_fondo_negro-removebg-preview.png'
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp
} from 'react-icons/ai';

export default function Footer() {
  return (
    <>
      <footer className="bg-[#368a8c] p-4">
        <div className="w-full">
          <div className="md:flex md:justify-between md:w-full md:items-center">
            <div className="mb-6 md:mb-0 flex justify-center">
              <img src={logo} alt="TyJ_Logo" className='mr-3 h-8 w-40 hover:cursor-pointer' onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })} />
            </div>
            <div className='flex flex-col items-center mb-6'>
              <h2 className="text-sm font-semibold text-gray-900 uppercase mb-2">Seguinos</h2>
              <div className="flex space-x-6 sm:justify-center">
                <AiOutlineInstagram className='w-5 h-5 hover:cursor-pointer' />
                <AiOutlineTwitter className='w-5 h-5 hover:cursor-pointer' />
                <AiOutlineWhatsApp className='w-5 h-5 hover:cursor-pointer' />
              </div>
            </div>

            <div className="flex justify-center md:flex-col gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="hover:cursor-pointer text-sm font-semibold text-gray-900 uppercase" onClick={() => window.scrollTo({ top: document.getElementById("campos"), behavior: "smooth" })} >Campos</h2>
              </div>
              <div>
                <h2 className="hover:cursor-pointer text-sm font-semibold text-gray-900 uppercase">Nosotros</h2>
              </div>
              <div>
                <h2 className="hover:cursor-pointer text-sm font-semibold text-gray-900 uppercase">Contacto</h2>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="flex justify-center">
            <span className="text-sm sm:text-center">
              © 2023 TyJ Inmobiliaria | Diseño por Group Five Dev.
            </span>

          </div>
        </div>
      </footer>
    </>
  )
}