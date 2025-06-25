import { useState } from "react";
import apiService from "../../services/apiService";

export default function Filter({ setProperties }) {
  const [filterValue, setFilterValue] = useState({});

  async function handleChange(e) {
    if (e.target.name === "boton") {
      if (e.target.value === filterValue?.where?.type) {
        filterValue.where = {};
      } else {
        filterValue.where = { "type": e.target.value };
      }
    } else {
      filterValue.order = [[
        e.target.value.split(",")[0],
        e.target.value.split(",")[1],
      ]];
    }
    const result = await apiService.getFilteredProperties(JSON.stringify(filterValue));
    setProperties(result.data);
  }

  return (
    <>
      <select
        className="w-fit text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        onChange={handleChange}
      >
        <option value={["createdAt", "DESC"]}>Nuevas propiedades</option>
        <option value={["createdAt", "ASC"]}>Propiedades mas antiguas</option>
        <option value={["price", "ASC"]}>Precio(Bajo a alto)</option>
        <option value={["price", "DESC"]}>Precio(Alto a bajo)</option>
      </select>
      <button
        className={`my-3 md:my-0 w-fit text-center border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 ${filterValue?.where?.type === "field" ? "bg-[#368a8c]" : "bg-gray-50"}`}
        onClick={handleChange}
        name="boton"
        value="field"
        aria-label="fields"
      >
        {" "}
        Campos{" "}
      </button>
      <button
        className={`mb-3 md:my-0 w-fit text-center  ${filterValue?.where?.type === "apartment" ? "bg-[#368a8c]" : "bg-gray-50"} border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5`}
        onClick={handleChange}
        name="boton"
        value="apartment"
        aria-label="apartments"
      >
        {" "}
        Departamentos{" "}
      </button >
    </>
  );
}
