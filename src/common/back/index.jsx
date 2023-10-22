import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./styles.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Back = ({link = '/',top,left}) => {
    return (
        <NavLink to={link} className={s.back} style={{top:top,left:left}}>
            <ArrowBackIosNewIcon sx={{fontSize: '15px', marginRight: '3px', marginBottom: '2px', lineHeight: 0}}/>
        </NavLink>
    );
};

export default Back;
