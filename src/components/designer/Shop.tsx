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
                : <img src={shop?.profile_pic} width={150} height={150}
                />}

                <h2>{username || "username"}</h2>

                {!shop ? (
                    <i style={{
                    fontSize: "10rem"
                     }} className="bi bi-shop"></i>
                ) : (
                    <>
                        <i className="fa-solid fa-scissors">
                            <span>{shop.fashion_sex} designer</span>
                        </i>

                        <i className="fa-solid fa-user-pen">
                        <span>{shop.bio}</span>
                        </i>
   
                        <div>
                        {shop.fashion_skills}
                        </div>
                    </>
                )}

                <Link to="/set/shop">{shop ? "update shop" : "set shop"}</Link>
            </div>    
        </>
    )
}