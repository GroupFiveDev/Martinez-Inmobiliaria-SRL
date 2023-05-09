import {
  AiFillInstagram,
} from 'react-icons/ai';

export default function Instagram() {
  return (
    <div className='w-full'>
      <div className='flex flex-col items-center justify-center'>
        <a className='flex justify-center items-center bg-[#368a8c] w-14 h-14' href="https://www.instagram.com/tjinmobiliria/" target='_blank'>
          <AiFillInstagram size={"1.5rem"} className='hover:opacity-50 w-8 h-8' />
        </a>
        <a className='flex justify-center items-center' href="https://www.instagram.com/tjinmobiliria/" target='_blank'>
          <p className="text-lg text-white font-Montserrat">Instagram</p>
        </a>
      </div>
    </div>
  )
}