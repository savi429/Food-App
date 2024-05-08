import Body from "../Body";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import MOCK_DATA from "./mocks/mockRestaurantList.json";

jest.mock("axios");

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(MOCK_DATA);
//     },
//   });
// });

describe("Search functionality test cases", () => {
  // beforeAll(() => {
  //   console.log("before all tests");
  // });
  // beforeEach(() => {
  //   console.log("before each test case");
  // });
  // afterAll(() => {
  //   console.log("after all the test cases");
  // });
  // afterEach(() => {
  //   console.log("after each test case");
  // });
  it("Should render Body with restaurant cards", async () => {
    //1) mocking api call
    axios.get.mockResolvedValueOnce({ data: MOCK_DATA });
    //2) rendering Body wrapped in Browser router
    const { getAllByTestId } = render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
    //3) waiting for the api call to be made
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    //4) getting all elements by testing id
    const restaurantCards = getAllByTestId("restCard");
    //5) asserting that we have 9 cards
    expect(restaurantCards).toHaveLength(9);

    const mockData = MOCK_DATA;

    // Iterating over each restaurant card element
    restaurantCards.forEach((card, index) => {
      // Asserting that the text content of each card matches the corresponding restaurant name from the mocked data
      expect(card).toHaveTextContent(
        mockData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants[index]?.info?.name
      );
    });
  });
  it("should render top rated restaurants", async () => {
    axios.get.mockResolvedValueOnce({ data: MOCK_DATA });

    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    const topRestBtn = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });
    fireEvent.click(topRestBtn);
    const filteredCards = screen.getAllByTestId("restCard");
    expect(filteredCards).toHaveLength(4);
  });
  it("should get the search results", async () => {
    axios.get.mockResolvedValueOnce({ data: MOCK_DATA });

    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    const inputField = screen.getByRole("textbox");
    fireEvent.change(inputField, { target: { value: "Hotel" } });
    const searchBtn = screen.getByRole("button", { name: "Search" });
    fireEvent.click(searchBtn);
    const result = screen.getAllByTestId("restCard");
    expect(result).toHaveLength(2);
  });
});
