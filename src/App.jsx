import Header from "./components/header/Header"
import AllRoutes from "./allroutes/AllRoutes"
import Navbar from "./components/navbar/Navbar"
import { Headertitles } from "../data"
import Socillinks from "./components/sociallinks/Socillinks"

function App() {
  return (
    <div className="bg-black text-zinc-200 h-auto ">
      <div className="w-full fixed top-0 left-0 z-50">
        <Header title={Headertitles.title} />
        <Navbar />
      </div>
      <div className="max-w-screen w-full">
        <AllRoutes />
      </div>
      <Socillinks />
    </div>
  )
}

export default App

