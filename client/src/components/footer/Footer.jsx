import { Link } from 'react-router-dom';
import logo from '../../assets/logo/blanco-fondo-negro-removebg-preview2.webp'
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate()
  return (
    <>
      <footer className="bg-[#276163] p-4 h-fit md:h-fit">
        <div className="w-full relative">
          <div className="  md:flex md:justify-between md:w-full md:items-center">
            <div className="mb-6 md:mb-0 flex justify-center">
              <img src={logo} alt="TyJ_Logo" className='w-[160px] h-[113px] hover:cursor-pointer hover:opacity-50 z-40' onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); navigate("/") }} />
            </div>

            <div className='md:absolute flex flex-col items-center my-6 w-full'>
              <h2 className="text-sm font-semibold text-white uppercase mb-2 font-Montserrat">Seguinos</h2>
              <div className="flex space-x-6 sm:justify-center">
                <a aria-label="instagram" href="https://www.instagram.com/tjinmobiliria/" target='_blank'>
                  <AiOutlineInstagram className='w-7 h-7 hover:cursor-pointer hover:opacity-50' color='white' />
                </a>
                <a aria-label="wsp" href="https://wa.me/2473509269?text=Hola%20me%20interesaria%20charlar%20sobre%20una%20propiedad%20en%20especifico." target="_blank">
                  <AiOutlineWhatsApp className='w-7 h-7 hover:cursor-pointer hover:opacity-50' color='white' />
                </a>
              </div>
            </div>

            <div className="flex justify-center md:mr-10 md:flex gap-8 sm:grid-cols-3 md:flex-row-reverse items-center">
              <div className='flex flex-col gap-5 text-center z-10'>
                <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
                  <h2 className="font-Montserrat hover:text-white hover:opacity-50 hover:cursor-pointer text-sm font-semibold text-white uppercase">Inicio</h2>
                </Link>
                <Link to="/nosotros">
                  <h2 className="font-Montserrat hover:text-white hover:opacity-50 hover:cursor-pointer text-sm font-semibold text-white uppercase">Nosotros</h2>
                </Link>
                <Link to="/contacto">
                  <h2 className="font-Montserrat hover:text-white hover:opacity-50 hover:cursor-pointer text-sm font-semibold text-white uppercase">Contacto</h2>
                </Link>
              </div>
              <div className='flex flex-col gap-5 text-center'>
                            <a aria-label="fields" onClick={() => navigate("/")} className="font-Montserrat hover:text-white hover:opacity-50 hover:cursor-pointer text-sm font-semibold text-white uppercase" href="#campos" ><h2></h2>Campos</a>
            <a aria-label="apartments" onClick={() => navigate("/")} className="font-Montserrat z-10 hover:text-white hover:opacity-50 hover:cursor-pointer text-sm font-semibold text-white uppercase" href="#campos" ><h2></h2>Departamentos</a>
                <Link to="/Mapa">
                  <h2 className="font-Montserrat hover:text-white hover:opacity-50 hover:cursor-pointer text-sm font-semibold text-white uppercase" href="#campos" >Mapa</h2>
                </Link>
              </div>
            </div>
            <Link to="/admin" className='absolute bottom-0 right-0 w-[100px] h-[50px] hover:cursor-default flex items-center text-[#276163]'>
              Admin
            </Link>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="flex justify-center">
            <span className="text-sm sm:text-center text-white">
              © 2023 TyJ Inmobiliaria | Diseño por Group Five Dev.
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}