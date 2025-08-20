import {useState} from "react";

const Theme = () => {
    const [theme] = useState<"light" | "dark">("light");
    const [language] = useState<"english" | "vietnamese">("vietnamese");
    return (
        <div style={{backgroundColor: theme === "light" ? "#ffffff" : "#333333",
                     color: theme === "light" ? "#000000" : "#ffffff"
        }}>
            <h2>Nen: {theme === "light" ? "Sang" : "Toi"}</h2>
            <h2>Ngon ngu: {language === "english" ? "Tieng Anh" : "Tieng Viet"}</h2>
        </div>
    )
}

export default Theme;