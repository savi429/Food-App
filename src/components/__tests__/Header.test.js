import Header from "../Header";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { appStore, persistedStore } from "./../../redux/appStore";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Cart from "../Cart";

describe("Header test cases", () => {
  it("should load with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          {/* <PersistGate loading={<h1>Loading..</h1>} persistor={persistedStore}> */}
          <Header />
          {/* </PersistGate> */}
        </Provider>
      </BrowserRouter>
    );
    const loginBtn = screen.getByText("SignIn");
    //screen.getByRole("button",{name:"Login"})
    //getByText(/cart/) regex
    expect(loginBtn).toBeInTheDocument();
  });
  it("should navigate to cart", () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    const cartBtn = screen.getByTestId("cart");
    expect(cartBtn).toBeInTheDocument();
    fireEvent.click(cartBtn);
    const path = screen.getAllByText("Cart");
    expect(path[0]).toBeInTheDocument();
  });
});
