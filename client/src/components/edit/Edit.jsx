import editIc from "../../assets/icons/edit.webp"

export default function Edit({ value, onClick, user }) {
  return (
    <img src={editIc} alt="check" className={`${value && user ? "hidden" : !value && user ? "flex" : "hidden"} w-7 h-7 hover:cursor-pointer hover:opacity-40`} onClick={onClick} />
  )
}