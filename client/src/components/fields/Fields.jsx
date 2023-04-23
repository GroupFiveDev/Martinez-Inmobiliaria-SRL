import CardList from "../card/CardList"
import Pagination from "../pagination/Pagination"

export default function Fields() {
  return (
    <>
      <div className="m-10 mt-5 mb-5 flex flex-col items-center " id="campos">
        <h1 className="text-3xl font-bold underline text-center">ÚLTIMAS PROPIEDADES AGREGADAS</h1>
        <div className="relative">
          <CardList />
        </div>
      </div>
    </>
  )
}