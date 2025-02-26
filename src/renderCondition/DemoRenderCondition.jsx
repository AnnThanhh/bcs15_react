const DemoRenderCondition = () => {
  const isLogin = true; //true là đăng nhập rồi, false là chưa đăng nhập

  const renderLogin = () => {
    if (isLogin) {
      return (
        <div>
          Hello Giang
          <ul>
            <li>Thông tin đăng nhập</li>
            <li>đăng xuất</li>
          </ul>
        </div>
      );
    }
    return <h1>Đăng nhập </h1>;
  };
  return (
    <div className="container mx-auto">
      <h1>DemoRenderCondition</h1>
      {/* toán tử 3 ngôi  */}
      {/* {isLogin ? (
        <div>
          Hello Giang
          <ul>
            <li>Thông tin đăng nhập</li>
            <li>đăng xuất</li>
          </ul>
        </div>
      ) : (
        <h1>Đăng nhập</h1>
      )} */}
      {renderLogin()}
    </div>
  );
};

export default DemoRenderCondition;
