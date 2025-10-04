import { BrowserRouter, Route,Routes } from "react-router-dom";
import { SignUpPage } from "./SignUpPage";
import { StudentStaffSelectionCard } from "./StudentStaffSelectionCard";
import { StudentPage } from "./StudentPage";
import { StaffPage } from "./StaffPage";
import { AuthKitProvider } from "@workos-inc/authkit-react";

export const RoutingPages = () => {

    return(
        <div>
            <AuthKitProvider clientId="client_01K54E5FHK9CE850VVJ3X864X7">
            <BrowserRouter>
             <Routes>
      <Route path="/" element={<StudentStaffSelectionCard />} />
      <Route path="/studentpage" element={<StudentPage/>} />
      <Route path="/staffpage" element={<StaffPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
    </BrowserRouter>
    </AuthKitProvider>
        </div>
    )
}