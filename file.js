import React from "react";
import ReactDOM from "react-dom/client";

const rootEle = document.getElementById("root");
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "grand-child" }, "Im h1 tag here"),
    React.createElement("h2", {}, "Im h2"),
  ])
);
const ele = <span>hey</span>;
const heading = React.createElement(
  "h1", //type
  { id: "heading", className: "heading" }, //attributes
  "Hello World from React" //children
);
// jsx -> React.createElement-> js object -> html element render
const jsxHeading = (
  <h1
    id="heading1"
    className="main"
    style={{ color: "blue", backgroundColor: "gray" }}
  >
    Hello world!
    {ele}
  </h1>
);
const HeadingComponent = () => (
  <div className="container">
    {jsxHeading}
    {/* {console.log("hello")} */}
    <h1>functional component</h1>
  </div>
);

console.log(heading, jsxHeading); // object refrepresentation of heading
const root = ReactDOM.createRoot(rootEle);
root.render(<HeadingComponent />); // take this obj and create h1 and render inside root
