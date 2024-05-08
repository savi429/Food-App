import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";

const ContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [loggedInUser, setUserInfo] = useState("");
  return (
    <UserContext.Provider
      value={{ darkMode, loggedInUser, setDarkMode, setUserInfo }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default ContextProvider;
export const useAppContext = () => {
  return useContext(UserContext);
};
