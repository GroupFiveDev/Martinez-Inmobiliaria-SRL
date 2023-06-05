import { useEffect, useState } from "react";
import Filter from "../filter/Filter";
import Pagination from "../pagination/Pagination";
import Card from "./Card";
import axios from "axios";
import Skeleton from "../skeleton/Skeleton";
import Card2 from "./Card2";

export default function CardList() {
  const [properties, setProperties] = useState([]);
  const [boolean, setBoolean] = useState(false);

  const [view, setView] = useState("grid");

  const toggleView = () => {
    setView(view === "grid" ? "list" : "grid");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage] = useState(6);

  const last = currentPage * propertiesPerPage;
  const first = last - propertiesPerPage;
  const currentproperties = properties.slice(first, last);
  const numberOfPages = properties.length / propertiesPerPage;

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

  useEffect(() => {
    (async function () {
      const propertiesDB = await axios.get("/properties");
      setProperties(propertiesDB.data.filter(e => e.archived === false));
    })();
  }, [boolean]);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col w-fit">
        <div className={`${view !== "grid" && "mx-10"} flex flex-col md:gap-0 md:flex-row md:justify-between items-center md:items-center`}>
          <Filter setProperties={setProperties} />
          <button
            aria-label="toggleView"
            onClick={toggleView}
            className="hidden md:flex w-fit text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
          >
            Cambiar vista
          </button>
          <div className={`${properties?.filter((e) => !e.archived).length > 6 ? "" : "hidden"}`} >
            <Pagination
              propertiesPerPage={propertiesPerPage}
              properties={properties?.length}
              pagination={pagination}
              currentPage={currentPage}
              handlePrevious={handlePrevious}
              handleNext={handleNext}
            />
          </div>
        </div>
        <div
          className={`${view === "grid"
            ? "grid grid-cols-1 self-center md:gap-4 xl:grid-cols-3 2xl:grid-cols-3 lg:grid-cols-2 m:grid-cols-2"
            : "w-screen"
            }`}
        >
          {currentproperties.length
            ? currentproperties.map(
              view === "grid"
                ? (card, i) =>
                  // !card.archived && (
                  <Card
                    key={i}
                    id={card.id}
                    type={card.type}
                    titulo={card.title}
                    descripcion={card.description}
                    hectareas={card.hectares}
                    rooms={card.rooms}
                    bathrooms={card.bathrooms}
                    garage={card.garage}
                    square={card.square}
                    ubicacion={card.location}
                    terrain={card.terrain}
                    price={card.price}
                    images={card.images}
                    boolean={boolean}
                    sold={card.sold}
                    setBoolean={setBoolean}
                    archived={card.archived}
                  />
                // )
                : (card, i) =>
                  !card.archived && (
                    <Card2
                      key={i}
                      id={card.id}
                      type={card.type}
                      titulo={card.title}
                      descripcion={card.description}
                      hectareas={card.hectares}
                      rooms={card.rooms}
                      bathrooms={card.bathrooms}
                      garage={card.garage}
                      square={card.square}
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
        <div className={`${properties?.length <= 6 ? "hidden" : ""} w-full flex justify-center`}>
          <Pagination
            propertiesPerPage={propertiesPerPage}
            properties={properties?.length}
            pagination={pagination}
            currentPage={currentPage}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
          />
        </div>
      </div>
    </div>
  );
}
