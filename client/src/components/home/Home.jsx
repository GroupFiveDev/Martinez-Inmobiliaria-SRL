import Fields from "../fields/Fields"
import WhatsApp from "../whatsApp/WhatsApp"

export default function Home() {
  window.scrollTo({ top: 0, left: 0 })
  return (
    <>
      <Fields />
      <WhatsApp />
    </>
  )
}