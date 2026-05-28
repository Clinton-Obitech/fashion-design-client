import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { LoggedProvider } from './context/LoggedContext.tsx'
import { ConfirmModalProvider, ErrorModalProvider, ErrorRedirectModalProvider, SuccessModalProvider, SuccessRedirectModalProvider } from './context/ModalContext.tsx'
import SetShopProvider from './context/SetShopContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <LoggedProvider>
      <ErrorModalProvider>
        <SuccessModalProvider>
          <ErrorRedirectModalProvider>
            <SuccessRedirectModalProvider>
              <ConfirmModalProvider>
                <SetShopProvider>
                  <App />
                </SetShopProvider>
              </ConfirmModalProvider>
            </SuccessRedirectModalProvider>
          </ErrorRedirectModalProvider>
        </SuccessModalProvider>
      </ErrorModalProvider>
    </LoggedProvider>
    </BrowserRouter>
  </StrictMode>,
)
