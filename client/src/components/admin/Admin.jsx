import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase/firebase.js'
import { useState } from "react";


export default function Admin() {
  const [user, setUser] = useState({
    email: null,
    password: null
  })

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, user.email, user.password)
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
      <div className="w-full flex justify-center items-center h-[500px] bg-slate-500">
        <form action="" className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
          <label htmlFor="">Email</label>
          <input type="email" placeholder="email@gmail.com" className="mb-4" onChange={handleChange} name="email" />
          <label htmlFor="">Contraseña</label>
          <input type="password" placeholder="*******" className="mb-4" onChange={handleChange} name="password" />
          <button type="submit">Entrar </button>
        </form>
      </div>
    </>
  )
}