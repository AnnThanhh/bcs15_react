export const numberReducer = (number = 3, action) => {
  if (action.type === "CHANGE_QUANTITY") {
    number += action.payload;
  }
  //return state mới
  return number;
};
