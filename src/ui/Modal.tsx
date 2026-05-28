import { useContext } from "react"
import styles from "./ui.module.css"
import { ConfirmModalContext, ErrorModalContext, ErrorRedirectModalContext, SuccessModalContext, SuccessRedirectModalContext } from "../context/ModalContext"

export function SuccessRedirectModal() {

    const context = useContext(SuccessRedirectModalContext);

    if (!context) return;

    const { successRedirectMessage } = context;

    return (
        <>
        {successRedirectMessage && (
            <div className={styles.successModal}>
                <div className={styles.success}>
                    <h3>{successRedirectMessage}</h3>
                    <i className="bi bi-check-circle"></i>
                </div>
                <div className="overlay"></div>
            </div>
        )}
        </>
    )
}

export function ErrorRedirectModal() {

    const context = useContext(ErrorRedirectModalContext);

    if (!context) return;

    const { errorRedirectMessage } = context;

    return (
        <>
        {errorRedirectMessage && (
            <div className={styles.errorModal}>
                <div className={styles.error}>
                    <h3>{errorRedirectMessage}</h3>
                    <i className="bi bi-x-circle"></i>
                </div>
                <div className="overlay"></div>
            </div>
        )}
        </>
    )
}

export function SuccessModal() {

    const context = useContext(SuccessModalContext);

    if (!context) return;

    const { successMessage, setSuccessMessage, showSuccessModal, setShowSuccessModal } = context;

    return (
        <>
        {successMessage && showSuccessModal ? (
            <div className={styles.successModal}>
            <div className={styles.success}>
                <h3>{successMessage}</h3>
                <i className="bi bi-check-circle"></i>
                <button 
                type="button"
                onClick={() => {
                    setSuccessMessage(null);
                    setShowSuccessModal(false)
                }}
                >
                    ok
                </button>
            </div>
            <div className="overlay"></div>
            </div>
        ) : (
            null
        )}
        </>
    )
}

export function ErrorModal() {

    const context = useContext(ErrorModalContext);

    if (!context) return;

    const { errorMessage, setErrorMessage, showErrorModal, setShowErrorModal } = context;

    return (
        <>
        {errorMessage && showErrorModal ? (
            <div className={styles.errorModal}>
            <div className={styles.error}>
                <h3>{errorMessage}</h3>
                <i className="bi bi-x-circle"></i>
                <button 
                type="button"
                onClick={() => {
                    setErrorMessage(null);
                    setShowErrorModal(false)
                }}
                >
                    ok
                </button>
            </div>
            <div className="overlay"></div>
            </div>
        ) : (
            null
        )}
        </>
    )
}

export function ConfirmModal() {

    const context = useContext(ConfirmModalContext);

    if (!context) return;

    const { confirmMessage, setConfirmMessage, setConfirm } = context;

    return (
        <>
        {confirmMessage && (
            <div className={styles.confirmModal}>
                <div className={styles.confirm}>
                    <h3>{confirmMessage}</h3>
                    <button
                    type="button"
                    onClick={() => {
                    setConfirmMessage(null);
                    setConfirm(true);
                    }}
                    >yes</button>

                    <button
                    type="button"
                    onClick={() => {
                    setConfirmMessage(null);
                    setConfirm(false);
                    }}
                    >no</button>
                </div>
                <div className="overlay"></div>
            </div>
        )}
        </>
    )
}