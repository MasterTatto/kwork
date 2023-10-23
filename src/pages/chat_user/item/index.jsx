import React from 'react';
import s from './styles.module.css'
import {Avatar} from "@mui/material";
import classNames from "classnames";
import {ReactComponent as Read} from "../../../assets/svg/status_read_chat.svg";
import {ReactComponent as UnRead} from "../../../assets/svg/status_usread_chat.svg";

const Item = ({type, avatar, text, isRead, time}) => {
    return (
        <div className={s.item} style={{justifyContent: type === 0 ? 'flex-end' : 'flex-start'}}>
            {type === 0 && <div className={s.me}>
                <div className={s.text}>
                    {text}
                    <div className={s.sub_info}>
                        {isRead ? <Read/> : <UnRead/>}
                        <span className={s.time}>{time}</span>
                    </div>
                </div>
                <Avatar src={avatar} sx={{height: '32px', width: '32px'}}/>
            </div>}
            {type === 1 && <div className={s.me}>
                <Avatar src={avatar} sx={{height: '32px', width: '32px', zIndex: 1}}/>
                <div className={classNames(s.text, s.text_unswer)}>
                    {text}
                    <div className={classNames(s.sub_info, s.sub_info_answer)}>
                        <span className={s.time}>{time}</span>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default Item;
