import { useEffect } from "react"
import Fields from "../fields/Fields"
import WhatsApp from "../whatsApp/WhatsApp"

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [])

  return (
    <>
      <div className='h-[300px] md:h-[600px] div-image-home' />
      <Fields />
      <WhatsApp />
    </>
  )
}