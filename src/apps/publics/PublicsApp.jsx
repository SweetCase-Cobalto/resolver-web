import { Routes, Route } from "react-router-dom";
import PCFLPage from "./pages/PCFLPage";

const PublicsApp = () => {
    return (
        <Routes>
            <Route path='/pcfl' element={<PCFLPage />} />
        </Routes>
    );
}
export default PublicsApp;