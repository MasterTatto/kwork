import React, {useState} from 'react';
import s from './styles.module.css'
import {ReactComponent as Search} from "../../assets/svg/footer_search.svg";
import {ReactComponent as Like} from "../../assets/svg/footer_like.svg";
import {ReactComponent as Plus} from "../../assets/svg/footer_add.svg";
import {ReactComponent as Chat} from "../../assets/svg/footer_chat.svg";
import {ReactComponent as Profile} from "../../assets/svg/footer_profile.svg";
import classNames from "classnames";
import {NavLink, useLocation} from "react-router-dom";

const Footer = () => {
    const {pathname} = useLocation()

    return (
        <div className={s.footer}>
            <NavLink to={'/'}
                     className={classNames(s.action_icon, (pathname === '/' || pathname.includes('fid')) && s.select)}>
                <Search/>
            </NavLink>
            <NavLink to={'/favorite'} className={classNames(s.action_icon, pathname === '/favorite' && s.select)}>
                <Like/>
            </NavLink>
            <NavLink to={'/'} className={s.add}>
                <Plus/>
            </NavLink>
            <NavLink to={'/chat'} className={classNames(s.action_icon, pathname === '/chat' && s.select)}>
                <Chat/>
            </NavLink>
            <NavLink to={'/profile'} className={classNames(s.action_icon, (pathname === '/profile' || pathname === '/subscribers') && s.select)}>
                <Profile/>
            </NavLink>
        </div>
    );
};

export default Footer;
