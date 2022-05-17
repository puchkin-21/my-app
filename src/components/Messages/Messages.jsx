import { NavLink } from 'react-router-dom'
import s from './Messages.module.css'

const MessagesItems = (props) => {
    let path = "/messages/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

const Messages = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <MessagesItems name='Maxim' id='1' />
                <MessagesItems name='Nikita' id='2' />
                <MessagesItems name='Alina' id='3' />
                <MessagesItems name='Mary' id='4' />
            </div>
            <div className={s.messages}>
                <Message text='Hello, world' />
                <Message text='Hi, bro' />
                <Message text='Shut up' /></div>
        </div>
    )
}

export default Messages