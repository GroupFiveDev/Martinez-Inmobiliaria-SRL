import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useHistory } from "react-router-dom";

export default function Admin() {
  const history = useHistory()
  const { login } = useAuth()

  const [user, setUser] = useState({
    email: null,
    password: null
  })

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const userCredentials = await login(user.email, user.password)
      history.push("/")
    } catch (error) {
      console.log(error.message);
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
        <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="email@gmail.com" className="mb-4" onChange={handleChange} name="email" />
          <label htmlFor="password">Contraseña</label>
          <input type="password" placeholder="*******" className="mb-4" onChange={handleChange} name="password" />
          <button name="submit" type="submit">Entrar </button>
        </form>
      </div>
    </>
  )
}