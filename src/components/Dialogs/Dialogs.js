import React from "react";

import s from './Dialigs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements =
        props.state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)

    let addMessage = React.createRef()

    let addNewMessage = () => {
        let message = addMessage.current.value
        alert(message)
    }

    let messagesElemnts =
        props.state.messageDate.map((message) => <Message text={message.text}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElemnts }
                <div className={s.addMessage}>
                    <textarea ref={addMessage}></textarea>
                    <button onClick={ addNewMessage } className={s.add}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;