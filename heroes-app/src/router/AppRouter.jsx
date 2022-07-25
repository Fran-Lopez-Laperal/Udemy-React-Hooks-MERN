import { Route, Routes } from "react-router-dom"

import LogiPage from "../auth/pages/LoginPage"
import HeroesRoutes from "../heroes/routes/HeroesRoutes"

function AppRouter() {
    return (
        <>

            <Routes>

                <Route path="login" element={<LogiPage />} />

                <Route path="/*" element={<HeroesRoutes/>} />

            </Routes>

        </>
    )
}

export default AppRouter