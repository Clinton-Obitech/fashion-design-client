import axios from "axios";
import { useContext, useState } from "react"
import { ErrorModalContext, SuccessModalContext } from "../context/ModalContext";
import { ButtonLoader } from "./Loader";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { LoggedContext } from "../context/LoggedContext";

export function LogoutUser() {

    const [loading, setLoading] = useState(false);

    const errorContext = useContext(ErrorModalContext);
    if (!errorContext) return null;
    const { setErrorMessage, setShowErrorModal } = errorContext;

    const successContext = useContext(SuccessModalContext);
    if (!successContext) return null;
    const { setSuccessMessage, setShowSuccessModal } = successContext;

    const loggedContext = useContext(LoggedContext);
    if (!loggedContext) return null;
    const { setLogged } = loggedContext;

    const navigate = useNavigate();

    const Logout = async () => {
        try {
            setLoading(true);

           if (!navigator.onLine) {
            setErrorMessage("no internet connection");
            setShowErrorModal(true);
            return;
           }

           const { data } = await api.post("/api/logout/user");

           localStorage.removeItem("logged");

           setLogged(() => {
                return JSON.parse(localStorage.getItem("logged") || "false")
                }
            )

           localStorage.removeItem("username");
           localStorage.removeItem("shop");

           setSuccessMessage(data.message);
           setShowSuccessModal(true);

           navigate("/login/user", {replace: true});

        } catch (err) {

            if (axios.isAxiosError(err)) {
                setErrorMessage(err.response?.data?.error || "something went wrong");
                setShowErrorModal(true);
            } else {
                console.error(err)
            }

        } finally {
            setLoading(false)
        }
    }

    return (
        <button
        style={{padding: "1rem"}}
         type="button" onClick={Logout}>
            {loading ? <ButtonLoader /> : "logout"}
        </button>
    )
}