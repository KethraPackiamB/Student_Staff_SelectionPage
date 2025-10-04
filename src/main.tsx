import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css'
import App from './App.tsx'
import { ClearLocalStorage } from './ClearLocalStorage.tsx';
import { SignUp } from './Components/SignUp.tsx';
import Page from './RegistrationPage/Page.tsx';
import { AuthKitProvider } from '@workos-inc/authkit-react';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <ClearLocalStorage/> */}
    {/* <AuthKitProvider clientId="client_01K54E5FHK9CE850VVJ3X864X7">
    <Page/>
    </AuthKitProvider> */}
  </StrictMode>,
)
