import React from "react";
import axios from "axios";
import UserContext from "../utils/UserContext";
class Child1 extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " " + "constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " " + "componentDidMount");
  }

  render() {
    console.log(this.props.name + " " + "render");
    return <div>Child1 hello</div>;
  }
}
export default Child1;
