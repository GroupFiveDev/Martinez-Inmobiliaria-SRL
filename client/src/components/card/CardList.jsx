import { useEffect, useState } from "react";
import Filter from "../filter/Filter";
import Pagination from "../pagination/Pagination";
import Card from "./Card";
import axios from "axios";
import Skeleton from "../skeleton/Skeleton";
import Card2 from "./Card2";

export default function CardList() {
  const [fields, setFields] = useState([]);
  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    (async function () {
      const fieldsDB = await axios.get("/fields");
      setFields(fieldsDB.data);
    })();
  }, [boolean]);

  const [view, setView] = useState("grid");

  const toggleView = () => {
    setView(view === "grid" ? "list" : "grid");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);

  const last = currentPage * cardsPerPage;
  const first = last - cardsPerPage;
  const currentCards = fields?.length ? fields.slice(first, last) : [];
  const numberOfPages = fields.length && fields / cardsPerPage;

  const pagination = (numberPage) => {
    setCurrentPage(numberPage);
    document.getElementById(`${currentPage}`).classList.remove("active");
    document.getElementById(`${numberPage}`).classList.toggle("active");
  };
  const handleNext = (event) => {
    event.preventDefault();
    currentPage <= numberOfPages
      ? setCurrentPage(currentPage + 1)
      : setCurrentPage(currentPage);
    document.getElementById(`${currentPage}`).classList.remove("active");
    currentPage <= numberOfPages
      ? document.getElementById(`${currentPage + 1}`).classList.toggle("active")
      : document.getElementById(`${currentPage}`).classList.toggle("active");
  };

  const handlePrevious = (event) => {
    event.preventDefault();
    currentPage > 1
      ? setCurrentPage(currentPage - 1)
      : setCurrentPage(currentPage);
    document.getElementById(`${currentPage}`).classList.remove("active");
    currentPage > 1
      ? document.getElementById(`${currentPage - 1}`).classList.toggle("active")
      : document.getElementById(`${currentPage}`).classList.toggle("active");
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col w-fit">
        <div className="w-full flex justify-center">
          <div className="flex flex-col md:gap-0 md:flex-row md:justify-between items-center md:items-center mb-2 w-[98%]">
            <Filter />
            <button onClick={toggleView} className=" w-fit text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">Cambiar vista</button>
            <div className={`${fields?.filter(e => !e.archived).length > 6 ? "" : "hidden"}`}>
              <Pagination cardsPerPage={cardsPerPage} cards={fields?.length} pagination={pagination} currentPage={currentPage}
                handlePrevious={handlePrevious} handleNext={handleNext} />
            </div>
          </div>
        </div>
        <div
          className={`${view === "grid"
            ? "grid grid-cols-1 self-center md:gap-4 xl:grid-cols-3 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2"
            : "w-[1300px]"
            }`}
        >
          {fields.length
            ? fields.map(
              view === "grid"
                ? (card, i) =>
                  !card.archived && (
                    <Card
                      key={i}
                      id={card.id}
                      titulo={card.title}
                      descripcion={card.description}
                      hectareas={card.hectares}
                      lotes={card.lots}
                      ubicacion={card.location}
                      terrain={card.terrain}
                      price={card.price}
                      images={card.images}
                      boolean={boolean}
                      sold={card.sold}
                      setBoolean={setBoolean}
                      archived={card.archived}
                    />
                  )
                : (card, i) =>
                  !card.archived && (
                    <Card2
                      key={i}
                      id={card.id}
                      titulo={card.title}
                      descripcion={card.description}
                      hectareas={card.hectares}
                      lotes={card.lots}
                      ubicacion={card.location}
                      terrain={card.terrain}
                      price={card.price}
                      images={card.images}
                      boolean={boolean}
                      sold={card.sold}
                      setBoolean={setBoolean}
                      archived={card.archived}
                    />
                  )
            )
            : [0, 1, 2, 3, 4, 5].map((e, i) => <Skeleton key={e + "*"} />)}
        </div>
      </div>
    </div>
  );
}
