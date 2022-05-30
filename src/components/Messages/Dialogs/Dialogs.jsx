import { NavLink } from 'react-router-dom'
import s from './../Messages.module.css'

const Dialogs = (props) => {
    let path = "/messages/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Dialogs