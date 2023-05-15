export default function Modal({ children, isOpen, closeModal }) {

  function handleCloseModal(e) {
    e.stopPropagation()
  }

  const body = document.getElementById("body")
  if (isOpen) {
    body.className = "overflow-y-hidden"
  } else {
    body.className = ""
  }

  return (
    <div className={`${isOpen === false ? "hidden" : "flex"} w-full h-screen fixed top-0 left-0 z-50 justify-center items-center bg-[#2f3434a0]`} onClick={closeModal}>
      <div className="fixed flex flex-col justify-center items-center min-w-[320px] max-w-[480px] min-h-[150px] max-h-[600px] text-center bg-gray-700 rounded-lg" onClick={handleCloseModal}>
        <button name="close" onClick={closeModal} className="text-white font-Montserrat absolute top-0 right-0 m-3"> X </button>
        {children}
      </div>
    </div>
  )
}