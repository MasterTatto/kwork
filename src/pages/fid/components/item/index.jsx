import React from 'react';
import s from './styles.module.css'
import {ReactComponent as Like} from "../../../../assets/svg/like_item.svg";
import {ReactComponent as LikeMobile} from "../../../../assets/svg/like.svg";
import {ReactComponent as Location} from "../../../../assets/svg/location_item.svg";
import {ReactComponent as Calendar} from "../../../../assets/svg/calendar_item.svg";
import {ReactComponent as Time} from "../../../../assets/svg/time_item.svg";
import {Avatar} from "@mui/material";
import {NavLink} from "react-router-dom";

const Item = ({title, img, location, date, time, id}) => {
    return (
        <NavLink to={`/fid/${id}`} className={s.item}>
            <div className={s.like_mobile}>
                <LikeMobile/>
            </div>
            <Avatar src={img} sx={{
                width: '100%',
                height: '148px',
                borderRadius: 0
            }}/>

            <div className={s.content}>
                <div className={s.content_top}>
                    <h3 className={s.title}>{title}</h3>

                    <div className={s.like}>
                        <Like/>
                    </div>
                </div>

                <div className={s.content_bottom}>
                    <div className={s.content_bottom_item}><Location/> <p>{location}</p></div>
                    <div className={s.content_bottom_item}><Calendar/> <p>{date}</p></div>
                    <div className={s.content_bottom_item}><Time/> <p>{time}</p></div>
                </div>
            </div>
        </NavLink>
    );
};

export default Item;
