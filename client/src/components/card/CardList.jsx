import Filter from "../filter/Filter"
import Pagination from "../pagination/Pagination"
import Card from "./Card"


let cards = [
  {
    id: 1,
    titulo: "Campo Los Alamos",
    descripcion: "Hermoso campo con amplia vegetación y zona de pastoreo para ganado.",
    hectareas: 1000,
    precio: 5000000,
    lotes: 10,
    ubicacion: "Provincia de Buenos Aires"
  },
  {
    id: 2,
    titulo: "Campo La Esperanza",
    descripcion: "Campo ideal para agricultura y ganadería, con amplio terreno y fértil suelo.",
    hectareas: 800,
    precio: 6000000,
    lotes: 8,
    ubicacion: "Provincia de Córdoba"
  },
  {
    id: 3,
    titulo: "Estancia San Martin",
    descripcion: "Gran estancia con vistas panorámicas de las montañas y amplio terreno para caza y pesca.",
    hectareas: 5000,
    precio: 15000000,
    lotes: 50,
    ubicacion: "Provincia de Chubut"
  },
  {
    id: 4,
    titulo: "Campo El Zorzal",
    descripcion: "Hermoso campo con amplia vegetación y zona de pastoreo para ganado.",
    hectareas: 1200,
    precio: 5500000,
    lotes: 12,
    ubicacion: "Provincia de Buenos Aires"
  },
  {
    id: 5,
    titulo: "Campo El Potrerillo",
    descripcion: "Campo ideal para agricultura y ganadería, con amplio terreno y fértil suelo.",
    hectareas: 600,
    precio: 4000000,
    lotes: 6,
    ubicacion: "Provincia de San Luis"
  },
  {
    id: 6,
    titulo: "Estancia Los Tamarindos",
    descripcion: "Gran estancia con vistas panorámicas de las montañas y amplio terreno para caza y pesca.",
    hectareas: 4500,
    precio: 20000000,
    lotes: 45,
    ubicacion: "Provincia de Río Negro"
  },
  {
    id: 7,
    titulo: "Campo La Argentina",
    descripcion: "Hermoso campo con amplia vegetación y zona de pastoreo para ganado.",
    hectareas: 900,
    precio: 4500000,
    lotes: 9,
    ubicacion: "Provincia de Buenos Aires"
  },
  {
    id: 8,
    titulo: "Campo El Recuerdo",
    descripcion: "Campo ideal para agricultura y ganadería, con amplio terreno y fértil suelo.",
    hectareas: 700,
    precio: 5500000,
    lotes: 7,
    ubicacion: "Provincia de Córdoba"
  },
  {
    id: 9,
    titulo: "Estancia Los Corrales",
    descripcion: "Gran estancia con vistas panorámicas de las montañas y amplio terreno para caza y pesca.",
    hectareas: 6000,
    precio: 18000000,
    lotes: 60,
    ubicacion: "Provincia de Neuquén"
  },
  {
    id: 10,
    titulo: "Campo La Providencia",
    descripcion: "Hermoso campo con amplia vegetación y zona de pastoreo para ganado.",
    hectareas: 1100,
    precio: 6000000,
    lotes: 11,
    ubicacion: "Provincia de Buenos Aires"
  }]

export default function CardList() {
  return (
    <>
      <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-center md:items-center">
        <Filter />
        <Pagination />
      </div>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2">
        {cards.map((card, i) => (
          <Card key={i} id={card.id} titulo={card.titulo} descripcion={card.descripcion} hectareas={card.hectareas} lotes={card.lotes} ubicacion={card.ubicacion} />
        ))}
      </div>
    </>
  )
}
