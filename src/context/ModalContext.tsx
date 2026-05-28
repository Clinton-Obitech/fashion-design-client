import { createContext, useState } from "react"
import type { ChildrenNode, ConfirmContextType, ErrorContextType, ErrorRedirectContextType, SuccessContextType, SuccessRedirectContextType } from "../types/context";

export const SuccessRedirectModalContext = createContext<SuccessRedirectContextType | null>(null);
export const ErrorRedirectModalContext = createContext<ErrorRedirectContextType | null>(null);
export const ConfirmModalContext = createContext<ConfirmContextType | null>(null);
export const SuccessModalContext = createContext<SuccessContextType | null>(null);
export const ErrorModalContext = createContext<ErrorContextType | null>(null);

export function SuccessRedirectModalProvider({children}:ChildrenNode) {

    const [successRedirectMessage, setSuccessRedirectMessage] = useState<string | null>(null);

    return (
        <SuccessRedirectModalContext.Provider value={
            {successRedirectMessage, setSuccessRedirectMessage}
            }>
            {children}
        </SuccessRedirectModalContext.Provider>
    )
}

export function ErrorRedirectModalProvider({children}:ChildrenNode) {

    const [errorRedirectMessage, setErrorRedirectMessage] = useState<string | null>(null);

    return (
        <ErrorRedirectModalContext.Provider value={
            {errorRedirectMessage, setErrorRedirectMessage}
            }>
            {children}
        </ErrorRedirectModalContext.Provider>
    )
}

export function SuccessModalProvider({children}:ChildrenNode) {

    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    return (
        <SuccessModalContext.Provider value={{
            showSuccessModal, setShowSuccessModal, successMessage, setSuccessMessage
        }}>
            {children}
        </SuccessModalContext.Provider>
    )
}

export function ErrorModalProvider({children}:ChildrenNode) {

    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    return (
        <ErrorModalContext.Provider value={{
            showErrorModal, setShowErrorModal, errorMessage, setErrorMessage
        }}>
            {children}
        </ErrorModalContext.Provider>
    )
}

export function ConfirmModalProvider({children}:ChildrenNode) {

    const [confirmMessage, setConfirmMessage] = useState<string | null>(null);
    const [confirm, setConfirm] = useState(false);
    return (
        <ConfirmModalContext.Provider value={{
            confirmMessage, setConfirmMessage, confirm, setConfirm
        }}>
            {children}
        </ConfirmModalContext.Provider>
    )
}