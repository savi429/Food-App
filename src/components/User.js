const User = (props) => {
  return (
    <div style={{ border: "1px solid black", width: "100%" }}>
      <h1>Functional Component</h1>
      <h1>User name:{props.name}</h1>
      <h2>Location:</h2>
    </div>
  );
};

export default User;
