import {
  AiTwotonePhone
} from 'react-icons/ai';


export default function Phone() {
  return (
    <div className='w-full'>

      <div className='flex justify-center'>
        <a aria-label="phone" className='flex justify-center items-center bg-[#368a8c] w-14 h-14' href="https://wa.me/2473509269?text=Hola%20me%20interesaria%20charlar%20sobre%20una%20propiedad%20en%20especifico." target="_blank">
          <AiTwotonePhone className='hover:opacity-50 w-8 h-8' />
        </a>
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
        <p className="text-lg text-white font-Montserrat">Llamanos</p>
        <div className='flex flex-col justify-center items-center gap-4 mt-4'>
          <a aria-label="phone" href="tel:2473509269" target="_blank" className='hover:cursor-pointer'>
            <p className="text-lg text-white p-3 border-[#368a8c] hover:opacity-50 md:border-white border-2">Martinez Thiago</p>
          </a>
          <a aria-label="phone" href="tel:2473509269" target="_blank" className='hover:cursor-pointer'>
            <p className="text-lg text-white p-3 border-[#368a8c] hover:opacity-50 md:border-white border-2">Nessi Joaquin</p>
          </a>
        </div>

      </div>
    </div>
  )
}