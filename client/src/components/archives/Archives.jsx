import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../card/Card"
import Skeleton from "../skeleton/Skeleton"

export default function Archives() {
  const [fields, setFields] = useState([])
  const [departaments, setDepartaments] = useState([])
  const [boolean, setBoolean] = useState(false)

  //Fetching fields
  useEffect(() => {
    (async function () {
      const result = await axios.get("/fields")
      setFields(result.data)
    })()
  }, [boolean])

  //Fetching departaments
  // useEffect(() => {
  // (async function () {
  //   const result = await axios.get("/departaments")
  //   setDepartaments(result.data)
  // })()
  // }, [])


  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="md:text-3xl text-2xl text-center font-bold text-gray-800 mb-3 md:mb-0 font-Montserrat">PROPIEDADES ARCHIVADAS</h1>
        <div className="grid grid-cols-1 self-center md:gap-4 xl:grid-cols-3 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2">
          {
            fields.length ? fields.map((card, i) => card.archived && <Card key={i} id={card.id} titulo={card.title} descripcion={card.description} hectareas={card.hectares} lotes={card.lots} ubicacion={card.location} terrain={card.terrain} price={card.price} images={card.images} sold={card.sold} archived={card.archived} boolean={boolean}
              setBoolean={setBoolean} />)
              :
              [0, 1, 2, 3, 4, 5].map((e, i) => <Skeleton key={i} />)
          }
          {/* El mismo mapeo para cuando este el el back de los departamentos */}
        </div>
      </div>
    </>
  )
}