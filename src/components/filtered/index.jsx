import React, {forwardRef, useState} from 'react';
import s from './styles.module.css'
import classNames from "classnames";
import SearchIcon from '@mui/icons-material/Search';
import DatePicker, {registerLocale} from 'react-datepicker'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import "react-datepicker/dist/react-datepicker.css";
import {FormControlLabel, Slider, Switch} from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import ru from 'date-fns/locale/ru';
import styled from "@emotion/styled";

registerLocale('ru', ru)
const categoris = ['Спорт', 'Выставка', 'Музыка', 'Посиделки', 'Для детей', 'Религия', 'Отдых за городом', 'Фестивали',]

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(() => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: '#3B4CDC',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#3B4CDC',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color: '#fff'
            ,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.7,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: '#E9E9EA',
        opacity: 1,
        // transition: theme.transitions.create(['background-color'], {
        //     duration: 500,
        // }),
    },
}));

const Filtered = () => {
    const [chooseCategory, setChooseCategory] = useState([])
    const [chooseDayStart, setChooseDayStart] = useState('')
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [value1, setValue1] = React.useState([2, 20]);
    const [value2, setValue2] = React.useState([2, 12]);

    const handleChange2 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue2([Math.min(newValue[0], value2[1] - 2), value2[1]]);
        } else {
            setValue2([value1[0], Math.max(newValue[1], value2[0] + 2)]);
        }
    };
    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - 2), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + 2)]);
        }
    };

    return (
        <div className={s.filtered}>
            <div className={s.reset_box}>
                <p className={s.reset}>Сбросить фильтр</p>
            </div>

            <div className={s.category_box}>
                <h4 className={s.title}>Категории:</h4>

                <div className={s.category_content}>
                    {categoris.map((el, i) => <div
                        onClick={() => setChooseCategory(chooseCategory.includes(el) ? chooseCategory.filter(f => f !== el) : [...chooseCategory, el])}
                        className={classNames(s.category, chooseCategory.includes(el) && s.active_category)}
                        key={i}>{el}</div>)}
                </div>
            </div>
            <div className={s.category_box_v2}>
                <h4 className={s.title}>Где искать:</h4>

                <div className={s.box}>
                    <div className={s.input_box}>
                        <SearchIcon/>
                        <input type="text" placeholder={'Город, радиус.'}/>
                    </div>
                </div>
            </div>
            <div className={s.category_box_v2}>
                <h4 className={s.title}>Временной диапазон:</h4>

                <div className={s.box}>
                    <div className={s.input_box}>
                        <CalendarMonthIcon/>
                        <DatePicker
                            locale={'ru'}
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(update) => {
                                setDateRange(update);
                            }}
                            placeholderText={'c даты - по дату'}
                        />
                    </div>
                </div>
            </div>
            <div className={s.category_box_v2}>
                <h4 className={s.title}>Колличество участников: от 2 до 20</h4>

                <div className={s.box}>
                    <Slider
                        min={2}
                        max={20}
                        step={1}
                        marks
                        sx={{
                            color: '#3B4CDC',
                            marginLeft: '10.5px',
                            width: `calc(100% - 21px)`,
                        }}
                        getAriaLabel={() => 'Minimum distance'}
                        value={value1}
                        onChange={handleChange1}
                        valueLabelDisplay="auto"
                        disableSwap
                    />
                </div>
            </div>
            <div className={s.category_box_v2}>
                <h4 className={s.title}>Продолжительность: от 2ч до 12ч</h4>

                <div className={s.box}>
                    <Slider
                        min={2}
                        max={12}
                        step={1}
                        marks
                        sx={{
                            color: '#3B4CDC',
                            marginLeft: '10.5px',
                            width: `calc(100% - 21px)`,
                        }}
                        getAriaLabel={() => 'Minimum distance'}
                        value={value2}
                        onChange={handleChange2}
                        valueLabelDisplay="auto"
                        disableSwap
                    />
                </div>
            </div>
            <div className={s.category_box_v2}>
                <h4 className={s.title}>Время проведения:</h4>

                <div className={s.box}>
                    <div className={s.cheep_days}>
                        <div onClick={() => setChooseDayStart(1)} className={s.cheep_day} style={{
                            borderRight: '1px solid #79747E',
                            background: chooseDayStart === 1 && '#E0E0F9'
                        }}>
                            {chooseDayStart === 1 && <DoneIcon/>}
                            Утро
                        </div>
                        <div style={{
                            background: chooseDayStart === 2 && '#E0E0F9'
                        }} onClick={() => setChooseDayStart(2)} className={s.cheep_day}>
                            {chooseDayStart === 2 && <DoneIcon/>}
                            День
                        </div>
                        <div onClick={() => setChooseDayStart(3)} className={s.cheep_day} style={{
                            borderLeft: '1px solid #79747E',
                            background: chooseDayStart === 3 && '#E0E0F9'
                        }}>
                            {chooseDayStart === 3 && <DoneIcon/>}
                            Вечер
                        </div>
                        <div onClick={() => setChooseDayStart(4)} className={s.cheep_day} style={{
                            borderLeft: '1px solid #79747E',
                            background: chooseDayStart === 4 && '#E0E0F9'
                        }}>
                            {chooseDayStart === 4 && <DoneIcon/>}
                            Ночь
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.switch_box}>
                <div className={s.switch_item}>
                    <p>Наличие алкоголя</p>
                    <FormControlLabel
                        control={<IOSSwitch sx={{m: 1}} defaultChecked/>}
                    />
                </div>
                <div className={s.switch_item}>
                    <p>Бесплатное</p>
                    <FormControlLabel
                        control={<IOSSwitch sx={{m: 1}} defaultChecked/>}

                    />
                </div>
                <div className={s.switch_item}>
                    <p>Только 18+</p>
                    <FormControlLabel
                        control={<IOSSwitch sx={{m: 1}} defaultChecked/>}

                    />
                </div>
            </div>
        </div>
    );
};

export default Filtered;
