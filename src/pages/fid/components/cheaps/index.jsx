import React, {useState} from 'react';
import s from './styles.module.css'
import classNames from 'classnames'

const mock = [
    'Авто',
    'Музыка',
    'Кино',
    'Спорт',
    'Спорт1',
    'Спорт2',
    'Спорт3',
    'Спорт4',
    'Спорт5',
    'Спорт6',
    'Спорт7',
    'Спорт8',
    'Спорт9',
    'Спорт10',
    'Спорт11',
    'Спорт12',
]
const Cheaps = () => {
    const [selected, setSelected] = useState([])

    return (
        <div className={s.cheaps}>
            <div className={s.content}>
                {mock.map((el) => <div key={el} onClick={() => {
                    if (selected.find(f => f === el)) {
                        setSelected(selected.filter(f => f !== el))
                    } else {
                        setSelected([...selected, el])
                    }
                }} className={classNames(s.item, selected.find(f => f === el) && s.selected)}>{el}</div>)}
            </div>
        </div>
    );
};

export default Cheaps;
