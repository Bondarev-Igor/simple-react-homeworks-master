import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5GKQqNoKmX2WV_hVPFHcboUcsq7ls59YUBw&usqp=CAU",
    name: "Igor",
    message: "Good night!",
    time: "22:00",
};
const alternativeMessageData = {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTi2Df3JMEWNnjqIHEzabX103E95vNL2ru0cQ&usqp=CAU",
    name: "Brother",
    message: "...and good fight;)",
    time: "22:09",
};

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <Message
                avatar={alternativeMessageData.avatar}
                name={alternativeMessageData.name}
                message={alternativeMessageData.message}
                time={alternativeMessageData.time}
            />
            <hr/>
            для личного творчества, могу проверить
            <AlternativeMessage/>
            <hr/>
        </div>
    );
}

export default HW1;
