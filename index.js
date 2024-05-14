import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
} from "react-router-dom";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import About from "./src/components/About";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import { persistedStore, appStore } from "./src/redux/appStore";
import { PersistGate } from "redux-persist/integration/react";
import Cart from "./src/components/Cart";
const ToDoApp = lazy(() => import("./src/components/TodoApp"));

const AppComponent = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    setUserName("savitha");
  }, []);
  console.log(<Body />);

  return (
    <Provider store={appStore}>
      {/* <PersistGate loading={null} persistor={persistedStore}> */}
      <UserContext.Provider value={{ userName, setUserName }}>
        <Header />
        <main
          className="relative w-10/12 mx-auto z-10"
          style={{ marginTop: "84px", position: "relative" }}
        >
          <Outlet />
        </main>
      </UserContext.Provider>
      {/* </PersistGate> */}
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
        path: "/todoApp",
        element: (
          <Suspense fallback={<h1>Loading Grocery page</h1>}>
            <ToDoApp />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<RouterProvider router={appRouter} />);
