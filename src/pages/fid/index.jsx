import React, {useState} from 'react';
import s from './styles.module.css'
import Container from "../../components/container";
import Title from "../../common/title";
import SearchIcon from '@mui/icons-material/Search';
import Item from "./item";
import {mock} from "./mock";
import Filtered from "../../components/filtered";

const Fid = () => {
    const [category, setCategory] = useState(1)
    return (
        <Container>

            <div className={s.wrapper}>
                <div className={s.content}>
                    <div className={s.header}>
                        <Title title={'Поиск события'}/>

                        <div className={s.choose_category}>
                            <div style={{
                                background: category === 1 && 'rgba(88, 55, 243, 0.20)'
                            }} className={s.category_item} onClick={() => setCategory(1)}>
                                <p className={s.category_title}>Транспорт
                                    <span className={s.category_count}>15</span>
                                </p></div>
                            <div style={{
                                background: category === 2 && 'rgba(88, 55, 243, 0.20)'
                            }} className={s.category_item} onClick={() => setCategory(2)}>
                                <p className={s.category_title}>Выставка
                                    <span className={s.category_count}>8</span>
                                </p></div>
                            <div style={{
                                background: category === 3 && 'rgba(88, 55, 243, 0.20)'
                            }} className={s.category_item} onClick={() => setCategory(3)}>
                                <p className={s.category_title}>Обучения
                                    <span className={s.category_count}>22</span>
                                </p></div>
                            <div style={{
                                background: category === 4 && 'rgba(88, 55, 243, 0.20)'
                            }} className={s.category_item} onClick={() => setCategory(4)}>
                                <p className={s.category_title}>Для детей
                                    <span className={s.category_count}>3</span>
                                </p></div>
                        </div>

                        <div className={s.search_box}>
                            <SearchIcon/>
                            <input type="text" className={s.input} placeholder={'Поиск'}/>
                        </div>

                    </div>

                    <div className={s.content_box}>
                        {mock.map((el, i) => <Item key={i} {...el}/>)}
                    </div>

                </div>
                <Filtered/>
            </div>
        </Container>
    );
};

export default Fid;
