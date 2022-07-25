import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../../ui/components/Navbar";
import DcPages from "../pages/DcPage";
import {HeroPage} from "../pages/HeroPage";
import MarvelPage from "../pages/MarvelPage";
import Search from "../pages/SearchPage";

function HeroesRoutes() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>

                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPages />} />

                    <Route path="search" element={<Search/>} />
                    <Route path="hero/:id" element={<HeroPage/>} />

                    <Route path="/" element={<Navigate to="/marvel" />} />


                </Routes>
            </div>

        </>

    )
}

export default HeroesRoutes