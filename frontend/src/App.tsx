import "./App.css";
import { Header } from "./components/Header/Header.tsx";
import { HomePage } from "./pages/HomePage/HomePage.tsx";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage.tsx";
import { ProductPage } from "./pages/ProductPage/ProductPage.tsx";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage/AuthPage.tsx";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/app" element={<DashboardPage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/:userName" element={<ProductPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <Toaster />
            </BrowserRouter>
        </div>
    );
}

export default App;
