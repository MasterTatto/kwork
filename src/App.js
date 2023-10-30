import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Routers from "./routers/routers";
import Navigate from "./components/navigate";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className={'content'}>
                <Navigate/>
                <Routers/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
