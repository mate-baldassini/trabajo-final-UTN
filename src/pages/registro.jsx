import { useState, useContext } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Registro = () => {

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { handleUser } = useContext(ChatContext)

  const navigate = useNavigate()

  const validarEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!nombre || nombre.length < 3) {
      setError("El nombre debe tener al menos 3 caracteres")
      return
    }

    if (!email) {
      setError("El email es obligatorio")
      return
    }

    if (!validarEmail(email)) {
      setError("El email no es válido")
      return
    }

    if (!password || password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres")
      return
    }

    const user = { nombre, email, password }

    handleUser(user)

    localStorage.setItem("user", JSON.stringify(user))

    navigate("../router/RouterApp.jsx")
  }

  return (
    <section className="section-registro">
      <h2>Crear cuenta</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
        {error && <p className="error-form">{error}</p>}
      </form>
    </section>
  )
}
export { Registro }
