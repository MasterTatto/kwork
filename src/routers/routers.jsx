import React from 'react';
import {Route, Routes} from "react-router-dom";
import Fid from "../pages/fid";
import FidView from "../pages/fid_view";
import FidAll from "../pages/fid_all";
import Favorite from "../pages/favorite";
import Chat from "../pages/chat";
import ChatUser from "../pages/chat_user";
import Profile from "../pages/profile";
import Subscribers from "../pages/subscribers";

const Routers = () => {
    return (
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
    );
};

export default Routers;
