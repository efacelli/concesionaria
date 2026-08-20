import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home/Home"
import Vehicles from "./pages/Vehicles/Vehicles"
import VehicleDetail from "./pages/VehicleDetail/VehicleDetail"
import Location from "./pages/Location/Location"
import NotFound from "./pages/NotFound"
import ScrollToTop from "./components/ScrollToTop"

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="vehiculos" element={<Vehicles />} />
          <Route path="vehiculos/:slug" element={<VehicleDetail />} />
          <Route path="ubicacion" element={<Location />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
