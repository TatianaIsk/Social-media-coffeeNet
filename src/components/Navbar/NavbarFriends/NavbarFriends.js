import s from "./NavbarFriends.model.css"
import friends from "./../../../img/users_white.png"
const NavbarFriends = (props) => {
  return (
      <div className="friends">
          <img className="photo" src={friends} alt=''/>
          <p className="text">{props.name}</p>
      </div>
  )
}

export default NavbarFriends;