import axios from "axios";
import { useState } from "react";

const CreateProperty = () => {

  const [form, setForm] = useState({
    type: "",
    title: "",
    description: "",
    hectares: "",
    location: "",
    terrain: "",
    rooms: "",
    bathrooms: "",
    garage: "",
    square: "",
    price: "",
    images: [],
  })

  const handleChange = (e) => {
    if (e.target.name === "images") {
      setForm({
        ...form,
        images: images.push(e.target.value),
      })
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }
    // console.log(form)
  }

  // const validate = (form) => {
  //     let errors = {};
  //     if(Number(form.price) > 0) {
  //         errors.price = "-El número debe ser menor a 0"
  //     }
  //     if(Number(form.rooms) > 0) {
  //         errors.rooms = "-El número debe ser menor a 0"
  //     }
  //     if(Number(form.bathrooms) > 0) {
  //         errors.bathrooms = "-El número debe ser menor a 0"
  //     }
  //     if(Number(form.garage) > 0) {
  //         errors.garage = "-El número debe ser menor a 0"
  //     }
  //     if(Number(form.square) > 0) {
  //         errors.square = "-El número debe ser menor a 0"
  //     }
  //     if(Number(form.hectares) > 0) {
  //         errors.hectares = "-El número debe ser menor a 0"
  //     }
  //     return errors;
  // }

  // let errorMsg = validate(form);

  const handleSubmit = async (e) => {
    // e.preventDefault()
    // if(Object.values(errorMsg).length) {
    //     return alert(Object.values(errorMsg).join('\n'), "error")
    // }

    try {
      // console.log(form)
      await axios.post("/properties", form)
      alert("Propiedad Creada")
    } catch (error) {
      console.log(error)
    }
  }

  const fieldOrApartment = (form) => {
    if (form.type === "field") {
      return true;
    } else if (form.type === "apartment") {
      return false;
    }
  }

  return (
    <div className="m-10">
      <h1 className="flex justify-center font-bold mb-5">Crear Propiedad:</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de propiedad</label>
              <select onChange={handleChange} name="type" id="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="type">...</option>
                <option value="field">Campo</option>
                <option value="apartment">Departamento</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
              <input onChange={handleChange} type="text" id="title" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción</label>
              <input onChange={handleChange} type="text" id="description" name="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hectareas</label>
              <input onChange={handleChange} disabled={!(fieldOrApartment(form))} type="number" id="hectares" name="hectares" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {/* <p>{errorMsg.hectares}</p> */}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ubicación</label>
              <input onChange={handleChange} type="text" id="location" name="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Terreno</label> {/* Agrícola, Mixto o Ganadero */}
              <select onChange={handleChange} disabled={!(fieldOrApartment(form))} type="text" id="terrain" name="terrain" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                <option value="">...</option>
                <option value="Agrícola">Agrícola</option>
                <option value="Mixto">Mixto</option>
                <option value="Ganadero">Ganadero</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Habitaciones</label>
              <input onChange={handleChange} disabled={fieldOrApartment(form)} type="number" id="rooms" name="rooms" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {/* <p>{errorMsg.rooms}</p> */}
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Baños</label>
              <input onChange={handleChange} disabled={fieldOrApartment(form)} type="number" id="bathrooms" name="bathrooms" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {/* <p>{errorMsg.bathrooms}</p> */}
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Garage</label>
              <input onChange={handleChange} disabled={fieldOrApartment(form)} type="number" id="garage" name="garage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {/* <p>{errorMsg.garage}</p> */}
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Metros cuadrados</label>
              <input onChange={handleChange} disabled={fieldOrApartment(form)} type="number" id="garage" name="garage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {/* <p>{errorMsg.square}</p> */}
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
              <input onChange={handleChange} type="number" id="price" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              {/* <p>{errorMsg.price}</p> */}
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagenes</label>
              <input type="file" id="images" name="images" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button aria-label="submit" type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crear propiedad</button>
          </div>
        </form>
      </div >
    </div >
  )
}

export default CreateProperty;
