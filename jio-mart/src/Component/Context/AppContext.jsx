import { createContext } from "react";
import { useState } from "react";
import React from "react";
export const AppContext = createContext();
function AppContextProvider({ children }) {
    const [isAuth, setAuth] = useState(true); //set it false
    const [token, setToken] = useState("");
    const toggleAuth = () => {
        return setAuth(isAuth ? false : true);
    };
    return (
        <AppContext.Provider
            value={{
                isAuth,
                toggleAuth,
                token,
                setToken,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
export default AppContextProvider;