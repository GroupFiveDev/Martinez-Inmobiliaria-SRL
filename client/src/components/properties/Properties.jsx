import CardList from "../card/CardList"

export default function Fields() {
  return (
    <>
      <div className="py-5 flex flex-col bg-gray-100" id="campos">
        <h1 className="md:text-3xl text-2xl text-center font-bold text-gray-800 mb-3 font-Montserrat">NUESTRAS PROPIEDADES</h1>
        <CardList />
      </div>
    </>
  )
}