import { Dispatch, SetStateAction } from "react";

export type SuccessRedirectContextType = {
    successRedirectMessage: string | null;
    setSuccessRedirectMessage: React.Dispatch<React.SetStateAction<string | null>>;
}

export type ErrorRedirectContextType = {
    errorRedirectMessage: string | null;
    setErrorRedirectMessage: React.Dispatch<React.SetStateAction<string | null>>;
}

export type SuccessContextType = {
    successMessage: string | null;
    setSuccessMessage: React.Dispatch<React.SetStateAction<string | null>>;
    showSuccessModal: boolean;
    setShowSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export type ErrorContextType = {
    errorMessage: string | null;
    setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>;
    showErrorModal: boolean;
    setShowErrorModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export type ConfirmContextType = {
    confirmMessage: string | null;
    setConfirmMessage: React.Dispatch<React.SetStateAction<string | null>>;
    confirm: boolean;
    setConfirm: React.Dispatch<React.SetStateAction<boolean>>;
}

export type LoggedContextType = {
    logged: boolean;
    setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

export type ChildrenNode = {
    children: React.ReactNode
}

export type SetShop = {
    brand_name: string;
    bio: string;
    fashion_sex: string;
    fashion_skills: string[];
}

export type SetShopContextType = {
    shop: SetShop;
    setShop: React.Dispatch<React.SetStateAction<SetShop>>
}

export type Shop = {
    brand_name: string | null;
    bio: string | null;
    fashion_sex: string | null;
    fashion_skills: string[] | null[];
    profile_pic: string | null;
}

export type ShopContextType = {
    shop: Shop | null;
    setShop: React.Dispatch<React.SetStateAction<Shop | null>>
}