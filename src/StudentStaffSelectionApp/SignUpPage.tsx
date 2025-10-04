import { useAuth } from "@workos-inc/authkit-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
   
    signIn().then(() => {
     
      const role = localStorage.getItem("selectedRole");

      if (role === "Student") {
        navigate("/studentpage"); 
      } 
      
      else if (role === "Staff") {
        navigate("/staffpage"); 
      } 
      
      // else {
      //   navigate("/"); 
      // }

    });
  }, [signIn(), navigate]);

  return (
    <div>
      <p>Redirecting to sign up...</p>
    </div>
  );
};
