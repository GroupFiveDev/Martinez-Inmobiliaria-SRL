import closeIc from "../../assets/icons/close.png"

export default function Close({ value, onClick }) {
  return (
    <img src={closeIc} alt="close" className={`${value ? "flex" : "hidden"} w-8 h-8 hover:cursor-pointer hover:opacity-40`} onClick={onClick} />

  )
}