import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import NavbarFriends from "./NavbarFriends/NavbarFriends";

const Navbar = (props) => {

    let friendsData =
        props.state.friendsName.map((friend) => <NavbarFriends name={friend.name}/>)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.settings}>
                <NavLink to='/settings' className={navData => navData.isActive ? s.active : s.settings}>Settings</NavLink>
            </div>
            <div className={s.friend}>
                <NavLink to='/friends' className={navData => navData.isActive ? s.active : s.friend}>Friends</NavLink>
                <div className={s.friends}>
                    {friendsData}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;