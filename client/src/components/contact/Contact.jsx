import oficina_afuera from '../../assets/oficina/oficina_afuera.jpeg'
import WhatsApp from './contacInfo/WhatsApp';
import Location from './contacInfo/Location';
import Phone from './contacInfo/Phone';



export default function Contact() {
  window.scrollTo({ top: 0, left: 0 })
  return (
    <>
      <div className="bg-[#51535B] relative md:flex">
        <div className=" bg-[#51535B] flex flex-col items-center md:bg-[#368a8c] pb-5">
          <p className="text-4xl font-semibold text-[#368a8c] mb-5 font-Montserrat md:text-gray-600">Contacto</p>
          {/* Contacto informacion */}
          <div className='w-full flex flex-col items-center'>
            <WhatsApp />
            <Location />
            <Phone />
          </div>
        </div>
        <div className='w-full flex flex-col justify-center md:flex-row bg-[#368a8c]'>
          <div className='w-full md:w-[70%]'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d413.97177353734!2d-61.099512346626284!3d-33.89546903390623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b811bbc706b3b1%3A0xe5934e09909f2d36!2sT.Martinez%20%26%20J.Nessi!5e0!3m2!1ses!2sar!4v1682378252761!5m2!1ses!2sar" className='w-full h-96 md:h-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div >
    </>
  )
}