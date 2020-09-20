import React from "react";
import style from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return <div>
        <p className={style.wrapper}>
            <img className={style.avatar} src={props.avatar}/>
            <p className={style.radius}></p>
            <p className={style.triangle}></p>
            <p className={style.message}>
                <div className={style.name}>{props.name}</div>
                <span className={style.textMessage}>{props.message}</span><span className={style.time}>{props.time}</span>
            </p>
        </p>
    </div>
}

export default Message;
