import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { NotFound } from "../views/NotFound"
import { Login } from "../views/Login"
import { Registro } from "../pages/registro"
import { Acerca } from "../pages/Acerca.jsx"
import { RouteProtected } from "../components/RouteProtected"

const RouterApp = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteProtected><Home /></RouteProtected>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/Acerca.jsx" element={<Acerca />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }