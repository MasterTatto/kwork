import React, {useEffect, useState} from 'react';
import s from './styles.module.css'
import avatar from '../../assets/image/sub1.png'
import {Avatar, Rating} from "@mui/material";
import {NavLink, useLocation} from "react-router-dom";
import classNames from "classnames";

const tags = ['Автомобили', 'Музыка', 'Посиделки', 'Отдых за городом', 'Еда']

const navigate = [
    {title: 'Мои события', link: '/'},
    {title: 'Избранное', link: '/favorite'},
    {title: 'Управление профилем', link: ''},
    {title: 'Чат', link: '/chat'},
    {title: 'Уведомления', link: ''},
    {title: 'Подписчики/подписки', link: ''},
]
const Navigate = () => {
    const {pathname} = useLocation()
    // const [path, setPath] = useState('')
    //
    // useEffect(() => {
    //     setPath(pathname)
    // }, [pathname])
    return (
        <div className={s.navigate}>
            <Avatar src={avatar} sx={{width: '120px', height: '120px', borderRadius: '50%'}}/>

            <div className={s.info_box}>
                <h2 className={s.nickname}>@Babushkaboy</h2>
                <p className={s.fullname}>Петя Евгеньевна</p>
                <Rating name="read-only" value={4} sx={{
                    marginTop: '8px',
                    '& span ': {
                        '& span ': {
                            '& svg ': {
                                height: '24px',
                                width: '24px'
                            }
                        }
                    }
                }} max={6} readOnly/>

                <p className={s.year}>62 года </p>

                <p className={s.job}>Хирург/Организатор вечеринок</p>
            </div>

            <div className={s.interesting_box}>
                <p className={s.interesting_title}>Мои интересы:</p>

                <div className={s.cheap_box}>
                    {tags.map((el) => <div className={s.cheap_item} key={el}>{el}</div>)}
                </div>
            </div>

            <div className={s.navigate_box}>
                {navigate.map((el) => <NavLink className={classNames(s.link,pathname === el.link && s.active)} to={el.link}>{el.title}</NavLink>)}
            </div>
        </div>
    );
};

export default Navigate;
