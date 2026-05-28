import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonLoader, Loader } from "../../../ui/Loader";
import axios from "axios";
import { ErrorModalContext, SuccessRedirectModalContext } from "../../../context/ModalContext";
import api from "../../../api/axios";
import { LoggedContext } from "../../../context/LoggedContext";
import styles from "../auth.module.css";

export default function LoginUser() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const errorContext = useContext(ErrorModalContext);
    if (!errorContext) return null;
    const { setErrorMessage, setShowErrorModal } = errorContext;

    const successContext = useContext(SuccessRedirectModalContext);
    if (!successContext) return null;
    const { setSuccessRedirectMessage } = successContext;

    const loggedContext = useContext(LoggedContext);
    if (!loggedContext) return null;
    const { setLogged } = loggedContext;

    const [showPassword, setShowPassword] = useState("password");

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const toggleShowPassword = () => {
        setShowPassword(
            showPassword === "password" ?
            "text" : "password"
        )
    }

    const HandleFormChange = (
        e:React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const HandleFormSubmit = async (
        e:React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        setLoading(true)
        try {
            if (!navigator.onLine) {
                setErrorMessage("no internet connection");
                setShowErrorModal(true);
                return;
            }

            const { data } = await api.post("/api/login/user", formData);

            setSuccessRedirectMessage(data.message);

            setFormData({
                email: "",
                password: "",
            })

            localStorage.removeItem("shop");

            localStorage.setItem("username", data.username);

            localStorage.setItem("logged", JSON.stringify("true"));

            setLogged(() => {
                return JSON.parse(localStorage.getItem("logged") || "false")
                }
            )

            if (data.role === "designer") {

                localStorage.setItem("shop", JSON.stringify(data.designerShop));

                setTimeout(() => {
                navigate("/designer/dashboard", {replace: true})
                }, 3000)
                
            } else if (data.role === "customer") {
                setTimeout(() => {
                navigate("/customer/dashboard", {replace: true})
                }, 3000)
            }

        } catch (err) {
            if (axios.isAxiosError(err)) {
                setErrorMessage(err.response?.data?.error || "something went wrong");
                setShowErrorModal(true);
            } else {
                console.error(err)
            }
        } finally {
            setLoading(false)
            setTimeout(() => {
                setSuccessRedirectMessage(null);
            }, 3200)
        }
    }

    return (
        <div className={styles.Auth}>

            {loading && <Loader />}
            
            <h1>log into your account</h1>

            <nav>
                <h4>dont have an account?</h4>
                <Link to="/create/user">sign up</Link>
            </nav>
            
            <form onSubmit={HandleFormSubmit}>
                <fieldset>

                    <legend>sign in</legend>

                    <label>email
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="enter your email..."
                        onChange={HandleFormChange}
                        />
                    </label>

                    <label>password
                        <input
                        type={showPassword}
                        name="password"
                        value={formData.password}
                        placeholder="enter your password..."
                        onChange={HandleFormChange}
                        />
                        <i
                        onClick={toggleShowPassword}
                        className=
                        {showPassword === 
                        "password" ? "bi bi-eye-slash-fill" 
                        : "bi bi-eye-fill"} 
                        />
                    </label>

                    <Link to="/forgot/password">forgot password?</Link>

                    <button disabled={loading}>
                    {loading ? <ButtonLoader /> : "login"}
                    </button>

                </fieldset>
            </form>

        </div>
    )
}