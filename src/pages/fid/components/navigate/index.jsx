import React, {useState} from 'react';
import s from './styles.module.css'
import {ReactComponent as Search} from "../../../../assets/svg/search.svg";
import {ReactComponent as Cancel} from "../../../../assets/svg/cancel.svg";
import {ReactComponent as Location} from "../../../../assets/svg/location.svg";
import {ReactComponent as Settings} from "../../../../assets/svg/settings.svg";

const Navigate = () => {
    const [value, setValue] = useState('')

    return (
        <div className={s.navigate}>
            <div className={s.navigate_left}>
                <div className={s.input_box}>
                    <div className={s.search}>
                        <Search/>
                    </div>
                    <input placeholder={'Поиск...'} className={s.input} type="text" value={value}
                           onChange={(e) => setValue(e.target.value)}/>
                    <div className={s.cancel} onClick={() => setValue('')}>
                        <Cancel/>
                    </div>
                </div>

                <div className={s.btn}>
                    Найти
                </div>
            </div>
            <div className={s.navigate_right}>
                <div className={s.location}>
                    <Location/>
                </div>

                <p>
                    Во всех регионах
                </p>
            </div>

            <div className={s.navigate_right_mobile}>
                <Settings/>
            </div>
        </div>
    );
};

export default Navigate;
