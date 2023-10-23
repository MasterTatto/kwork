import React from 'react';
import s from './styles.module.css'
import Container from "../../components/container";
import Navigate from "./components/navigate";
import Cheaps from "./components/cheaps";
import {mock} from "./components/mock";
import {NavLink} from "react-router-dom";
import ItemFid from "../../components/item_fid";

const Fid = () => {
    return (
        <Container>
            <div className={s.content}>
                <div className={s.action}>
                    <Navigate/>
                    <Cheaps/>
                </div>
                <div className={s.main_content}>
                    {mock.map((el, i) => <div key={i} className={s.main_content_item}>
                        <div className={s.main_content_item_header}>
                            <h3 className={s.title}>{el.title}</h3>
                            <NavLink to={`/fid/all/${el.title}`} className={s.show_more}>Все</NavLink>

                        </div>
                        <div className={s.content_items}>
                            {el.data.map((item, ind) => <ItemFid key={ind} {...item}/>)}
                        </div>
                    </div>)}
                </div>

            </div>
        </Container>
    );
};

export default Fid;
