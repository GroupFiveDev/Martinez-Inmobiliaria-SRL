import { useDrawer } from "../../hooks/useDrawer"
import Drawer from "../drawer/Drawer"
import Fields from "../fields/Fields"
import WhatsApp from "../whatsApp/WhatsApp"

export default function Home() {
  window.scrollTo({ top: 0, left: 0 })
  const { openModal, isOpen, closeModal } = useDrawer()
  return (
    <>
      <div className='h-[300px] md:h-[600px] div-image-home' />
      <button onClick={openModal} className="fixed top-0 left-0 bg-red-500 p-5 rounded-2xl z-50">ADMIN</button>
      <Drawer isOpen={isOpen} closeModal={closeModal} />
      <Fields />
      <WhatsApp />
    </>
  )
}