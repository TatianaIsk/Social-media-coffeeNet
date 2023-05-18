import s from './ProfileInfo.module.css'
import ava from '../../../img/ava.png'

const ProfileInfo = () => {
    return (
        <div className={s.descriptionBlock}>
            <img src={ava} alt='' className={s.ava}/>
            <div className={s.description}>
                <p>User</p>
                <p>18 y.o.</p>
                <button>More information</button>
            </div>
        </div>
    )
}

export default ProfileInfo