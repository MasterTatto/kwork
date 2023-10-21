import './App.css';
import Header from "./components/header";
import {Route, Routes} from "react-router-dom";
import Fid from "./pages/fid";
import Footer from "./components/footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Fid/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
