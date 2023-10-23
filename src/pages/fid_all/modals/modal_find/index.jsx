import React, {useState} from 'react';
import {Box, Modal} from "@mui/material";
import s from './styles.module.css'
import {NavLink} from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {ReactComponent as Search} from "../../../../assets/svg/search.svg";
import {ReactComponent as Cancel} from "../../../../assets/svg/cancel.svg";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '100%',
    background: '#FEF7FF',
    border: 'none',
    height: '100dvh',
    padding: '25px 8px 38px 8px'
};
const ModalFind = ({open, handleClose}) => {
    const [value, setValue] = useState('')
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={{...style, display: 'flex', flexDirection: 'column'}} justifyContent={'space-between'}>
                <div className={s.header}>
                    <div className={s.back}>
                        <div onClick={handleClose}>
                            <ArrowBackIosNewIcon sx={{fontSize: '20px'}}/>
                        </div>
                        <div className={s.header_item}>
                            <p className={s.title}>Где искать?</p>
                        </div>
                        <div className={s.header_item_s}>
                            <p className={s.reset} onClick={() => setValue('')}>Сброс</p>
                        </div>
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
                </div>
                <div onClick={handleClose} className={s.btn}>применить</div>
            </Box>
        </Modal>
    );
};

export default ModalFind;
