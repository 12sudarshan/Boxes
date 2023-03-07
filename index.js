const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return (
    <div className={`boxSize ${className}`}>
      <p className="boxText">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box className="smallBox" text="Small" />
      <Box className="mediumBox" text="Medium" />
      <Box className="largeBox" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
