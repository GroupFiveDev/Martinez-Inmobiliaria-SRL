import { useEffect, useState } from "react"
import Card from "../card/Card"
import { useAuth } from "../../context/authContext"
import { useNavigate } from "react-router-dom"
import apiService from "../../services/apiService"

export default function Archives() {
  const { user } = useAuth()
  const [properties, setProperties] = useState([])
  const [boolean, setBoolean] = useState(false)

  useEffect(() => {
    (async function () {
      const result = await apiService.getProperties()
      setProperties(result.data.filter(e => e.archived))
    })()
  }, [boolean])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [])


  if (!user) return (
    <div>
      <h1>No sos admin.</h1>
      {window.location.assign('/')}
    </div>
  )

  return (
    <>
      <div className={`${properties?.length ? "" : "h-screen"} flex flex-col justify-center items-center bg-[#F3F4F6]`}>
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