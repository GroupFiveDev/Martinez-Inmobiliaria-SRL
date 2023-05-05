import { useEffect } from "react"
import Fields from "../fields/Fields"
import WhatsApp from "../whatsApp/WhatsApp"
import { useDrawer } from "../../hooks/useDrawer"
import Drawer from "../drawer/Drawer"
import { useAuth } from "../../context/authContext"

export default function Home() {
  const { isOpen, openDrawer, closeDrawer } = useDrawer()
  const { user } = useAuth()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [])

  return (
    <>
      <button onClick={openDrawer} className={`${user ? "flex" : ""}hidden fixed top-0 left-0 bg-red-500 p-5 rounded-2xl z-50`}>ADMIN</button>
      <Drawer isOpen={isOpen} closeDrawer={closeDrawer} />
      <div className='h-[300px] md:h-[600px] div-image-home' />
      <Fields />
      <WhatsApp />
      <h1>NBame:{user?.email}</h1>
    </>
  )
}