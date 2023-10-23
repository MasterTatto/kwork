import React, {useState} from 'react';
import {SwipeableDrawer} from "@mui/material";
import s from './styles.module.css'
import {ReactComponent as Close} from "../../../../assets/svg/close.svg";
import {ReactComponent as SortIcon} from "../../../../assets/svg/sort_icon.svg";
import {ReactComponent as Select} from "../../../../assets/svg/select.svg";

const ModalSort = ({setOpen, open}) => {
    const [select, setSelect] = useState(null)
    const container = window !== undefined ? () => window.document.body : undefined;
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const iOS =
        typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    return (
        <SwipeableDrawer
            disableBackdropTransition={!iOS} disableDiscovery={iOS}
            sx={{

                '& .MuiPaper-root': {
                    background: 'rgba(0, 0, 0, 0.0);',
                    borderRadius: '16px 16px 0px 0px',
                    // opacity:'0'
                }
            }}
            container={container}
            anchor="bottom"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            swipeAreaWidth={36}
            disableSwipeToOpen={true}
            ModalProps={{
                keepMounted: true,
            }}
        >
            <div className={s.content}>
                <div className={s.header}>
                    <div onClick={toggleDrawer(false)}>
                        <Close/>
                    </div>
                    <div className={s.header_middle}>
                        <p>Сортировка</p>
                        <SortIcon/>
                    </div>
                    <p className={s.reset} onClick={() => setSelect(null)}>Сброс</p>
                </div>

                <div className={s.content_sort}>
                    <div className={s.content_item} onClick={() => setSelect(1)}>
                        <p className={s.title}>По умолчанию</p>
                        {select === 1 && <Select/>}
                    </div>
                    <div className={s.content_item} onClick={() => setSelect(2)}>
                        <p className={s.title}>По дате</p>
                        {select === 2 && <Select/>}
                    </div>
                    <div className={s.content_item} onClick={() => setSelect(3)}>
                        <p className={s.title}>По удаленности</p>
                        {select === 3 && <Select/>}
                    </div>
                    <div className={s.content_item} onClick={() => setSelect(4)}>
                        <p className={s.title}>Алкоголь</p>
                        {select === 4 && <Select/>}
                    </div>
                </div>

                <div className={s.btn} onClick={toggleDrawer(false)}>
                    применить
                </div>
            </div>
        </SwipeableDrawer>
    );
};

export default ModalSort;
