import { useEffect, useState } from "react"
import Filter from "../filter/Filter"
import Pagination from "../pagination/Pagination"
import Card from "./Card"
import axios from 'axios'

export default function CardList() {
  const [fields, setFields] = useState([])

  useEffect(() => {
    (async function () {
      const fieldsDB = await axios.get("/fields")
      setFields(fieldsDB.data)
    })()
  }, [])

  return (
    <>
      <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-center md:items-center">
        <Filter />
        <div className={`${fields?.length > 5 ? "" : "hidden"}`}>
          <Pagination />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2">
        {fields ? fields?.map((card, i) => (
          <Card key={i} id={card.id} type={card.type} titulo={card.title} descripcion={card.description} hectareas={card.hectares} lotes={card.lots} ubicacion={card.location} terrain={card.terrain} price={card.price} images={card.images} />
        )) : ""}
      </div>
    </>
  )
}
