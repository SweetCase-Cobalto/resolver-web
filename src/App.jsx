import { Routes, Route } from "react-router-dom";

import MainApp from "./apps/main/MainApp";
import PublicsApp from "./apps/publics/PublicsApp";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Routes>
            <Route path='/*' element={<MainApp />}/>
            <Route path='/publics/*' element={<PublicsApp />} />
        </Routes>
    );
}

export default App;
