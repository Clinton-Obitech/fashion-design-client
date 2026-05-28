import { useState } from "react"
import { ButtonLoader } from "../../../ui/Loader";

export default function VerifyOTP() {

    const [otp, setOTP] = useState("");

    const [loading, setLoading] = useState(false);

    return (
        <div>
            <h1>one time Password</h1>
            <form>
                <fieldset>

                    <legend>verify otp</legend>

                    <label>
                        <input
                        type="text"
                        value={otp}
                        placeholder="enter your otp..."
                           onChange={(e) => {
                            setOTP(e.target.value)
                           }}
                        />
                    </label>

                    <button
                    type="submit"
                    >
                    {loading ? <ButtonLoader /> : "verify otp"}
                    </button>

                </fieldset>
            </form>
        </div>
    )
}