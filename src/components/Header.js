import { Link } from "react-router-dom";
import UserContext from "./../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import logo from "./../public/img/logo.png";
const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  //subscribing to store
  const cartItems = useSelector((state) => state.cart.items);
  console.log("cartItems", cartItems);
  return (
    <div className="flex justify-between shadow-sm mb-2">
      <div className="logo-container">
        <img className="w-20" src={logo} alt="logo" />
      </div>
      <div className="hidden sm:flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/grocery">Grocery App</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
          <li className="px-4">Login</li>
          <li className="px-4">
            <Link to="/cart">cart {cartItems.length}</Link>
          </li>
        </ul>
      </div>
      <div className="sm:hidden">
        <span>Hamburger</span>
      </div>
    </div>
  );
};
export default Header;
