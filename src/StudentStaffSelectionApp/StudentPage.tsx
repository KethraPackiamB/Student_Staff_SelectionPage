import { useAuth } from "@workos-inc/authkit-react";

export const StudentPage = () => {

    const {signOut} = useAuth();

    return(
        <div>
            <h1>Welcome Student 🎓</h1>
            <p> You are logged in as a student.</p>
            <button onClick={()=>{signOut}}></button>
        </div>
    )
}