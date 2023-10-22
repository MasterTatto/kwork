import React from 'react';
import s from './styles.module.css'
import SwipperContent from "./swipper";
import {useParams} from "react-router-dom";
import {Avatar} from "@mui/material";
import ded from '../../assets/image/ded.png'
import ded2 from '../../assets/image/img1.png'
import avatar from '../../assets/image/img5.png'
import {ReactComponent as Location} from "../../assets/svg/location_item.svg";
import {ReactComponent as Calendar} from "../../assets/svg/calendar_item.svg";
import {ReactComponent as Time} from "../../assets/svg/time_item.svg";
import {ReactComponent as Timer} from "../../assets/svg/timer.svg";
import {ReactComponent as LocationBig} from "../../assets/svg/location.svg";

const FidView = () => {
    const {id} = useParams()
    return (
        <div className={s.main}>
            {+id === 2 && <div className={s.disabled_screen}/>}
            <SwipperContent/>

            <div className={s.description_box}>
                <div className={s.header}>
                    <h2 className={s.header_title}>{`Пати у деда-${id}`}</h2>

                    <p className={s.hashtag}>@DedushkaBoy</p>

                    <div className={s.avatar}>
                        <Avatar src={ded} sx={{height: '56px', width: '56px'}}/>
                    </div>
                </div>

                <div className={s.description_event}>
                    <div className={s.description_event_item}>
                        <div className={s.item}>
                            <Location/>
                            <p className={s.item_title}>Moscow</p>
                        </div>
                        <div className={s.item}>
                            <Calendar/>
                            <p className={s.item_title}>November 28, 2023</p>
                        </div>
                    </div>
                    <div className={s.description_event_item}>
                        <div className={s.item}>
                            <Time/>
                            <p className={s.item_title}>20:00</p>
                        </div>
                        <div className={s.item}>
                            <Timer/>
                            <p className={s.item_title}>1ч 30м</p>
                        </div>
                    </div>
                </div>

                <p className={s.description}>
                    28 ноября, в 9 часов вечера собираемся бухать у дедушки,
                    ждём всех, нас уже около 4000 человек, все мужики,
                    пати будет продолжаться около года, ждем! Cпециальные гости - Газманов.
                    С уважением Ваш, Baлерий Леонтьев.
                </p>

                <div className={s.users_locations}>
                    <div className={s.stock_avatar}>
                        <Avatar src={avatar}
                                sx={{border: '2px solid #FEF7FF', height: '30px', width: '30px', marginLeft: '-16px'}}/>
                        <Avatar src={ded2}
                                sx={{border: '2px solid #FEF7FF', height: '30px', width: '30px', marginLeft: '-16px'}}/>
                        <div className={s.total_avatar}>+4k</div>
                    </div>

                    <div className={s.location_big}>
                        <LocationBig/>
                    </div>
                </div>

                {+id === 2 ? <div className={s.finish}>Уже завершено</div> : <div className={s.btn}>
                    Я пойду
                </div>}
            </div>
        </div>
    );
};

export default FidView;
