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
        <div className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <button onClick={(e) => handlePrevious(e)}>«</button>
        </div>
        {numOfPages?.map((page) => {
          return (
            <button
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              id={page}
              key={page}
              onClick={() => pagination(page)}
            >
              {page}
            </button>
          );
        })}
        <div className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <button onClick={(e) => handleNext(e)}>»</button>
        </div>
      </div>
    </div>
  );
}
