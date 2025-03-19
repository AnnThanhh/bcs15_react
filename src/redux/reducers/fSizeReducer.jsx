export const fontSizeReducer = (fSize = 17, action) => {
  //tất cả reducer đều chạy lại khi dispatch bất kì component nào
  if (action.type === "CHANGE_FONT_SIZE") {
    fSize += action.payload;
  }
  return fSize; //imutable: tính bất biến

  // {}, []
};
