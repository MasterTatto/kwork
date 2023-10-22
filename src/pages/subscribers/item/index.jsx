import React from 'react';
import s from './styles.module.css'
import {Avatar} from "@mui/material";
import {ReactComponent as Chat} from "../../../assets/svg/chat_message.svg";

const Item = ({img, isSubscribe, nikname, fullname, isOnline}) => {
    return (
        <div className={s.item}>
            <div className={s.avatar}>
                {isOnline && <div className={s.online}/>}
                <Avatar src={img} sx={{height: '80px', width: '80px'}}/>
            </div>
            <div className={s.content}>
                <div className={s.info}>
                    <p className={s.nick}>{nikname}</p>
                    <p className={s.fullname}>{fullname}</p>
                    {isSubscribe && <p className={s.unsubscribe}>Отписаться</p>}
                </div>
                {isSubscribe ? <Chat/> : <div className={s.btn}>Подписаться</div>}
            </div>
        </div>
    );
};

export default Item;
