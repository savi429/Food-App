import React from "react";
class Child2 extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " " + "constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " " + "componentDidMount");
  }

  render() {
    console.log(this.props.name + " " + "render");
    return <div>Child2</div>;
  }
}
export default Child2;
