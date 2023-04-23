export default function Filter() {
  return (
    <>
      <select id="countries" className="w-fit bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ">
        <option value="1">Nuevas propiedades</option>
        <option value="2">Propiedades mas antiguas</option>
        <option value="3">Precio(Bajo a alto)</option>
        <option value="4">Precio(Alto a bajo)</option>
      </select>
    </>
  )
}