import React from 'react';
import s from './styles.module.css'
import {ReactComponent as Logo} from "../../assets/svg/logo.svg";
import {ReactComponent as Like} from "../../assets/svg/like.svg";
import Container from "../container";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.logo}>
                        <Logo/>
                    </div>
                    <div className={s.content_right}>
                        <div className={s.like}>
                            <Like/>
                        </div>

                        <div className={s.btn}>
                            Создать событие
                        </div>

                        <div className={s.link}>
                            Вход и регистрация
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
