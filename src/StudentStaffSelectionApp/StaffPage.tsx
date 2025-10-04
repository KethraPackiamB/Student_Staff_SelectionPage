import { useAuth } from "@workos-inc/authkit-react";

export const StaffPage = () => {

    const {signOut} = useAuth();
    return(
        <div>
            <center>
            <h1>Welcome Staff 👨‍🏫</h1>
            <p>You are logged in as a staff member.</p>
            <button onClick={()=>{signOut()}}>LogOut</button>
            </center>
        </div>
    )
}