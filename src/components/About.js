import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent did mount ");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        About
        <User name="Savitha" />
        <UserClass name="first" />
        <UserClass name="second" />
      </div>
    );
  }
}

export default About;
