import React from 'react';
import s from "./styles.module.css";
import {Avatar} from "@mui/material";
import {ReactComponent as Delete} from "../../assets/svg/delete.svg";
import {ReactComponent as Location} from "../../assets/svg/location_item.svg";
import {ReactComponent as Calendar} from "../../assets/svg/calendar_item.svg";
import {ReactComponent as Time} from "../../assets/svg/time_item.svg";

const FavoriteItem = ({disabled, img, title, location, date, time,isRemove = false}) => {
    return (
        <div className={s.item}>
            {disabled && <div className={s.disabled_screen}/>}
            <Avatar src={img} sx={{height: '100%', width: '100px', borderRadius: 0}}/>
            <div className={s.content}>
                <div className={s.header}>
                    <h2 className={s.title}>{title}</h2>
                    {!isRemove && <Delete/>}
                </div>

                <div className={s.content_item}>
                    <div className={s.content_item_icon}><Location/><p className={s.icon_title}>{location}</p></div>
                    <div className={s.content_item_icon}><Calendar/><p className={s.icon_title}>{date}</p></div>
                    <div className={s.content_item_icon}><Time/><p className={s.icon_title}>{time}</p></div>
                </div>
            </div>
        </div>
    );
};

export default FavoriteItem;
