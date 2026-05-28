import { useState } from "react";
import { ButtonLoader } from "../../../ui/Loader";
import styles from "../auth.module.css";

export default function ForgotPassword() {

    const [email, setEmail] = useState("");

    const [loading, setLoading] = useState(false);

    return (
        <div className={styles.Auth}>
            <h1>Password Recovery</h1>
            <form>
                <fieldset>

                    <legend>email otp</legend>

                    <label>email
                        <input
                        type="email"
                        value={email}
                        placeholder="enter your email"
                        onChange={(e) => 
                           setEmail(e.target.value)
                           }
                        />
                    </label>

                    <button
                      type="submit"
                    >
                    {loading ? <ButtonLoader /> : "send otp"}
                    </button>

                </fieldset>
            </form>
        </div>
    )
}