const Welcome = (props) => {
  console.log(props);
  return <h3>Hello: {props.name}</h3>;
};

export default Welcome;
