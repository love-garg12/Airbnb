import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import { authContext } from "./AuthContext";

export const userDataContext = createContext();

function UserContext({ children }) {
    const { serverUrl } = useContext(authContext);

    const [userData, setUserData] = useState(null);

    const getCurrentUser = async () => {
        try {
            const result = await axios.get(
                serverUrl + "/api/user/currentuser",
                {
                    withCredentials: true
                }
            );

            setUserData(result.data.user);
        } catch (error) {
            setUserData(null);
            console.log(error);
        }
    };

    useEffect(() => {
        getCurrentUser();
    }, []);

    const value = {
        userData,
        setUserData
    };

    return (
        <userDataContext.Provider value={value}>
            {children}
        </userDataContext.Provider>
    );
}

export default UserContext;