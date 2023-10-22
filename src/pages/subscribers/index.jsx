import React, {useState} from 'react';
import s from './styles.module.css'
import Back from "../../common/back";
import {ReactComponent as Search} from "../../assets/svg/search.svg";
import {ReactComponent as Cancel} from "../../assets/svg/cancel.svg";
import Item from "./item";
import {mock} from "./mock";

const Subscribers = () => {
    const [value, setValue] = useState('')
    const [navigate, setNavigate] = useState(1)

    const filter_data = navigate === 2 ? mock.filter(f => f.isOnline) : mock
    return (
        <div className={s.main}>
            <div className={s.header}>
                <Back left={'0'} top={'0'} link={'/profile'}/>
                <p className={s.count}>Подписчики <span>25</span></p>
            </div>

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

            <div className={s.navigate}>
                <div className={s.navigate_item} onClick={() => setNavigate(1)}>Все</div>
                <div className={s.navigate_item} onClick={() => setNavigate(2)}>Онлайн</div>
                <div className={s.line} style={{
                    left: navigate === 1 ? 0 : '50%'
                }}/>
            </div>
            <div className={s.people_box}>
                {filter_data.map((el, i) => <Item key={i} {...el}/>)}
            </div>
        </div>
    );
};

export default Subscribers;
