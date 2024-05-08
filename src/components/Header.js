import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../public/img/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsPlus } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import useOnlineStatus from "../utils/useOnlineStatus";
import { setDarkMode } from "../redux/userSlice";
import {
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdOutlineShoppingCart,
} from "react-icons/md";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const onlineStatus = useOnlineStatus();
  const dispatch = useDispatch();

  //subscribing to store
  const cartItems = useSelector((state) => state.reducer.cart.items);
  const darkMode = useSelector((state) => state.reducer.user.darkMode);

  const sidebarHandler = () => {
    setSidebar(!sidebar);
  };
  const hadleDarkMode = () => {
    dispatch(setDarkMode());
    console.log("dark");
    document.documentElement.classList.toggle("dark", !darkMode);
  };
  const iconStyles = { size: "150px" };

  return (
    <header className="shadow-lg text-black p-4 w-full h-[80px] fixed top-0 left-0 z-50 font-medium dark:text-slate-400">
      <div className="flex justify-between items-center w-10/12 mx-auto">
        <div>
          <img src={logo} alt="logo" className="w-14 h-auto rounded-sm" />
        </div>
        <ul className="hidden sm:flex justify-between items-center">
          <li>
            {onlineStatus ? (
              <div className="flex items-center gap-1 ">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="hover:text-orange-500">Online Status</span>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="hover:text-orange-500">Offline Status</span>
              </div>
            )}
          </li>
          {/* <li className="px-4">
            <Link to="/todoApp">ToDoApp</Link>
          </li> */}
          {/* <li className="px-4">
            <Link className="sm:hidden" to="/search">
              <FiSearch />
            </Link>
            <div className="hidden">
              <input
                type="text"
                // value={searchText}
                // onChange={searchHandler}
              />
              <FiSearch />
            </div>
          </li> */}
          <li className="px-4">
            <Link to="/cart">
              <div className="flex cursor-pointer hover:text-orange-500 ">
                <div className="relative">
                  <MdOutlineShoppingCart
                    style={iconStyles}
                    className="mr-2 text-xl"
                  />
                  <span
                    className="absolute top-0 right-0 -translate-y-1/2 text-black rounded-full w-6 h-6 flex justify-center items-center text-xs"
                    data-testid="cart"
                  >
                    {cartItems?.length}
                  </span>
                </div>
                <span>Cart</span>
              </div>
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about">
              <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500 ">
                <HiOutlineUser style={iconStyles} /> SignIn
              </div>
            </Link>
          </li>
          <li className="px-4">
            <button onClick={hadleDarkMode}>
              {darkMode === true ? (
                <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500 ">
                  <MdOutlineDarkMode style={iconStyles} />
                  Dark{" "}
                </div>
              ) : (
                <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500 ">
                  <MdOutlineLightMode style={iconStyles} />
                  Light
                </div>
              )}
            </button>
          </li>
        </ul>
        <span className="sm:hidden" onClick={sidebarHandler}>
          <RxHamburgerMenu />
        </span>
      </div>
      {sidebar && (
        <div className="w-9/12 h-full z-1000 bg-blue-400 sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <BsPlus />
            <ul>
              <li>Dashboard</li>
              <li>Dashboard</li>
              <li>Dashboard</li>
              <li>Dashboard</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
