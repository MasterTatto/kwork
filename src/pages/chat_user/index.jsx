import React, {useEffect, useRef, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import s from './styles.module.css'
import {mock} from "./mock";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {Avatar} from "@mui/material";
import classNames from "classnames";
import {ReactComponent as Search} from '../../assets/svg/search.svg'
import {ReactComponent as Pin} from '../../assets/svg/pin.svg'
import SendIcon from '@mui/icons-material/Send';
import Item from "./item";
import img2 from "../../assets/image/chat6.png";

const ChatUser = () => {
    const ref = useRef(null)
    const {id} = useParams()

    const [value, setValue] = useState('')
    const [currentChat, setCurrentChat] = useState(mock[id])
    // const currentChat = mock[id]

    useEffect(() => {
        ref?.current?.scrollTo({top: ref.current.scrollHeight, behavior: 'smooth'})
    }, [currentChat])
    return (
        <div className={s.main}>
            <div className={s.header}>
                <div className={s.header_left}>
                    <NavLink to={'/chat'} className={s.back}>
                        <ArrowBackIosNewIcon sx={{fontSize: '20px'}}/>
                    </NavLink>

                    <div className={s.header_content}>
                        <div className={s.avatar}>
                            <Avatar src={currentChat?.img} sx={{width: '50px', height: '50px'}}/>
                        </div>

                        <div className={s.info_user}>
                            <p className={classNames(s.nickname, currentChat.isOnline && s.nickname_before)}>{currentChat.nickname}</p>
                            <p className={s.fullname}>{currentChat.fullname}</p>
                        </div>

                    </div>
                </div>

                <div className={s.search}>
                    <Search/>
                </div>
            </div>

            <div className={s.content} ref={ref}>
                {currentChat.chats.map((el, i) => <Item key={i} {...el}/>)}
            </div>

            <div className={s.action}>
                <div className={s.input_box}>
                    <input type="text" className={s.input} value={value} onChange={(e) => setValue(e.target.value)}/>
                    <div className={s.pin}>
                        <Pin/>
                    </div>
                </div>
                <div className={s.btn} onClick={() => {
                    setCurrentChat({
                        ...currentChat,
                        chats: [...currentChat.chats, {type: 0, time: '19:23', isRead: false, avatar: img2, text: value}]
                    })
                    setValue('')
                }}>
                    <SendIcon sx={{lineHeight: '0', fontSize: '18px', marginLeft: '3px', color: '#725CFF'}}/>
                </div>
            </div>
        </div>
    );
};

export default ChatUser;
