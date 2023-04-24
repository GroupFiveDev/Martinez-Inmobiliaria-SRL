import {
  HiLocationMarker
} from 'react-icons/hi';

export default function Location() {
  return (
    <div className='w-full'>
      <div className='flex justify-center'>
        <a className='flex justify-center items-center bg-[#368a8c] w-14 h-14' href="https://www.google.com/maps/place/-33.895401,+-61.099643/@-33.8954262,-61.0994997,21z/data=!4m4!3m3!8m2!3d-33.8954009!4d-61.0996432?hl=es" target="_blank">
          <HiLocationMarker className='hover:opacity-50 w-8 h-8' />
        </a>
      </div>
      <div className='w-full flex flex-col items-center justify-center gap-4 px-4'>
        <p class="text-lg text-[#368a8c] md:text-gray-600 font-Montserrat">Ubicación</p>
        <p class="text-lg text-white">Calle 49, esquina 18.Colón, Buenos Aires.</p>
        <p class="text-lg text-white">Calle 49 y 18.Colón, Buenos Aires.</p>
        <a href="https://www.google.com/maps/place/-33.895401,+-61.099643/@-33.8954262,-61.0994997,21z/data=!4m4!3m3!8m2!3d-33.8954009!4d-61.0996432?hl=es" target="_blank" class="text-lg text-white p-3 border-[#368a8c] md:border-white border-2 hover:opacity-50">Abrir en el mapa</a>
      </div>
      <hr className="my-6 mx-6 border-gray-200 lg:my-8" />
    </div>
  )
}