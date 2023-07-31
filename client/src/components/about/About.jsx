import * as Components from "./components/svg.components.jsx"

export default function About() {
  window.scrollTo({ top: 0, left: 0 })
  return (
    <>
      {/* Nosotros */}
      <div className="relative h-[500px] div-about flex justify-center items-center">
        <h1 className="text-6xl text-white flex font-Montserrat">Nosotros</h1>
      </div>

      {/* Info */}
      <div className="w-full relative bg-[#51535b] flex items-center lg:px-[300px] p-10 sm:h-96">
        <div className="absolute top-0 left-0 hidden lg:flex w-52 h-20 z-40 rallado" />
        <div className="absolute bottom-0 right-0 hidden h-full lg:flex w-24 z-40 rallado" />
        <p className="text-lg text-center text-white ">Brindamos servicios inmobiliarios exclusivamente de compra/venta y tasaciones urbanas y rurales mediante prácticas modernas para que nuestro cliente pueda alcanzar sus objetivos en el menor tiempo posible, sin estrés, generando una experiencia digna de repetir o recomendar.  Generalmente nuestro servicio comienza realizando una valuación del inmueble, creando informes de alta calidad con mucha información de valor para que cada cliente pueda tener una visión clara del mercado y comprender de forma detallada qué factores determinan el valor de su propiedad.</p>
      </div>

      {/* Nuestros valores */}
      <div className="w-full flex flex-col items-center justify-center bg-[#368a8c] py-10">
        <h1 className="text-6xl text-black flex text-center mb-10 font-Montserrat">Nuestros valores</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          <div className="flex flex-col items-center text-center w-80">
            <div className="w-20 h-20">
              <Components.Vocacion_de_servicio />
            </div>

            <div className="mt-3">
              <p className="text-2xl text-gray-900 font-Montserrat">VOCACIÓN DE SERVICIO</p>
              <p className="text-md mt-4 text-gray-900 font-Montserrat">Siempre estamos al servicio del cliente generando soluciones para cada necesidad.</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center w-80">
            <div className="w-20 h-20">
              <Components.Simplicidad />
            </div>

            <div className="mt-3">
              <p className="text-2xl text-gray-900 font-Montserrat">SIMPLICIDAD</p>
              <p className="text-md mt-4 text-gray-900 font-Montserrat">Creemos que si el proceso es simple, es doblemente bueno.</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center w-80">
            <div className="w-20 h-20">
              <Components.Compromiso />
            </div>

            <div className="mt-3">
              <p className="text-2xl text-gray-900 font-Montserrat">COMPROMISO</p>
              <p className="text-md mt-4 text-gray-900 font-Montserrat">Tenemos la capacidad de sentir los objetivos del cliente como objetivos propios y eso nos facilita entender sus motivaciones y objetivos.</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center w-80">
            <div className="w-20 h-20">
              <Components.Estar_motivados />
            </div>

            <div className="mt-3">
              <p className="text-2xl text-gray-900 font-Montserrat">ESTAR MOTIVADOS</p>
              <p className="text-md mt-4 text-gray-900 font-Montserrat">Nos mantiene decididos y ágiles.</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center w-80">
            <div className="w-20 h-20">
              <Components.Logros_compartidos />
            </div>

            <div className="mt-3">
              <p className="text-2xl text-gray-900 font-Montserrat">LOGROS COMPARTIDOS</p>
              <p className="text-md mt-4 text-gray-900 font-Montserrat">Individualmente somos buenos, pero juntos somos geniales.</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center w-80">
            <div className="w-20 h-20">
              <Components.Conocimiento />
            </div>

            <div className="mt-3">
              <p className="text-2xl text-gray-900 font-Montserrat">CONOCIMIENTO</p>
              <p className="text-md mt-4 text-gray-900 font-Montserrat">Informamos el paso a paso en cada tipo de proceso.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Como? */}
      <div className="w-full md:h-[600px] flex flex-col md:flex-row">

        <div className="como md:w-[50%] h-full">
        </div>

        <div className="md:w-[50%] bg-[#51535b] h-full px-5 py-5">
          <h1 className="text-4xl text-white flex text-center my-10 font-Montserrat">¿CÓMO?</h1>
          <p className="text-lg text-white ">Tratamos a cada cliente de forma personalizada para que tenga un trato exclusivo generando emociones positivas, manteniendo el foco en mejorar su calidad de vida.
            <br />
            <br />
            En primer lugar entendiendo sus necesidades, y luego elaborando planes de trabajo conjunto de forma clara, para garantizar que todo lo que se promete se realizará en tiempo y forma,  trabajando de forma incansable, con dedicación y una verdadera pasión por el servicio al cliente para cumplir nuestro compromiso asumido.</p>

        </div>

      </div>
    </>
  )
}