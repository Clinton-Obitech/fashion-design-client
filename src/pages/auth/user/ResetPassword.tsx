import { useState } from "react";
import { ButtonLoader } from "../../../ui/Loader";

export default function ResetPassword() {

    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState("password");

    const toggleShowPassword = () => {
        setShowPassword(
            showPassword === "password" ?
            "text" : "password"
        )
    }

    return (
        <div>
            <h1>reset password</h1>
            <form>
                <fieldset>

                    <legend>new password</legend>

                    <label>password
                        <input
                           type={showPassword}
                           value={password}
                           placeholder="enter new password"
                             onChange={(e) => {
                               setPassword(e.target.value)
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

                    <button
                    type="button"
                    >
                      {loading ? <ButtonLoader /> : "save password"}
                    </button>

                </fieldset>
            </form>
        </div>
    )
}