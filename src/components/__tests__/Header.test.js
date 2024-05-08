import Header from "../Header";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { appStore, persistedStore } from "./../../redux/appStore";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

describe("Header test cases", () => {
  it("should load with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <PersistGate loading={<h1>Loading..</h1>} persistor={persistedStore}>
            <Header />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    );
    const loginBtn = screen.getByText("ToDoApp");
    //screen.getByRole("button",{name:"Login"})
    //getByText(/cart/) regex
    expect(loginBtn).toBeInTheDocument();
  });
  it("should render component with cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <PersistGate loading={<h1>Loading..</h1>} persistor={persistedStore}>
            <Header />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    );
    const cartLength = screen.getByTestId("cart");
    // console.log("cartLength", cartLength);
    expect(cartLength).toBeInTheDocument();
  });
  it("Should navigate to cart page when clicking on cart", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <PersistGate loading={<h1>Loading..</h1>} persistor={persistedStore}>
            <Header />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    );
    const cart = screen.getByTestId("cart");
    fireEvent.click(cart);
    // const cartPage = screen.getByText("Cart");
    // expect(cartPage).toBeInTheDocument();
  });
});
