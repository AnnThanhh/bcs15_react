//rafce

import { useDispatch, useSelector } from "react-redux";

const ChangeNumber = () => {
  //hook để lấy state từ redux về (redux store)
  const number = useSelector((state) => state.numberReducer);

  //hook này dùng để đưa dữ liệu lên redux
  const dispatch = useDispatch();

  const handleChangeState = (quantity) => {
    //đưa dữ liệu lên store
    const action = {
      type: "CHANGE_QUANTITY", //bắt buộc
      payload: quantity,
    };
    //dùng dispatch để gửi action lên store
    //lưu ý: khi hàm dispatch thực thi thì tất các hàm reducer đều được chạy lại
    dispatch(action);
  };
  return (
    <div className="container mx-auto">
      <h1>Number: {number}</h1>
      <button
        onClick={() => {
          handleChangeState(1);
        }}
      >
        +
      </button>
      <button
        className="ml-2"
        onClick={() => {
          handleChangeState(-1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default ChangeNumber;
