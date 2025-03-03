const ModalComponent = (props) => {
  return (
    <div style={{}}>
      <div>
        <h3>{props.title}</h3>
        <div>
           {/* render ra các ô input */}
           {props.contentJSX}
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
