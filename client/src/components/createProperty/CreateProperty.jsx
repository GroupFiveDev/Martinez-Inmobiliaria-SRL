import { useEffect, useState } from "react";
import { useAuth } from '../../context/authContext';
import ImageContainer from "./ImageContainer";
import Modal from '../modal/Loading'
import { useModal } from '../../hooks/useModal'
import apiService from "../../services/apiService"

const CreateProperty = () => {
  const { user } = useAuth()
  const { isOpen, openModal, closeModal } = useModal()


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
    position: "",
    price: "",
    image: [],
    images: [],
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const validate = (form) => {
    let errors = {};
    if (Number(form.price) > 2000000000) {
      errors.price = "-El número debe ser menor a 2000000000"
    }
    if (Number(form.rooms) > 2000000000) {
      errors.rooms = "-El número debe ser menor a 2000000000"
    }
    if (Number(form.bathrooms) > 2000000000) {
      errors.bathrooms = "-El número debe ser menor a 2000000000"
    }
    if (Number(form.garage) > 2000000000) {
      errors.garage = "-El número debe ser menor a 2000000000"
    }
    if (Number(form.square) > 2000000000) {
      errors.square = "-El número debe ser menor a 2000000000"
    }
    if (Number(form.hectares) > 2000000000) {
      errors.hectares = "-El número debe ser menor a 2000000000"
    }
    return errors;
  }

  let errorMsg = validate(form);

  const handleSubmit = async (e) => {
    openModal()
    e.preventDefault()
    const formdata = new FormData();

    for (const key in form) {
      if (key !== "image")
        formdata.append(key, form[key]);
    }

    for (let i = 0; i < form.image.length; i++) {
      formdata.append("image", form.image[i]);
    }

    try {
      await apiService.createProperty(formdata, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      closeModal()
      const form2 = document.getElementById("formProperty")
      form2.reset()
    } catch (error) {
      console.log(error);
      alert(error.message);
      closeModal()
    }
  }

  const fieldOrApartment = (form) => {
    if (form.type === "field") {
      return true;
    } else if (form.type === "apartment") {
      return false;
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [])

  if (!user) return (
    <div>
      <h1>No sos admin.</h1>
      {window.location.assign('/')}
    </div>
  )

  return (
    <div className="m-10">
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <h1 className='p-5 text-white font-Montserrat'>Creando propiedad</h1>
      </Modal>
      <h1 className="flex justify-center font-bold mb-5">Crear Propiedad:</h1>
      <div>
        <form onSubmit={handleSubmit} id="formProperty">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Tipo de propiedad</label>
              <select onChange={handleChange} name="type" id="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value="type">...</option>
                <option value="field">Campo</option>
                <option value="apartment">Departamento</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Título</label>
              <input onChange={handleChange} type="text" id="title" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Descripción</label>
              <input onChange={handleChange} type="text" id="description" name="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Hectareas</label>
              <input onChange={handleChange} disabled={!(fieldOrApartment(form))} type="number" id="hectares" name="hectares" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              <p>{errorMsg.hectares}</p>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Ubicación</label>
              <input onChange={handleChange} type="text" id="location" name="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Terreno</label> {/* Agrícola, Mixto o Ganadero */}
              <select onChange={handleChange} disabled={!(fieldOrApartment(form))} type="text" id="terrain" name="terrain" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" >
                <option value="">...</option>
                <option value="Agrícola">Agrícola</option>
                <option value="Mixto">Mixto</option>
                <option value="Ganadero">Ganadero</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">Habitaciones</label>
              <input onChange={handleChange} disabled={fieldOrApartment(form)} type="number" id="rooms" name="rooms" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              <p>{errorMsg.rooms}</p>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">Baños</label>
              <input onChange={handleChange} disabled={fieldOrApartment(form)} type="number" id="bathrooms" name="bathrooms" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              <p>{errorMsg.bathrooms}</p>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">Garage</label>
              <input onChange={handleChange} disabled={fieldOrApartment(form)} type="number" id="garage" name="garage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              <p>{errorMsg.garage}</p>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">Metros cuadrados</label>
              <input onChange={handleChange} disabled={fieldOrApartment(form)} type="number" id="square" name="square" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              <p>{errorMsg.square}</p>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">Cordenadas Google-Maps</label>
              <input onChange={handleChange} type="text" id="position" name="position" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              <p>{errorMsg.position}</p>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">Precio</label>
              <input onChange={handleChange} type="number" id="price" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
              <p>{errorMsg.price}</p>
            </div>
            <div className="mb-6">
              <ImageContainer form={form} setForm={setForm} />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Crear propiedad</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default CreateProperty;

