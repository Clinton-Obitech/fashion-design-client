import { useContext } from "react";
import { SetShopContext } from "../../context/SetShopContext";

export default function FashionSex() {

    const setShopContext = useContext(SetShopContext);
    if (!setShopContext) return null;
    const { shop, setShop } = setShopContext;

    const setSex = (value: string) => {
        setShop(prev => ({
            ...prev, fashion_sex: value
        }))
    }

    return (
        <div>
            <fieldset>
                <legend>fashion sex</legend>

                <ul>
                    <li style={{border: shop.fashion_sex === "male" ? "1.5px solid green" : ""}} 
                        onClick={() => {
                           setSex("male")
                           setShop(prev => ({...prev, fashion_skills:[]}))
                        }}>
                        male
                    </li>

                    <li style={{border: shop.fashion_sex === "female" ? "1.5px solid green" : ""}}  
                        onClick={() => {
                           setSex("female")
                           setShop(prev => ({...prev, fashion_skills:[]}))
                        }}>
                        female
                    </li>

                    <li style={{border: shop.fashion_sex === "unisex" ? "1.5px solid green" : ""}}
                        onClick={() => {
                           setSex("unisex")
                           setShop(prev => ({...prev, fashion_skills:[]}))
                        }}>
                        unisex
                    </li>
                </ul>
            </fieldset>
        </div>
    )
}