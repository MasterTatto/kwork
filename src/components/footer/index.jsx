import React, {useState} from 'react';
import s from './styles.module.css'
import {ReactComponent as Search} from "../../assets/svg/footer_search.svg";
import {ReactComponent as Like} from "../../assets/svg/footer_like.svg";
import {ReactComponent as Plus} from "../../assets/svg/footer_add.svg";
import {ReactComponent as Chat} from "../../assets/svg/footer_chat.svg";
import {ReactComponent as Profile} from "../../assets/svg/footer_profile.svg";
import classNames from "classnames";

const Footer = () => {
    const [select,setSelect] = useState(null)
    return (
        <div className={s.footer}>
            <div className={classNames(s.action_icon,select === 1 && s.select)} onClick={() => setSelect(1)}>
                <Search/>
            </div>
            <div className={classNames(s.action_icon,select === 2 && s.select)} onClick={() => setSelect(2)}>
                <Like/>
            </div>
            <div className={s.add}>
                <Plus/>
            </div>
            <div className={classNames(s.action_icon,select === 3 && s.select)} onClick={() => setSelect(3)}>
                <Chat/>
            </div>
            <div className={classNames(s.action_icon,select === 4 && s.select)} onClick={() => setSelect(4)}>
                <Profile/>
            </div>
        </div>
    );
};

export default Footer;
