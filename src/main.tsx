import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/index.tsx'
import "@fontsource/almarai"
import "@fontsource/poppins"
import "@fontsource/lexend"
import '@/styles/_global_imports.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
)
