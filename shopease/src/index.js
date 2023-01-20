import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Auth0Provider  domain="dev-s0ldrvwo1tpjbpsr.us.auth0.com"
    clientId="WioGJXF7JTnGXVRUqz7763czRc1lYEeQ"
    authorizationParams={{
        redirect_uri: window.location.origin
      }} >  
<ChakraProvider>
<App />
</ChakraProvider>
</Auth0Provider>
    

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
