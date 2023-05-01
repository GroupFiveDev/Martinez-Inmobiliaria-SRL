import { useEffect, useState } from "react";
import Filter from "../filter/Filter";
import Pagination from "../pagination/Pagination";
import Card from "./Card";
import Card2 from "./Card2";
import axios from "axios";

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
  const currentCards = fields.slice(first, last);
  const numberOfPages = fields.length / cardsPerPage;

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
    <div className="flex flex-col w-screen p-10">
      <button onClick={toggleView}>Cambiar vista</button>
      <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-center md:items-center">
        <Filter />
        <div className={`${fields?.length > 6 ? "" : "hidden"}`}>
          <Pagination
            cardsPerPage={cardsPerPage}
            cards={fields.length}
            pagination={pagination}
            currentPage={currentPage}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
          />
        </div>
      </div>
      <div>
        <div
          className={`${
            view === "grid"
              ? "grid grid-cols-1 gap-4 xl:grid-cols-3 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2"
              : ""
          }`}
        >
          {fields.length &&
            fields.map((card, i) =>
              view === "grid" ? (
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
                  setBoolean={setBoolean}
                />
              ) : (
                <Card2 />
              )
            )}
        </div>
      </div>
    </div>
  );
}
