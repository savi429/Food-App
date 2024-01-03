import React from "react";
import axios from "axios";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
    console.log(this.props.name + "constructor");
  }
  async componentDidMount() {
    const data = await axios.get("");
    this.setState({ name: data.name });
    console.log(this.props.name + "did mount");
  }
  handleClick = () => {};
  componentDidUpdate() {
    console.log("called after setstate updated dom");
  }

  render() {
    console.log(this.props.name + "render");
    const { name } = this.props;
    return (
      <UserContext.Consumer>
        {(data) => (
          <div style={{ border: "1px solid black" }}>
            <h1>Class Component</h1>
            <h1>User name:{name}</h1>
            <button
              onClick={() => {
                this.setState({ count: this.state.count + 1 });
              }}
            >
              counter
            </button>
            <h2>Location:{this.state.count}</h2>
            <span>{data.loggedInUser}</span>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
export default UserClass;
