import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo_blanco_fondo_negro-removebg-preview.png'
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp
} from 'react-icons/ai';

export default function Footer() {
  return (
    <>
      <footer className="bg-[#368a8c] p-4">
        <div className="w-full">
          <div className="md:flex md:justify-between md:w-full md:items-center">
            <div className="mb-6 md:mb-0 flex justify-center">
              <img src={logo} alt="TyJ_Logo" className='w-60 h-60 md:w-40 md:h-40 hover:cursor-pointer hover:opacity-50 scale-150' onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })} />
            </div>
            <div className='flex flex-col items-center mb-6'>
              <h2 className="text-sm font-semibold text-gray-900 uppercase mb-2 font-Montserrat">Seguinos</h2>
              <div className="flex space-x-6 sm:justify-center">
                <a href="https://www.instagram.com/tjinmobiliria/" target='_blank'>
                  <AiOutlineInstagram className='w-7 h-7 hover:cursor-pointer hover:opacity-50' />
                </a>
                <a href="https://wa.me/2473509269?text=Hola%20me%20interesaria%20charlar%20sobre%20una%20propiedad%20en%20especifico." target="_blank">
                  <AiOutlineWhatsApp className='w-7 h-7 hover:cursor-pointer hover:opacity-50' />
                </a>
              </div>
            </div>

            <div className="flex justify-center md:mr-10 md:flex-col gap-8 sm:grid-cols-3">
              <div>
                <a className="font-Montserrat hover:text-white hover:cursor-pointer text-sm font-semibold text-gray-900 uppercase" href="#campos" >Campos</a>
              </div>
              <div>
                <Link to="/nosotros">
                  <h2 className="font-Montserrat hover:text-white hover:cursor-pointer text-sm font-semibold text-gray-900 uppercase">Nosotros</h2>
                </Link>
              </div>
              <div>
                <Link to="/contacto">
                  <h2 className="font-Montserrat hover:text-white hover:cursor-pointer text-sm font-semibold text-gray-900 uppercase">Contacto</h2>
                </Link>
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