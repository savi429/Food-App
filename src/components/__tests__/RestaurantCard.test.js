import RestuarantCard from "../RestaurantCard";
import restCardMock from "./mocks/restCardMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PROMOTED_DATA from "./mocks/restPromotedCard.json";
import { withPromotedLabel } from "../RestaurantCard";

describe("Restaurant card test cases", () => {
  it("should render rest card with prop data", () => {
    render(<RestuarantCard restaurant={restCardMock} />);
    const name = screen.getByText("Shah Ghouse Hotel & Restaurant");
    expect(name).toBeInTheDocument();
  });
});
