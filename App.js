import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import About from "./src/components/About";
import UserContext from "./src/utils/UserContext";
// import ShimmerUi from "./src/components/ShimmerUi";
import { Provider } from "react-redux";
import appStore from "./src/redux/appStore";
import Cart from "./src/components/Cart";
const Grocery = lazy(() => import("./src/components/Grocery"));

const AppComponent = () => {
  const [loggedInUser, setUserInfo] = useState("");
  const [wishList, setWishList] = useState(null);
  const globalContext = {
    loggedInUser,
    setUserInfo,
    wishList,
    setWishList,
  };
  useEffect(() => {
    setUserInfo("Savitha");
  }, []);
  console.log(<Body />);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={globalContext}>
        <div className="app">
          {/* <UserContext.Provider value={{ loggedInUser: "Rajani" }}> */}
          <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
          {/* <Footer /> */}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:restId",
        element: <RestaurantMenu />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading Grocery page</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
  { path: "/reviews", element: <>Reviews page</> },
  {
    path: "/brand",
    element: <>brand</>,
  },
]);
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<RouterProvider router={appRouter} />);
