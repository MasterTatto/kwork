import React from 'react';
import s from './styles.module.css'
import {Avatar} from "@mui/material";
import {ReactComponent as Read} from "../../../assets/svg/status_read_chat.svg";
import {ReactComponent as UnRead} from "../../../assets/svg/status_usread_chat.svg";
import {NavLink} from "react-router-dom";

const Item = ({nickname, last_message, img, isOnline, unread,id, lastWrite, time}) => {
    const {last, isRead} = lastWrite
    return (
        <NavLink to={`/chat/${id}`} style={{width:'100%'}}>
            <div className={s.item}>
                <div className={s.avatar}>
                    {isOnline && <div className={s.online}/>}
                    <Avatar src={img} sx={{
                        width: '50px',
                        height: '50px'
                    }}/>
                </div>

                <div className={s.content}>
                    <p className={s.nickname}>{nickname}</p>
                    <p className={s.lastWrite}>{last_message}</p>
                </div>

                <div className={s.message_end}>
                    <p className={s.time}>{time}</p>
                    {unread !== 0 && <div className={s.unread}>{unread}</div>}
                    {unread === 0 && last === 1 && null}
                    {unread === 0 && last === 0 && isRead && <Read/>}
                    {unread === 0 && last === 0 && !isRead && <UnRead/>}
                </div>
            </div>
        </NavLink>
    );
};

export default Item;
