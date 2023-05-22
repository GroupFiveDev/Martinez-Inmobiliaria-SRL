import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../card/Card"
import Skeleton from "../skeleton/Skeleton"
import { useAuth } from "../../context/authContext"
import { useHistory } from "react-router-dom"

export default function Archives() {
  const { user } = useAuth()
  const history = useHistory()
  const [properties, setProperties] = useState([])
  const [boolean, setBoolean] = useState(false)

  useEffect(() => {
    (async function () {
      const result = await axios.get("/properties")
      setProperties(result.data.filter(e => e.archived))
    })()
    !user && history.push("/")
  }, [boolean])

  return (
    <>
      <div className={`${properties?.length ? "" : "h-screen"} flex flex-col justify-center items-center`}>
        <h1 className="md:text-3xl text-2xl text-center font-bold text-gray-800 mb-3 md:mb-0 font-Montserrat">PROPIEDADES ARCHIVADAS</h1>
        <div className="grid grid-cols-1 self-center md:gap-4 xl:grid-cols-3 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2">
          {
            properties.length ? properties.map((card, i) => <Card key={i} type={card.type} id={card.id} titulo={card.title} descripcion={card.description} hectareas={card.hectares} lotes={card.lots} bathrooms={card.bathrooms} rooms={card.rooms} ubicacion={card.location} terrain={card.terrain} price={card.price} images={card.images} garage={card.garage} square={card.square} sold={card.sold} archived={card.archived} boolean={boolean}
              setBoolean={setBoolean} />)
              :
              undefined
          }
        </div>
        {
          properties.length ? undefined :
            <div className="flex justify-center w-full">
              <h1>No hay propiedades archivadas</h1>
            </div>
        }
      </div>
    </>
  )
}