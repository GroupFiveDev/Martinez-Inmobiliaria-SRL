import checkIc from "../../assets/icons/check.png"

export default function Check({ value, onClick }) {
  return (
    <img src={checkIc} alt="check" className={`${value ? "flex" : "hidden"} w-8 h-8 hover:cursor-pointer hover:opacity-40`} onClick={onClick} />
  )
}