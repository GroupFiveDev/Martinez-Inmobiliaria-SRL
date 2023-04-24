import oficina_afuera from '../../assets/oficina/oficina_afuera.jpeg'
import WhatsApp from './contacInfo/WhatsApp';
import Location from './contacInfo/Location';
import Phone from './contacInfo/Phone';



export default function Contact() {
  window.scrollTo({ top: 0, left: 0 })
  return (
    <>
      <div className="bg-[#51535B] relative md:flex">
        <div className=" bg-[#51535B] flex flex-col items-center md:bg-[#368a8c]">
          <p className="text-4xl font-semibold text-[#368a8c] mb-5 font-Montserrat md:text-gray-600">Contacto</p>
          {/* Contacto informacion */}
          <div className='w-full flex flex-col items-center'>
            <WhatsApp />
            <Location />
            <Phone />
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row'>
          <div className='bg-blue-500 w-full md:w-[50%]'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d206.9860972547997!2d-61.099614400672394!3d-33.89538231200112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1682359002712!5m2!1ses!2sar" className='w-full h-96 md:h-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='bg-purple-500 w-full md:w-[50%]'>
            <img src={oficina_afuera} alt="oficina_afuera" className='w-full h-full' />
          </div>
        </div>
      </div >
    </>
  )
}