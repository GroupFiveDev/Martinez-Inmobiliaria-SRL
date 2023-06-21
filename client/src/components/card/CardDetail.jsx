import { useEffect, useRef, useState } from "react";
import { useParams, Prompt, useHistory } from "react-router-dom";
import { useModal } from "../../hooks/useModal.js";
import { useAuth } from "../../context/authContext.jsx";
import Phone from "../contact/contacInfo/Phone";
import WhatsApp from "../contact/contacInfo/WhatsApp";
import axios from "axios";
import Location from "../contact/contacInfo/Location";
import bathroom from "../../assets/icons/bathrooms.png";
import room from "../../assets/icons/rooms.png";
import squareIc from "../../assets/icons/squareIc.png";
import garaje from "../../assets/icons/garaje.png";
import logo from "../../assets/logo/logo_blanco_fondo_negro-removebg-preview.png";
import Edit from "../edit/Edit.jsx";
import Check from "../check/Check.jsx";
import Close from "../close/Close.jsx";
import Loading from "../modal/Loading.jsx";
import Map from "../map/Map.jsx";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export default function CardDetail() {
  const history = useHistory();
  const { id } = useParams();
  const { isOpen, closeModal, openModal } = useModal();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [property, setProperty] = useState();
  const [change, setChange] = useState()
  const [imagesCount, setImagesCount] = useState(0)
  const [principal, setPrincipal] = useState(1)
  const title = useRef(null);
  const [k, setK] = useState(0)
  const [edit, setEdit] = useState({
    type: null,
    title: null,
    description: null,
    hectares: null,
    location: null,
    terrain: null,
    rooms: null,
    bathrooms: null,
    garage: null,
    square: null,
    price: null,
    position: null,
    images: null,
  });
  const { user } = useAuth();

  const handleImageClick = (index) => {
    if (index === activeImageIndex) return
    title.current.scrollIntoView({ behavior: 'smooth' });
    setPrincipal(1)
    setActiveImageIndex(index);
  };

  const handleOnChange = (id) => {
    setChange(true);
    if (id === "apartmentProperty") {
      const roomsValue = document.getElementById("roomsProperty").value;
      const bathroomsValue = document.getElementById("bathroomsProperty").value;
      const garageValue = document.getElementById("garageProperty").value;
      const squareValue = document.getElementById("squareProperty").value;
      setProperty({
        ...property,
        rooms: roomsValue,
        bathrooms: bathroomsValue,
        garage: garageValue,
        square: squareValue,
      });
      return;
    }

    const input = document.getElementById(id);
    const name = input.name;
    setProperty({
      ...property,
      [name]: input.value,
    });
  };

  const handleOnSave = async () => {
    openModal();
    const result = await axios.patch(`/properties/${id}`, property);
    setChange(false);
    closeModal();
    history.push("/");
  };

  const handleLoadImages = (e) => {
    if (e.target.alt === "imagePrincipal") {
      setPrincipal(0)
    }
    if (imagesCount === property?.images.length + 1) {
      return;
    }
    setImagesCount(imagesCount + 1);
  };

  useEffect(() => {
    if (!property) {
      (async function () {
        const result = await axios.get(`/properties/${id}`);
        setProperty(result.data);
      })();
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [])

  useEffect(() => {
    const containerLoader = document.getElementById("loader");
    const body = document.getElementById("body");

    if (imagesCount === property?.images.length + 1) {
      containerLoader.className = "justify-center items-center w-full h-full bg-[#368a8c] absolute top-0 z-50 hidden";
      body.className = "overflow-auto";
    } else {
      window.scrollTo({ top: 0, left: 0 });
      containerLoader.className = "justify-center items-center w-full h-full bg-[#368a8c] absolute top-0 z-50 flex";
      body.className = "overflow-y-hidden";
    }
    containerLoader.className = "justify-center items-center w-full h-full bg-[#368a8c] absolute top-0 z-50 hidden";
    body.className = "overflow-auto";

  }, [imagesCount]);

  return (
    <>
      <div id="loader">
        <div className="relative flex flex-col items-center justify-center">
          <div className="bg-[#368a8c] z-[55] absolute w-full h-full animate-pulse z-60"></div>
          <img src={logo} alt="logo" className="z-50" />
          <h1 className="text-white font-Montserrat text-xl z-50">
            Cargando...
          </h1>
        </div>
      </div>
      <div className={`w-full min-h-screen flex justify-center relative bg-gray-600`}>
        <div className="absolute bottom-0 left-0 hidden h-full xl:flex w-24 z-40 rallado" />
        <div className="flex flex-col justify-center pt-4 w-[95%] xl:w-[60%]">
          {/* titulo */}
          <div className="bg-[#368a8c] mb-5 flex items-center gap-2 w-full" ref={title}>
            <h1 className={`${edit.title ? "hidden" : ""} text-3xl text-start ml-3 font-bold text-white font-Montserrat`}>
              {property?.title}
            </h1>
            <input
              type="text"
              name="title"
              id="titleProperty"
              defaultValue={property?.title}
              className={`${edit.title ? "flex" : "hidden"} w-[80%] h-[36px]`}
            />
            <Edit value={edit.title} onClick={() => setEdit({ ...edit, title: !edit.title })} user={user} />
            <Check value={edit.title} onClick={() => { setEdit({ ...edit, title: !edit.title }); handleOnChange("titleProperty"); }} />
            <Close value={edit.title} onClick={() => setEdit({ ...edit, title: !edit.title })} />
          </div>
          <div className="flex flex-col xl:flex-row md:justify-between">
            <div className="xl:w-[70%] flex flex-col items-center">
              {change && (<Prompt message="¿No hay cambios guardados, desea salir igual?" />)}
              <Loading isOpen={isOpen}>
                <h1 className="font-Montserrat text-white font-bold text-xl">
                  Guardando cambios...
                </h1>
              </Loading>
              {/* imagen */}
              {
                property?.images.length ?
                  <div className="px-2 xl:w-full">
                    <div className="overflow-hidden relative flex justify-center items-center rounded-xl">
                      <img className={`${principal ? "opacity-25" : ""} w-full h-full object-cover object-center`} src={`${property?.images[activeImageIndex]}`} alt="imagePrincipal" onLoad={handleLoadImages} />

                      <div role="status" className={`${principal ? "" : "hidden"} flex justify-center items-center w-[60px] h-[60px] absolute`}>
                        <svg aria-hidden="true" className="w-full h-auto text-gray-200 animate-spin fill-[#368a8c]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                    <div className="w-full relative flex justify-center items-center px-10">
                      <button className={`${property?.images.length <= 3 ? "hidden" : ""} absolute left-0 w-7 h-7`} onClick={() => { setK(k - 3), setActiveImageIndex(k - 3) }} disabled={k === 0 ? true : false}> <AiOutlineArrowLeft className="w-full h-full" color="white" /> </button>
                      <div className={`${property?.images.length === 1 ? "hidden" : ""} mt-4 grid grid-cols-3 gap-2 relative items-center`}>
                        {
                          property?.images.slice(k, 3 + k).map((image, index) => (
                            <button className="w-fit" aria-label="carrusel" key={index} onClick={() => index !== activeImageIndex && handleImageClick(index + k)}>
                              <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]">
                                <img
                                  src={image}
                                  onLoad={handleLoadImages}
                                  alt={property?.title}
                                  className={`h-full w-ful object-center rounded-lg shadow-lg ${index + k === activeImageIndex ? "border-2 border-blue-500" : ""}`}
                                />
                              </div>
                            </button>
                          ))
                        }
                      </div>
                      <button className={`${property?.images.length <= 3 ? "hidden" : ""} absolute right-0 w-7 h-7`} onClick={() => { setK(k + 3), setActiveImageIndex(k + 3) }} disabled={k + 3 >= property.images.length ? true : false}> <AiOutlineArrowRight className="w-full h-full" color="white" /> </button>
                    </div>
                  </div>
                  :
                  <h1>Esta propiedad no tiene imagenes</h1>
              }
              {/* detalles */}
              <div className="w-full px-4 flex justify-start flex-col items-start text-white mt-4 gap-4">
                <div className="flex items-center w-full gap-2">
                  <p className={`${edit.description ? "hidden" : "flex"} text-xl flex`}>
                    {property?.description}
                  </p>
                  <textarea
                    type="text"
                    name="description"
                    id="descriptionProperty"
                    defaultValue={property?.description}
                    className={`${edit.description ? "flex" : "hidden"
                      } w-full text-black`}
                  />
                  <Edit value={edit.description} onClick={() => setEdit({ ...edit, description: !edit.description })} user={user} />
                  <Check value={edit.description} onClick={() => { setEdit({ ...edit, description: !edit.description }); handleOnChange("descriptionProperty"); }} />
                  <Close value={edit.description} onClick={() => setEdit({ ...edit, description: !edit.description })} />
                </div>
                <div className="text-white">
                  {property?.type === "field" ? (
                    <>
                      <div className="text-white flex flex-col gap-4">
                        <div className={`${property?.hectares ? "" : "hidden"} gap-2 flex items-center font-bold text-white`}>
                          HECTÁREAS:
                          <div className={`${edit.hectares ? "hidden" : "flex"}`}>
                            {property?.hectares}
                          </div>
                          <input
                            type="number"
                            name="hectares"
                            id="hectaresProperty"
                            defaultValue={property?.hectares}
                            className={`${edit.hectares ? "flex" : "hidden"} w-[80%] h-[26px] text-black`}
                          />
                          <Edit value={edit.hectares} onClick={() => setEdit({ ...edit, hectares: !edit.hectares })} user={user} />
                          <Check value={edit.hectares} onClick={() => { setEdit({ ...edit, hectares: !edit.hectares }); handleOnChange("hectaresProperty"); }} />
                          <Close value={edit.hectares} onClick={() => setEdit({ ...edit, hectares: !edit.hectares })} />
                        </div>
                        <div className={`${property?.terrain ? "" : "hidden"} gap-2 flex items-center font-bold text-white`}>
                          APTITUD:
                          <div className={`${edit.terrain ? "hidden" : "flex"}`}>
                            {property?.terrain}
                          </div>
                          <select
                            name="terrain"
                            id="terrainProperty"
                            defaultValue={
                              property.terrain === "Ganadero"
                                ? "Ganadero"
                                : property.terrain === "Agrícola"
                                  ? "Agrícola"
                                  : "Mixto"
                            }
                            className={`${edit.terrain ? "flex" : "hidden"} w-[80%] text-black`}
                          >
                            <option value="Ganadero">Ganadero</option>
                            <option value="Agrícola">Agrícola</option>
                            <option value="Mixto">Mixto</option>
                          </select>
                          <Edit value={edit.terrain} onClick={() => setEdit({ ...edit, terrain: !edit.terrain })} user={user} />
                          <Check value={edit.terrain} onClick={() => { setEdit({ ...edit, terrain: !edit.terrain }); handleOnChange("terrainProperty"); }} />
                          <Close value={edit.terrain} onClick={() => setEdit({ ...edit, terrain: !edit.terrain })} />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={`flex flex-wrap justify-center items-center ${edit.rooms ? "gap-10" : "gap-5"}`}>
                        <div className={`${property?.rooms ? "flex" : user ? "flex" : "hidden"} items-center font-bold text-white`}>
                          <img src={room} alt="romm" className="w-7" />
                          <span className={`${edit.rooms ? "hidden" : "flex"}`}>
                            {property?.rooms}
                          </span>
                          <input
                            type="number"
                            name="rooms"
                            id="roomsProperty"
                            defaultValue={property?.rooms}
                            className={`${edit.rooms ? "flex" : "hidden"} w-16 h-10 text-black`}
                          />
                        </div>
                        <div className={`${property?.bathrooms ? "flex" : user ? "flex" : "hidden"} text-white items-center font-bold`}>
                          <img src={bathroom} alt="romm" className="w-7" />
                          <span className={`${edit.rooms ? "hidden" : "flex"}`}>
                            {property?.bathrooms}
                          </span>
                          <input
                            type="number"
                            name="bathrooms"
                            id="bathroomsProperty"
                            defaultValue={property?.bathrooms}
                            className={`${edit.rooms ? "flex" : "hidden"} w-16 h-10 text-black`}
                          />
                        </div>
                        <div className={`${property?.garage ? "flex" : user ? "flex" : "hidden"} text-white items-center font-bold`}>
                          <img src={garaje} alt="romm" className="w-7" />
                          <span className={`${edit.rooms ? "hidden" : "flex"}`}>
                            {property?.garage}
                          </span>
                          <input
                            type="number"
                            name="garage"
                            id="garageProperty"
                            defaultValue={property?.garage}
                            className={`${edit.rooms ? "flex" : "hidden"} w-16 h-10 text-black`}
                          />
                        </div>
                        <div className={`${property?.square ? "flex" : user ? "flex" : "hidden"} text-white flex items-center font-bold`}>
                          <img src={squareIc} alt="romm" className="w-7" />
                          <span className={`${edit.rooms ? "hidden" : "flex"}`}>
                            {property?.square}
                          </span>
                          <input
                            type="number"
                            name="square"
                            id="squareProperty"
                            defaultValue={property?.square}
                            className={`${edit.rooms ? "flex" : "hidden"} w-16 h-10 text-black`}
                          />
                        </div>
                        <div className="flex">
                          <Edit value={edit.rooms} onClick={() => setEdit({ ...edit, rooms: !edit.rooms })} user={user} />
                          <Check value={edit.rooms} onClick={() => { setEdit({ ...edit, rooms: !edit.rooms }); handleOnChange("apartmentProperty"); }} />
                          <Close value={edit.rooms} onClick={() => setEdit({ ...edit, rooms: !edit.rooms })} />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className={`${property?.location ? "flex" : "hidden"}text-white flex flex-wrap items-center gap-2`}>
                  <div className={`${property?.location ? "" : "hidden"} gap-2 flex font-bold text-white items-center text-center flex-wrap `}>
                    UBICACIÓN:
                    <div className={`${edit.location ? "hidden" : "flex"}`}>
                      {property?.location}
                    </div>
                    <input
                      type="text"
                      name="location"
                      id="locationProperty"
                      defaultValue={property?.location}
                      className={`${edit.location ? "flex" : "hidden"
                        } h-[26px] text-black`}
                    />
                    <Edit value={edit.location} onClick={() => setEdit({ ...edit, location: !edit.location })} user={user} />
                    <Check value={edit.location} onClick={() => { setEdit({ ...edit, location: !edit.location }); handleOnChange("locationProperty"); }} />
                    <Close value={edit.location} onClick={() => setEdit({ ...edit, location: !edit.location })} />
                  </div>
                </div>
                <div className={`${property?.price ? "" : "flex"} text-white font-bold`}>
                  <div className={`${property?.price ? "" : "hidden"} gap-2 flex items-center font-bold text-white mb-3`}>
                    $
                    <div className={`${edit.price ? "hidden" : "flex"}`}>
                      {property?.price}
                    </div>
                    <input
                      type="number"
                      name="price"
                      id="priceProperty"
                      defaultValue={property?.price}
                      className={`${edit.price ? "flex" : "hidden"} w-[80%] h-[26px] text-black`}
                    />
                    <Edit value={edit.price} onClick={() => setEdit({ ...edit, price: !edit.price })} user={user} />
                    <Check value={edit.price} onClick={() => { setEdit({ ...edit, price: !edit.price }); handleOnChange("priceProperty"); }} />
                    <Close value={edit.price} onClick={() => setEdit({ ...edit, price: !edit.price })} />
                  </div>
                </div>
                <div className={`${user ? "" : "hidden"} gap-2 flex items-center font-bold text-white mb-3`}>
                  <div className={`${edit.position?.lng ? "hidden" : "flex"}`}>
                    Cordenadas google maps (lat, lng): {`${property?.position?.lat}, ${property?.position?.lng}`}
                  </div>
                  <input
                    type="text"
                    name="position"
                    id="positionProperty"
                    className={`${edit.position ? "flex" : "hidden"} w-[80%] h-[26px] text-black`}
                  />
                  <Edit value={edit.position} onClick={() => setEdit({ ...edit, position: !edit.position })} user={user} />
                  <Check value={edit.position} onClick={() => { setEdit({ ...edit, position: !edit.position }); handleOnChange("positionProperty"); }} />
                  <Close value={edit.position} onClick={() => setEdit({ ...edit, position: !edit.position })} />
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[30%] flex flex-col items-center px-4">
              <h1 className="text-center mb-4 font-Montserrat text-white text-3xl w-full bg-[#368a8c]">
                Contacto
              </h1>
              <WhatsApp />
              <Location />
              <Phone />
              <hr className="flex md:hidden" />
            </div>
          </div >
          {
            property?.position.lng ?
              <div className="my-4">
                <Map center2={property?.position} zoom={12} id={property?.id} />
              </div>
              : ""
          }
          <div className="w-full flex justify-center">
            <button aria-label="save" className={`${user ? "" : "hidden"} w-fit p-3 bg-[#368a8c] mb-5 font-Montserrat text-white hover:bg-[#1d3a3b]`} onClick={handleOnSave}>
              Guardar cambios
            </button>
          </div>
        </div >
      </div >
    </>
  );
}
