import CardList from "../card/CardList"
import Pagination from "../pagination/Pagination"

export default function Fields() {
  return (
    <>
      <div className="m-auto mt-5 mb-5 flex flex-col items-center ">
        <h1 className="text-3xl font-bold underline text-center m-3">ÚLTIMAS PROPIEDADES AGREGADAS</h1>
        <div className="relative">
          <div className="w-100 flex justify-end mr-20 mt-10 mb-10" >
            <Pagination />
          </div>
          <CardList />
        </div>
      </div>
    </>
  )
}