import { createContext, useState } from "react"
import type { ChildrenNode, SetShop, SetShopContextType } from "../types/context";

export const SetShopContext = createContext<SetShopContextType | null>(null);

export default function SetShopProvider({children}:ChildrenNode) {
    
    const [shop, setShop] = useState<SetShop>({
        brand_name: "",
        bio: "",
        fashion_sex: "",
        fashion_skills: [],
    })


    return (
        <SetShopContext.Provider value={{shop, setShop}}>
            {children}
        </SetShopContext.Provider>
    )
}