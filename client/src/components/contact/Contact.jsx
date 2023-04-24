import {
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiTwotonePhone
} from 'react-icons/ai';
import {
  HiLocationMarker
} from 'react-icons/hi';



export default function Contact() {
  window.scrollTo({ top: 0, left: 0 })
  return (
    <>
      <div className="bg-[#51535B] relative md:flex">

        <div className=" bg-[#51535B] flex flex-col items-center md:bg-[#368a8c]">
          <p className="text-4xl font-semibold text-[#368a8c] mb-5">Contacto</p>

          {/* Contacto informacion */}
          <div className='w-full flex flex-col items-center'>
            {/* wsp */}
            <div className='w-full'>

              <div className='flex justify-center'>
                <a className='flex justify-center items-center bg-[#368a8c] w-14 h-14' href="https://wa.me/2473509269?text=Hola%20me%20interesaria%20charlar%20sobre%20una%20propiedad%20en%20especifico." target="_blank">
                  <AiOutlineWhatsApp className='hover:opacity-50 w-8 h-8' />
                </a>
              </div>
              <div className='w-full flex flex-col items-center justify-center'>
                <p class="text-lg text-[#368a8c] sm:text-black">WhatsApp</p>
                <p class="text-lg text-white">+54 2473-509269</p>
                <p class="text-lg text-white">+54 2473</p>
              </div>
              <hr className="my-6 mx-6 border-gray-200 lg:my-8" />
            </div>
            {/* Ubicacion */}
            <div className='w-full'>

              <div className='flex justify-center'>
                <a className='flex justify-center items-center bg-[#368a8c] w-14 h-14' href="https://www.google.com/maps/place/-33.895401,+-61.099643/@-33.8954262,-61.0994997,21z/data=!4m4!3m3!8m2!3d-33.8954009!4d-61.0996432?hl=es" target="_blank">
                  <HiLocationMarker className='hover:opacity-50 w-8 h-8' />
                </a>
              </div>
              <div className='w-full flex flex-col items-center justify-center gap-4 px-4'>
                <p class="text-lg text-[#368a8c] sm:text-black">Ubicación</p>
                <p class="text-lg text-white">Calle 49, esquina 18.Colón, Buenos Aires.</p>
                <p class="text-lg text-white">Calle 49 y 18.Colón, Buenos Aires.</p>
                <a href="https://www.google.com/maps/place/-33.895401,+-61.099643/@-33.8954262,-61.0994997,21z/data=!4m4!3m3!8m2!3d-33.8954009!4d-61.0996432?hl=es" target="_blank" class="text-lg text-white p-3 border-[#368a8c] md:border-white border-2 hover:opacity-50">Abrir en el mapa</a>
              </div>
              <hr className="my-6 mx-6 border-gray-200 lg:my-8" />
            </div>

            {/* celular */}
            <div className='w-full'>

              <div className='flex justify-center'>
                <a className='flex justify-center items-center bg-[#368a8c] w-14 h-14' href="https://wa.me/2473509269?text=Hola%20me%20interesaria%20charlar%20sobre%20una%20propiedad%20en%20especifico." target="_blank">
                  <AiTwotonePhone className='hover:opacity-50 w-8 h-8' />
                </a>
              </div>
              <div className='w-full flex flex-col items-center justify-center'>
                <p class="text-lg text-[#368a8c] sm:text-black">Llamanos</p>
                <div className='flex flex-col justify-center items-center gap-4 mt-4'>
                  <a href="tel:2473509269" target="_blank" className='hover:cursor-pointer'>
                    <p class="text-lg text-white p-3 border-[#368a8c] hover:opacity-50 md:border-white border-2">Martinez Thiago</p>
                  </a>
                  <a href="tel:2473509269" target="_blank" className='hover:cursor-pointer'>
                    <p class="text-lg text-white p-3 border-[#368a8c] hover:opacity-50 md:border-white border-2">Nessi Joaquin</p>
                  </a>
                </div>

              </div>
              <hr className="my-6 mx-6 border-gray-200 lg:my-8" />
            </div>

            {/* ig */}
            <div className='w-full'>
              <div className='flex flex-col items-center justify-center'>
                <a className='flex justify-center items-center bg-[#368a8c] w-14 h-14' href="https://www.instagram.com/tjinmobiliria/" target='_blank'>
                  <AiFillInstagram size={"1.5rem"} className='hover:opacity-50 w-8 h-8' />
                </a>
                <a className='flex justify-center items-center' href="https://www.instagram.com/tjinmobiliria/" target='_blank'>
                  <p class="text-lg text-[#368a8c] sm:text-black">Instagram</p>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div >
    </>
  )
}