import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Teams from "../pages/Teams";
import Services from "../pages/Services";
import Careers from "../pages/Careers";
import Blog from "../pages/Blog";
import Servicesdetails from "../pages/Servicesdetails";
import {Allservicesdata} from "../../data"

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* <Route path="/blog/:slug" element={<Blogdetails />} /> */}
        <Route path="/:link" element={<Servicesdetails data={Allservicesdata} />} />
      </Routes>
    </>
  );
}
