export default function ModalImage({ children, isOpen, closeModal, images }) {
  function handleCloseModal(e) {
    e.stopPropagation()
  }
  return (
    <div className={`${isOpen === false ? "hidden" : "flex"} w-full h-screen fixed top-0 left-0 z-50 justify-center items-center`} onClick={closeModal}>
      <div className="fixed flex flex-col justify-center items-center text-center bg-gray-700 rounded-lg" onClick={handleCloseModal}>
        <button aria-label="close" onClick={closeModal} className="text-white font-Montserrat absolute top-0 right-0 m-3"> X </button>
        {children}
      </div>
    </div>
  )
}