
export default function Drawer({ isOpen, closeModal }) {
  const handleCloseModal = e => e.stopPropagation()

  return (
    <div className={`bg-transparent w-[100%] h-screen top-0 fixed z-50 ${isOpen ? "" : "hidden"}`} onClick={closeModal}>
      <div className="w-[20%] h-screen bg-green-500 fixed top-0 left-0 z-60" onClick={handleCloseModal}>
        <button className="absolute top-0 right-0 m-4 text-xl" onClick={closeModal}>X</button>
        <div className="w-full flex flex-col items-center justify-center mt-5">
          <h1 className="my-1 text-white">Admin</h1>
          <button type="button" class="text-white bg-[#368a8c] hover:bg-[#1b4546] focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Subir campo</button>
          <button type="button" class="text-white bg-[#368a8c] hover:bg-[#1b4546] focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Subir departamento</button>
          <button type="button" class="text-white bg-[#368a8c] hover:bg-[#1b4546] focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Archivados</button>
          <button type="button" class="text-white bg-black hover:bg-red-500 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Salir del modo admin</button>
        </div>
      </div>
    </div>
  )
}