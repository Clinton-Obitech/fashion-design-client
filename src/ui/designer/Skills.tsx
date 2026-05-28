import { useContext } from "react";
import { SetShopContext } from "../../context/SetShopContext";

export default function FashionSkills() {

    const setShopContext = useContext(SetShopContext);
    if (!setShopContext) return null;
    const { shop, setShop } = setShopContext;

    const setSkill = (value: string) => {
        setShop(prev => ({
            ...prev, fashion_skills:[...prev.fashion_skills, value]
        }))
    }

    const removeSkill = (value: string) => {
        setShop(prev => ({
        ...prev,
        fashion_skills: prev.fashion_skills.filter(i => i !== value)
       }));
    }

    return (
        <div>
            {shop.fashion_sex && (<fieldset>

                <legend>{shop.fashion_sex} fashion</legend>

                {shop.fashion_sex === "male" && (

                    <ul>
                        <li
                        style={{border: shop.fashion_skills.includes("shirt") ? "1.5px solid green" : ""}}
                        onClick={() => setSkill(shop.fashion_skills.includes("shirt") ? "" : "shirt")}
                        >shirt{shop.fashion_skills.includes("shirt") ? 
                            <i onClick={() => removeSkill("shirt")} className="fa-solid fa-xmark" /> :
                            null
                        }</li>

                    </ul>

                )}

                {shop.fashion_sex === "female" && (

                    <ul>
                        <li
                        style={{border: shop.fashion_skills.includes("blouse") ? "1.5px solid green" : ""}}
                        onClick={() => setSkill(shop.fashion_skills.includes("blouse") ? "" : "blouse")}
                        >blouse{shop.fashion_skills.includes("blouse") ? 
                            <i onClick={() => removeSkill("blouse")} className="fa-solid fa-xmark" /> :
                            null
                        }</li>
                    </ul>

                )}

                {shop.fashion_sex === "unisex" && (

                    <ul>
                        <li
                        style={{border: shop.fashion_skills.includes("blouse") ? "1.5px solid green" : ""}}
                        onClick={() => setSkill(shop.fashion_skills.includes("blouse") ? "" : "blouse")}
                        >blouse{shop.fashion_skills.includes("blouse") ? 
                            <i onClick={() => removeSkill("blouse")} className="fa-solid fa-xmark" /> :
                            null
                        }</li>

                        <li
                        style={{border: shop.fashion_skills.includes("shirt") ? "1.5px solid green" : ""}}
                        onClick={() => setSkill(shop.fashion_skills.includes("shirt") ? "" : "shirt")}
                        >shirt{shop.fashion_skills.includes("shirt") ? 
                            <i onClick={() => removeSkill("shirt")} className="fa-solid fa-xmark" /> :
                            null
                        }</li>
                        
                    </ul>

                )}

            </fieldset>)}
        </div>
    )
}