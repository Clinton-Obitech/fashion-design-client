import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonLoader, Loader } from "../../../ui/Loader";
import axios from "axios";
import { ErrorModalContext, SuccessRedirectModalContext } from "../../../context/ModalContext";
import api from "../../../api/axios";
import { LoggedContext } from "../../../context/LoggedContext";
import styles from "../auth.module.css";

export default function CreateUser() {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        role: "",
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

    const [showRole, setShowRole] = useState(false);

    const navigate = useNavigate();

    const toggleShowPassword = () => {
        setShowPassword(
            showPassword === "password" ?
            "text" : "password"
        )
    }

    const HandleFormChange = (
        name: string, value: string
    ) => {
        setFormData({...formData, [name]: value})
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

            const { data } = await api.post("/api/create/user", formData);

            setSuccessRedirectMessage(data.message);

            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                role: "",
            })

            JSON.stringify(localStorage.setItem("logged", "true"));

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
            setLoading(false);
            setTimeout(() => {
                setSuccessRedirectMessage(null);
            }, 3200)
        }
    }

    const designerRole = () => {
        HandleFormChange("role", "designer")
    }

    const customerRole = () => {
        HandleFormChange("role", "customer")
    }

    return (
        <div className={styles.Auth}>

            {loading && <Loader />}

            <h1>create an account</h1>

            <nav>
                <h4>already have an account?</h4>
                <Link to="/login/user">sign in</Link>
            </nav>
            
            <form onSubmit={HandleFormSubmit}>
                <fieldset>

                    <legend>sign up</legend>

                    <label>firstname
                        <input
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        placeholder="enter your firstname..."
                        onChange={(e) => {
                            HandleFormChange(e.target.name, e.target.value);
                        }}
                        />
                    </label>

                    <label>lastname
                        <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        placeholder="enter your lastname..."
                        onChange={(e) => {
                            HandleFormChange(e.target.name, e.target.value);
                        }}
                        />
                    </label>

                    <label>email
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="enter your email..."
                        onChange={(e) => {
                            HandleFormChange(e.target.name, e.target.value);
                        }}
                        />
                    </label>

                    <label>password
                        <input
                        type={showPassword}
                        name="password"
                        value={formData.password}
                        placeholder="enter your password..."
                        onChange={(e) => {
                            HandleFormChange(e.target.name, e.target.value);
                        }}
                        />
                        <i
                        onClick={toggleShowPassword}
                        className=
                        {showPassword === 
                        "password" ? "bi bi-eye-slash-fill" 
                        : "bi bi-eye-fill"} 
                        />
                    </label>

                    <label>role

                        <button type="button" 
                         onClick={() => setShowRole(!showRole)}>
                            {formData.role || "choose role"}
                        </button>

                        {showRole && (
                            <div className={styles.role}>
                                <div onClick={designerRole}>
                                designer
                                </div>

                               <div onClick={customerRole}>
                               customer
                               </div>
                            </div>
                           ) 
                        }
                    </label>

                    <button disabled={loading}>
                    {loading ? <ButtonLoader /> : "continue"}
                    </button>

                </fieldset>
            </form>

        </div>
    )
}