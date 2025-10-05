import { useAuth } from "@workos-inc/authkit-react";
import { useNavigate } from "react-router-dom";

export const StaffPage = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate("/"); 
  };

  return (
    <center>
      <h1>Welcome Staff</h1>
      <p>You are logged in as a staff member.</p>
      <button onClick={handleLogout}>Log Out</button>
    </center>
  );
};
