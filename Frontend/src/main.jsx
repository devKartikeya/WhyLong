import './index.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
    <HelmetProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
    </HelmetProvider>
);