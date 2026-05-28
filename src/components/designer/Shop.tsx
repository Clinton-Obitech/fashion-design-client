import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../components.module.css";
import type { Shop } from "../../types/context";


export default function DesignerShop() {

    const [username] = useState<string | null>(() => {
        return localStorage.getItem("username") || null;
    })

    const [shop] = useState<Shop | null>(() => {
        const shop = localStorage.getItem("shop");

        return shop ? JSON.parse(shop) as Shop : null;
    })

    return (
        <>
            <div className={styles.Shop}>
                <h1>{shop?.brand_name || "brands name"}</h1>

                {!shop?.profile_pic ? 
                <i className="bi bi-person-circle"></i> 
                : <img src={shop?.profile_pic} width={200} height={200}
                />}

                <h2>{username || "username"}</h2>

                {!shop ? (
                    <i style={{
                    fontSize: "10rem"
                     }} className="bi bi-shop"></i>
                ) : (
                    <>
                    <h3>{shop.fashion_sex} designer</h3>
                    <h5>{shop.bio}</h5>
                    <ul>
                        {shop.fashion_skills.map(skill => (
                            <li>{skill}</li>
                        ))}
                    </ul>
                    </>
                )}

                <Link to="/set/shop">{shop ? "update shop" : "set shop"}</Link>
            </div>    
        </>
    )
}