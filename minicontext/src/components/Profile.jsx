import React , { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    const {user} = useContext(UserContext);
    if(!user) return <div>Please Login</div>

    return <div>Welcome <h3>{user.username}</h3></div>
}

export default Profile
