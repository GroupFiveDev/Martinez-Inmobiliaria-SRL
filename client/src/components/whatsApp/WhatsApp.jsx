import {
  AiOutlineWhatsApp
} from 'react-icons/ai';


export default function WhatsApp() {
  return (
    <>
      <div className='fixed bottom-4 left-4 bg-[#2d6c6d] rounded-full p-2 hover:cursor-pointer'>
        <a href="https://wa.me/2473509269?text=Hola%20me%20interesaria%20charlar%20sobre%20una%20propiedad%20en%20especifico." target="_blank">
          <AiOutlineWhatsApp className='w-12 h-12 ' color='white' />
        </a>
      </div>
    </>
  )
}