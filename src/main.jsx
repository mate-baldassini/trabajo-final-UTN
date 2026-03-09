import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChatProvider } from './context/ChatContext'
import { RouterApp } from './router/RouterApp'
import { AuthProvider } from './context/AuthContext'
import './styles/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ChatProvider>
        <RouterApp />
      </ChatProvider>
    </AuthProvider>
  </StrictMode>
)