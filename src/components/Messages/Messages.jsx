import s from './Messages.module.css'
import Message from './MessagesItems/MessagesItems'
import Dialogs from './Dialogs/Dialogs'




const Messages = (props) => {

    let dialogsElements = props.usrs.map(d => <Dialogs name={d.name} id={d.id} />)

    let messageElements = props.msg.map(m => <Message text={m.text} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Messages