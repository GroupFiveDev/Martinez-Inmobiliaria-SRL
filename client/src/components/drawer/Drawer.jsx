import { Link } from "react-router-dom"
import { logout } from "../../context/authContext"

export default function Drawer({ isOpen, closeDrawer }) {
  const handleCloseDrawer = e => e.stopPropagation()

  async function handleLogout() {
    await logout()
    closeDrawer()
  }

  return (
    <div className={`bg-transparent w-[100%] h-screen top-0 fixed z-[60] ${isOpen ? "" : "hidden"} animate-movimientoLeftRight`} onClick={closeDrawer}>
      <div className="w-full md:w-[30%] lg:w-[20%] sm:w-[30%] h-screen bg-[#1e4f50] fixed top-0 left-0 z-60" onClick={handleCloseDrawer}>
        <button aria-label="close" className="absolute top-0 right-0 m-4 text-xl text-white hover:text-black font-bold font-Montserrat" onClick={closeDrawer}>X</button>
        <div className="w-full flex flex-col items-center justify-center mt-5 gap-5">
          <h1 className="my-1 text-white font-bold font-Montserrat text-xl">Admin</h1>
          <Link to="/Create">
            <button aria-label="property" onClick={closeDrawer} type="button" className="text-white bg-[#368a8c] hover:bg-[#1b4546] focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5">Subir propiedad</button>
          </Link>
          <Link to="/Archivados">
            <button aria-label="archived" onClick={closeDrawer} type="button" className="text-white bg-[#368a8c] hover:bg-[#1b4546] focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5">Archivados</button>
          </Link>
          <button aria-label="quit" onClick={handleLogout} type="button" className="text-white bg-black hover:bg-red-500 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5">Salir del modo admin</button>
        </div>
      </div>
    </div>
  )
}