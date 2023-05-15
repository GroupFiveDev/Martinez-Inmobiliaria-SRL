import { useEffect } from "react"
import Fields from "../fields/Fields"
import WhatsApp from "../whatsApp/WhatsApp"
import video from '../../assets/la_perla/video_xl_1903_750.mp4'
import video2 from '../../assets/la_perla/video_sm.mp4'

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [])

  return (
    <>
      <div className='h-[82vh] md:h-[80vh]'>
        <video controls={false} autoPlay loop muted className="h-full w-full hidden sm:flex object-cover">
          <source src={video} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <video controls={false} autoPlay loop muted className="h-full w-full flex sm:hidden object-cover">
          <source src={video2} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
      <Fields />
      <WhatsApp />
    </>
  )
}