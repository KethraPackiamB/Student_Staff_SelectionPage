import { AuthKitProvider } from '@workos-inc/authkit-react';
import Page from './RegistrationPage/Page';
import { StudentStaffSelectionPage } from './SelectionPage/StudentStaffSelectionPage';
import { Student } from './Components/Student';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './Components/Routing';
import { RoutingPages } from './StudentStaffSelectionApp/RoutingPages';


function App() {
 
  return (
   <div>

    {/* <BrowserRouter> */}
    {/* <AuthKitProvider clientId="client_01K54E5FHK9CE850VVJ3X864X7"> */}
    {/* <StudentStaffSelectionPage/> */}
    {/* <Routing/> */}
     {/* </AuthKitProvider> */}
    {/* </BrowserRouter> */}
    {/* <Student/> */}
     <RoutingPages/>
</div>
  )
}

export default App
