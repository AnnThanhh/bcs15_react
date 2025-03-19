import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

const ChangeFontSizeWithRedux = () => {
  const fSize = useSelector((state) => state.fontSizeReducer);
  const dispatch = useDispatch();
  const changeFontSize = (size) => {
    //action: type: tên action, payload: giá trị gửi lên store
    const action = {
      type: "CHANGE_FONT_SIZE",
      payload: size,
    };
    dispatch(action);
  };

  return (
    <div className="container mx-auto">
      <p style={{ fontSize: fSize }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
        laudantium nobis tempora numquam animi nihil quia doloremque ut quis
        reprehenderit.
      </p>
      <Button
        color="primary"
        variant="solid"
        onClick={() => {
          changeFontSize(1);
        }}
      >
        Zoom In
      </Button>

      <Button
        color="danger"
        variant="solid"
        onClick={() => {
          changeFontSize(-1);
        }}
      >
        Zoom out
      </Button>
    </div>
  );
};

export default ChangeFontSizeWithRedux;
