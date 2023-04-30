import { useEffect, useState } from "react"
import Filter from "../filter/Filter"
import Pagination from "../pagination/Pagination"
import Card from "./Card"
import axios from 'axios'

export default function CardList() {

  const [fields, setFields] = useState([])
  const [boolean, setBoolean] = useState(false)

  useEffect(() => {
    (async function () {
      const fieldsDB = await axios.get("/fields")
      setFields(fieldsDB.data)
    })()
  }, [boolean])

  const [view, setView] = useState("grid");

  const toggleView = () => {
    setView(view === "grid" ? "list" : "grid");
  };

  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(6)

  const last = currentPage * cardsPerPage
  const first = last - cardsPerPage
  const currentCards = fields?.length ? fields.slice(first, last) : []
  const numberOfPages = fields.length && fields / cardsPerPage

  const pagination = (numberPage) => {
    setCurrentPage(numberPage);
    document.getElementById(`${currentPage}`).classList.remove('active');
    document.getElementById(`${numberPage}`).classList.toggle('active');
  }
  const handleNext = (event) => {
    event.preventDefault();
    currentPage <= numberOfPages ? setCurrentPage(currentPage + 1) : setCurrentPage(currentPage);
    document.getElementById(`${currentPage}`).classList.remove('active');
    currentPage <= numberOfPages ? document.getElementById(`${currentPage + 1}`).classList.toggle('active') :
      document.getElementById(`${currentPage}`).classList.toggle('active');
  }

  const handlePrevious = (event) => {
    event.preventDefault();
    currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(currentPage);
    document.getElementById(`${currentPage}`).classList.remove('active');
    currentPage > 1 ? document.getElementById(`${currentPage - 1}`).classList.toggle('active') :
      document.getElementById(`${currentPage}`).classList.toggle('active');
  }

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col w-fit">
        <div className="flex flex-col md:gap-0 md:flex-row md:justify-between items-center md:items-center">
          <Filter />
          <button onClick={toggleView}>Cambiar vista</button>
          <div className={`${fields?.length > 6 ? "" : "hidden"}`}>
            <Pagination cardsPerPage={cardsPerPage} cards={fields?.length} pagination={pagination} currentPage={currentPage}
              handlePrevious={handlePrevious} handleNext={handleNext} />
          </div>
        </div>
        <div className={`${view === "grid" ? "grid grid-cols-1 self-center md:gap-4 xl:grid-cols-3 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2" : ""}`}>
          {fields.length ? fields.map((card, i) => (
            <Card key={i} id={card.id} titulo={card.title} descripcion={card.description} hectareas={card.hectares} lotes={card.lots} ubicacion={card.location} terrain={card.terrain} price={card.price} images={card.images} boolean={boolean} sold={card.sold} setBoolean={setBoolean} archived={card.archived} />
          ))
            :
            [0, 1, 2, 3, 4, 5].map(e => {
              return (
                <div role="status" class="flex justify-center items-center space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                  <div className={`relative max-w-sm bg-white border border-gray-200 rounded-lg shadow m-3`}>
                    <div className="w-full py-10 flex justify-center items-center">
                      <svg class="w-56 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                    </div>
                    <div className="p-5 w-[382px]">
                      <div className="p-5">
                        <div class="w-full">
                          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                        </div>
                      </div>
                    </div>
                    <div className='absolute bottom-0 w-full flex justify-center items-center'>
                      <button type="button" className="bottom-0 w-[90%] text-white bg-gray-200 font-medium rounded-lg text-sm px-2.5 py-2 inline-flex justify-center items-center mr-2 mb-2 mt-2">
                      </button>
                    </div>
                    <button type="button" className="absolute top-0 right-0 text-white bg-gray-200font-medium rounded-lg text-sm px-2.5 py-2 text-center inline-flex items-center mr-2 mb-2 mt-2">
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
