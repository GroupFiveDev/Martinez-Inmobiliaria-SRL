export default function Pagination({
  propertiesPerPage,
  properties,
  pagination,
  handleNext,
  handlePrevious,
  currentPage,
}) {
  const numOfPages = [];
  const amountOfPages = Math.ceil(properties / propertiesPerPage);
  for (let i = 1; i <= amountOfPages; i++) {
    numOfPages.push(i);
  }
  return (
    <div>
      <div className="inline-flex items-center -space-x-px">
        <div onClick={(e) => handlePrevious(e)} className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer">
          <button>«</button>
        </div>
        {numOfPages?.map((page) => {
          return (
            <button
              className={` ${currentPage === page ? "bg-gray-300" : "bg-white"} px-3 py-2 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
              id={page}
              key={page}
              onClick={() => pagination(page)}
            >
              {page}
            </button>
          );
        })}
        <div onClick={(e) => handleNext(e)} className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer">
          <button>»</button>
        </div>
      </div>
    </div>
  );
}
