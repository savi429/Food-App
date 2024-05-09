import axios from "axios";
import Child1 from "./Child1";
import Child2 from "./Child2";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    console.log("Parent constructor");
  }

  async componentDidMount() {
    this.timer = setInterval(() => {}, 1000);
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");

    this.setState({ users: data });
    console.log("Parent componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.users.length !== prevState.users) {
      console.log("called when users updated");
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    console.log("Parent render");
    return (
      <div className="mt-[100px]">
        <h2>Parent component</h2>
        {this.state.users.length > 0 &&
          this.state.users.map((user) => <li key={user.id}>{user.name}</li>)}
        <Child1 name="first" />
        <Child2 name="second" />
        <Child2 name="third" />
      </div>
    );
  }
}
export default About;
