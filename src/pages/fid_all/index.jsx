import React, {useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import s from './styles.module.css'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {ReactComponent as Setting} from "../../assets/svg/settings.svg";
import {ReactComponent as Compass} from "../../assets/svg/compass.svg";
import {ReactComponent as Arrow} from "../../assets/svg/arrow.svg";
import {ReactComponent as Sort} from "../../assets/svg/sort.svg";
import {mock} from "../fid/components/mock";
import ItemFid from "../../components/item_fid";
import ModalFind from "./modals/modal_find";
import ModalSort from "./modals/modal_sort";

const FidAll = () => {
    const {name} = useParams()
    const current_box = mock.find((f) => f.title === name)

    const [openFindModal, setOpenFindModal] = useState(false)
    const [openSortModal, setOpenSortModal] = useState(false)

    return (
        <div className={s.main}>
            <ModalSort open={openSortModal} setOpen={setOpenSortModal}/>
            <ModalFind open={openFindModal} handleClose={() => setOpenFindModal(false)}/>
            <div className={s.header}>
                <NavLink to={'/'} className={s.back}>
                    <ArrowBackIosNewIcon sx={{fontSize: '20px'}}/>
                </NavLink>
                <p className={s.header_title}>{name}</p>
            </div>

            <div className={s.sort_box}>
                <div className={s.sort_box_top}>
                    <div className={s.sort_box_top_left} onClick={() => setOpenFindModal(true)}>
                        <Compass/>
                        <p className={s.sort_box_top_left_title}>Где искать?</p>
                        <Arrow/>
                    </div>
                    <div className={s.setting_icon}><Setting/></div>
                </div>
                <div className={s.sort_box_bottom} onClick={() => setOpenSortModal(true)}>
                    <Sort/>
                    <p className={s.sort_title}>Сортировка</p>
                </div>
            </div>

            <div className={s.content}>
                {current_box?.data?.map((el, ind) => <ItemFid key={ind} {...el}/>)}
            </div>
        </div>
    );
};

export default FidAll;
