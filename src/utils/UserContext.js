import { createContext } from "react";
const UserContext = createContext({
  loggedInUser: "Default",
  wishList: [],
});
export default UserContext;
