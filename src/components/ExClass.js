import React from "react";
class ExClass extends React.Component {
  state = {
    name: "ANkam",
  };
  props = {
    age: 23,
  };
  getFullName() {
    console.log(this, this.props.age, "inside method");
    return new Date().getTime;
  }
  getDetails = () => {
    console.log(this.state.name, "inside arrow");
  };
  render() {
    return (
      <div>
        Hello {this.getFullName()}
        {this.getDetails()}
      </div>
    );
  }
}
export default ExClass;
