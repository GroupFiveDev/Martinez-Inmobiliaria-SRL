export default function Filter() {
  return (
    <>
      <select className="w-fit bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ">
        <option value="1">Nuevas propiedades</option>
        <option value="2">Propiedades mas antiguas</option>
        <option value="3">Precio(Bajo a alto)</option>
        <option value="4">Precio(Alto a bajo)</option>
      </select>
      <select className="w-fit bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ">
        <option value="1">Todos</option>
        <option value="2">Campos</option>
        <option value="3">Lotes</option>
        <option value="4">Casas</option>
        <option value="5">Departamentos</option>
      </select>
    </>
  )
}