import Fields from "../fields/Fields"
import WhatsApp from "../whatsApp/WhatsApp"

export default function Home() {
  window.scrollTo({ top: 0, left: 0 })
  return (
    <>
      <div className='h-[300px] md:h-[600px] div-image-home'>
      </div>
      <Fields />
      <WhatsApp />
    </>
  )
}