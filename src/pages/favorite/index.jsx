import React from 'react';
import s from './styles.module.css'
import {mock} from "./mock";
import FavoriteItem from "../../components/favotite_item";

const Favorite = () => {
    return (
        <div className={s.main}>
            <div className={s.header}>
                <h3 className={s.title}>Избранное</h3>
                <p className={s.sub_title}>12 событий</p>
            </div>

            <div className={s.content}>
                {mock.map((el, i) => <FavoriteItem key={i} {...el}/>)}
            </div>
        </div>
    );
};

export default Favorite;
