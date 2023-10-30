import React, {useState} from 'react';
import s from './styles.module.css'
import {Avatar, IconButton} from "@mui/material";
import avatar from "../../../assets/image/img5.png";
import ded2 from "../../../assets/image/img1.png";
import {ReactComponent as Location} from "../../../assets/svg/location_item.svg";
import {ReactComponent as Calendar} from "../../../assets/svg/calendar_item.svg";
import {ReactComponent as Time} from "../../../assets/svg/time_item.svg";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Item = ({img, title, description, location, calendar, time}) => {
    const [isLike, setIsLike] = useState(false)
    return (
        <div className={s.item}>
            <Avatar src={img} sx={{width: '180px', height: '100%', borderRadius: 0}}/>
            <div className={s.content}>
                <div className={s.content_left}>
                    <div className={s.content_left_top}>
                        <h2 className={s.title}>{title}</h2>
                        <p className={s.description}>{description}</p>
                    </div>
                    <div className={s.content_left_bottom}>
                        <div className={s.content_left_bottom_info}>
                            <div className={s.content_left_bottom_info_item}>
                                <Location/>
                                <p>{location}</p>
                            </div>
                            <div className={s.content_left_bottom_info_item}>
                                <Calendar/>
                                <p>{calendar}</p>
                            </div>
                            <div className={s.content_left_bottom_info_item}>
                                <Time/>
                                <p>{time}</p>
                            </div>
                        </div>
                        <div className={s.stock_avatar}>
                            <Avatar src={avatar}
                                    sx={{
                                        border: '2px solid #FEF7FF',
                                        height: '30px',
                                        width: '30px',
                                        marginLeft: '-16px'
                                    }}/>
                            <Avatar src={ded2}
                                    sx={{
                                        border: '2px solid #FEF7FF',
                                        height: '30px',
                                        width: '30px',
                                        marginLeft: '-16px'
                                    }}/>
                            <div className={s.total_avatar}>+4k</div>
                        </div>
                    </div>
                </div>
                <div className={s.content_right}>
                    <IconButton onClick={() => setIsLike(!isLike)}>
                        {isLike ? <FavoriteIcon sx={{color: '#e55e5e'}}/> : <FavoriteBorderIcon/>}
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Item;
