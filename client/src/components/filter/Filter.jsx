import axios from 'axios'

export default function Filter({ setProperties }) {

  async function handleChange(e) {
    const value = e.target.value
    const resutl = await axios.get(`/properties/order/${value}`)
    setProperties(resutl.data)
  }

  return (
    <>
      <select className="w-fit text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" onChange={handleChange}>
        <option value="nuevas">Nuevas propiedades</option>
        <option value="antiguas">Propiedades mas antiguas</option>
        <option value="<">Precio(Bajo a alto)</option>
        <option value=">">Precio(Alto a bajo)</option>
      </select>
      <button className="my-3 md:my-0 w-fit text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"> Campos </button>
      <button className="mb-3 md:my-0 w-fit text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"> Departamentos </button>
    </>
  )
}