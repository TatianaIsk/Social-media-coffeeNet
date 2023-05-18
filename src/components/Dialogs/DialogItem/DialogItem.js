import s from "../Dialigs.module.css";
import {NavLink} from "react-router-dom";
import ava from './../../../img/users.png'

const DialogItem = (props) => {

  let path = '/dialogs/' + props.id

  return (
      <div className={s.dialog}>
          <img className={s.users} src={ava} alt=''/>
          <NavLink to={path} className = { navData => navData.isActive ? s.active : s.dialog }>{props.name}</NavLink>
      </div>
  )
}

export default DialogItem