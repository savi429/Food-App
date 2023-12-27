const rootEle = document.getElementById("root");
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "grand-child" }, "Im h1 tag"),
    React.createElement("h2", {}, "Im h2"),
  ])
);
const heading = React.createElement(
  "h1", //type
  { id: "heading", className: "heading" }, //attributes
  "Hello World from React" //children
);
console.log(heading); // object refrepresentation of heading
const root = ReactDOM.createRoot(rootEle);
root.render(heading); // take this obj and create h1 and render inside root
