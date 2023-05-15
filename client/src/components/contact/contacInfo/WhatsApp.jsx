import {
  AiOutlineWhatsApp,
} from 'react-icons/ai';

export default function WhatsApp() {
  return (
    <div className='w-full'>

      <div className='flex justify-center'>
        <a aria-label="wsp" className='flex justify-center items-center bg-[#368a8c] w-14 h-14' href="https://wa.me/2473509269?text=Hola%20me%20interesaria%20charlar%20sobre%20una%20propiedad%20en%20especifico." target="_blank">
          <AiOutlineWhatsApp className='hover:opacity-50 w-8 h-8' />
        </a>
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
        <p className="text-lg text-white font-Montserrat">WhatsApp</p>
        <p className="text-lg text-white">+54 2473-509269</p>
        <p className="text-lg text-white">+54 2473</p>
      </div>
      <hr className="my-6 mx-6 border-gray-200 lg:my-8" />
    </div>
  )
}