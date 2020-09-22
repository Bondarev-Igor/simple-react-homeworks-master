import React from "react";
import {AffairType} from "./HW2";
import style from './Affair.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback:(_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {props.deleteAffairCallback(_id)};// need to fix

    return (
        <div className={style.wrapper}>
            <span className={style.name}>{props.affair.name}</span>
            <span className={style.priority}>Priority - {props.affair.priority}</span>
            <button onClick={ () => {deleteCallback(props.affair._id)} }>X</button>
        </div>
    );
}

export default Affair;
