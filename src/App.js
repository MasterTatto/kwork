import './App.css';
import Header from "./components/header";
import {Route, Routes} from "react-router-dom";
import Fid from "./pages/fid";
import Footer from "./components/footer";
import FidView from "./pages/fid_view";
import Favorite from "./pages/favorite";
import Chat from "./pages/chat";
import Profile from "./pages/profile";
import Subscribers from "./pages/subscribers";
import ChatUser from "./pages/chat_user";
import FidAll from "./pages/fid_all";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Fid/>}/>
                <Route path={'/fid/:id'} element={<FidView/>}/>
                <Route path={'/fid/all/:name'} element={<FidAll/>}/>
                <Route path={'/favorite'} element={<Favorite/>}/>
                <Route path={'/chat'} element={<Chat/>}/>
                <Route path={'/chat/:id'} element={<ChatUser/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/subscribers'} element={<Subscribers/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
