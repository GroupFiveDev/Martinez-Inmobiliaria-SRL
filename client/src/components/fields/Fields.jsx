import CardList from "../card/CardList"

export default function Fields() {
  return (
    <>
      <div className="m-10 mt-5 mb-5 flex flex-col items-center " id="campos">
        <h1 className="md:text-3xl text-2xl text-center font-bold text-gray-800 mb-3 md:mb-0 font-Montserrat">ÚLTIMAS PROPIEDADES AGREGADAS</h1>
        <div className="relative">
          <CardList />
        </div>
      </div>
    </>
  )
}