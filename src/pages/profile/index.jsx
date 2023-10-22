import React from 'react';
import s from './styles.module.css'
import Back from "../../common/back";
import avatar from '../../assets/image/img2.png'
import {Avatar} from "@mui/material";
import {ReactComponent as Add} from "../../assets/svg/add_friend.svg";
import {ReactComponent as Event} from "../../assets/svg/event.svg";
import {mock} from "../favorite/mock";
import FavoriteItem from "../../components/favotite_item";
import {NavLink} from "react-router-dom";

const cheap = ['Techno', 'Music', 'Auto', 'JAVA', 'Cotlin', 'Dogs', 'Girls', 'Design']

const Profile = () => {
    return (
        <div className={s.main}>
            <Back left={'16px'} top={'8px'}/>

            <div className={s.header}>
                <div className={s.header_info}>
                    <Avatar src={avatar} sx={{width: '120px', height: '120px'}}/>

                    <div className={s.content_info}>
                        <div className={s.content_info_left}>
                            <h3 className={s.nickname}>@DedushaGirl</h3>
                            <p className={s.description}>Катя Аркадьевна</p>
                            <p className={s.description}>78 лет</p>
                            <p className={s.description}>Програмист</p>

                            <div className={s.count_box}>
                                <NavLink to={'/subscribers'} className={s.subscribes}>
                                    <p className={s.count}>32</p>
                                    <p className={s.count_title}>Подписчики</p>
                                </NavLink>
                                <div className={s.subscribes}>
                                    <p className={s.count}>2</p>
                                    <p className={s.count_title}>Подписки</p>
                                </div>
                            </div>
                        </div>
                        <div className={s.content_info_right}>
                            <Add/>
                        </div>
                    </div>
                </div>

                <div className={s.cheap}>
                    <h3 className={s.cheap_title}>Интересы:</h3>

                    <div className={s.content_cheap}>
                        {cheap.map((el, i) => <div className={s.cheap_item} key={i}>{el}</div>)}
                    </div>
                </div>

                <div className={s.action}>
                    <div className={s.action_event}>
                        <Event/>
                        <p className={s.action_event_title}>События</p>
                    </div>
                </div>
            </div>
            <div className={s.favorite}>
                {mock.map((el, i) => <FavoriteItem key={i} isRemove={true} {...el}/>)}
            </div>
        </div>
    );
};

export default Profile;
