const RestaurantHoc = (restProps) => (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <h1>HOC composition {restProps.name}</h1>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default RestaurantHoc;
