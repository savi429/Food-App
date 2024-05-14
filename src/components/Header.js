import { Link } from "react-router-dom";
import { useState, useContext } from "react";
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
import UserContext from "../utils/UserContext";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [modal, setShowModal] = useState(false);
  const onlineStatus = useOnlineStatus();
  const dispatch = useDispatch();
  const { userName } = useContext(UserContext);

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
  const handaleModal = () => {
    setShowModal(!modal);
  };

  return (
    <>
      <header className="shadow-lg text-black p-4 w-full h-[80px] fixed top-0 left-0 z-50 font-medium dark:text-slate-400">
        <div className="flex justify-between items-center w-10/12 mx-auto">
          <div className="flex">
            <Link to={"/"}>
              <img
                src={logo}
                alt="logo"
                className="w-[60px] h-[50px] rounded-sm cursor-pointer"
              />
            </Link>
            <p>Hyderabad</p>
            <button onClick={handaleModal}>click</button>
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
                <div
                  className="flex cursor-pointer hover:text-orange-500 "
                  data-testid="cart"
                >
                  <div className="relative">
                    <MdOutlineShoppingCart
                      style={iconStyles}
                      className="mr-2 text-xl"
                    />
                    {cartItems?.length > 0 && (
                      <span className="absolute top-0 -right-[6px] -translate-y-[61%] text-black rounded-full w-6 h-6 flex justify-center items-center text-xs">
                        {cartItems?.length}
                      </span>
                    )}
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
        {modal && (
          <div class="fixed inset-0 z-50 flex justify-center items-center">
            <div class="bg-white p-8 rounded-lg w-96">
              <h2 class="text-2xl font-bold mb-4">Select Your Location</h2>
              <div class="mb-4">
                <label for="location" class="block mb-1">
                  Your Location
                </label>
                <input
                  type="text"
                  id="location"
                  class="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Confirm
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
export default Header;
