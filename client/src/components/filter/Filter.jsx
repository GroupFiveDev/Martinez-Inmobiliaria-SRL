import axios from "axios";
import { useState } from "react";

export default function Filter({ setProperties }) {
  const [filterValue, setFilterValue] = useState(null);
  const [orderValue, setOrderValue] = useState(null);
  async function handleChange(e) {
    console.log(e.target.value, e.target.id);
    const value = { order: null, filter: null };

    if (e.target.name === "boton") {
      setFilterValue(e.target.value);
      value.filter = e.target.value;
    } else {
      setOrderValue([
        e.target.value.split(",")[0],
        e.target.value.split(",")[1],
      ]);
      value.order = [
        e.target.value.split(",")[0],
        e.target.value.split(",")[1],
      ];
    }
    value.order = orderValue;
    value.filter = filterValue;
    const result = await axios.get(
      `/properties/orderAndFilter/${JSON.stringify(value)}`
    );
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
        className="my-3 md:my-0 w-fit text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        onClick={handleChange}
        name="boton"
        value="field"
      >
        {" "}
        Campos{" "}
      </button>
      <button
        className="mb-3 md:my-0 w-fit text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        onClick={handleChange}
        name="boton"
        value="apartment"
      >
        {" "}
        Departamentos{" "}
      </button>
    </>
  );
}
