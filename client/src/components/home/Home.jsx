import { useEffect } from "react"
import Properties from "../properties/Properties"
import WhatsApp from "../whatsApp/WhatsApp"

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [])

  return (
    <>
      <Properties />
      <WhatsApp />
    </>
  )
}