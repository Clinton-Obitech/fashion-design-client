import { useContext, useState } from "react"
import FashionSex from "../../ui/designer/Sex";
import FashionSkills from "../../ui/designer/Skills";
import api from "../../api/axios";
import { ButtonLoader, Loader } from "../../ui/Loader";
import { useNavigate } from "react-router-dom";
import { SetShopContext } from "../../context/SetShopContext";
import styles from "../components.module.css";
import axios from "axios";
import { ErrorModalContext, SuccessRedirectModalContext } from "../../context/ModalContext";

export default function SetDesignerShop() {

    const setShopContext = useContext(SetShopContext)
    if (!setShopContext) return null;
    const { shop, setShop } = setShopContext;

    const [profile_pic, set_profile_pic] = useState<File | null>(null);

    const [loading, setLoading] = useState(false);

    const successContext = useContext(SuccessRedirectModalContext);
    if (!successContext) return null;
    const { setSuccessRedirectMessage } = successContext;

    const errorContext = useContext(ErrorModalContext);
    if (!errorContext) return null;
    const { setErrorMessage, setShowErrorModal } = errorContext;

    const navigate = useNavigate();

    const HandleSubmitForm = async (
        e:React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        setLoading(true)

        const formData = new FormData();

        formData.append("brand_name", shop.brand_name);
        formData.append("bio", shop.bio)
        formData.append("fashion_sex", shop.fashion_sex);
        formData.append("fashion_skills", JSON.stringify(shop.fashion_skills));

        if (profile_pic) {
            formData.append("profile_pic", profile_pic);
        }

        try {
            const { data } = await api.post("/api/set/shop", formData);

            localStorage.setItem("shop", JSON.stringify(data.shop));

            setShop({
                brand_name: "",
                bio: "",
                fashion_sex: "",
                fashion_skills: []
            })
            
            set_profile_pic(null);

            setSuccessRedirectMessage(data.message);

            setTimeout(() => {
                navigate("/designer/dashboard", {replace: true})
            }, 3000)
            
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
            }, 3500);
        }
    }

    return (
        <div className={styles.SetShop}>

            {loading && <Loader />}

            <h1>set shop</h1>

            <form onSubmit={HandleSubmitForm}>
                <label>brand name
                    <input
                    type="text"
                    name="brand_name"
                    value={shop.brand_name}
                    placeholder="enter your brand name..."
                    onChange={(e) => setShop(prev => ({...prev, brand_name: e.target.value}))}
                    />
                </label>

                <label className={styles.file}>profile pic
                    <i
                    style={{
                        color: profile_pic ? "green" : ""
                    }}
                    className="fa-solid fa-file-circle-plus">
                    </i>
                    <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        if (e.target.files) {
                            set_profile_pic(e.target.files[0])
                        }
                    }}
                    style={{display: "none"}}
                    />
                </label>

                <label>bio
                    <textarea
                    value={shop.bio}
                    onChange={(e) => setShop(prev => ({...prev, bio: e.target.value}))}
                    />
                </label>

                <FashionSex />

                <FashionSkills />

                <button type="submit">
                    {loading ? <ButtonLoader /> : "set shop"}
                </button>
            </form>

        </div>
    )
}