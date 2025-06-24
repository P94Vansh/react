import { useContext } from "react";
import UserContext from "../context/UserContext";
function Profile(){
    const {user}=useContext(UserContext)
    if(!user) return <div>User is not available</div>
    return <div>Username: {user.username}</div>
}
export default Profile