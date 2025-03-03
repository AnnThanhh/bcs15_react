import ArticleItem from "./ArticleItem";
import CardProducts from "./CardProducts";
import ModalComponent from "./ModalComponent";
import DemoChangeCar from "./../state/DemoChangeCar";
import DemoChangeFontSize from "../state/DemoChangeFontSize";
import DemoPropsChild from "./DemoPropsChild";
import DemoCallback from "./DemoCallback";
import { useState } from "react";
const DemoProps = () => {
  const [login, setLogin] = useState(false);

  const renderLogin = () => {
    if (login) {
      return <h3>Hello Giang</h3>;
    } else {
      return (
        <button
          onClick={() => {
            setLogin(true);
          }}
        >
          Login
        </button>
      );
    }
  };
  return (
    <div className="container mx-auto">
      <h3>Danh sách sản phẩm</h3>
      <div className="grid grid-cols-3 my-4">
        <CardProducts tenSanPham="Sản Phẩm A" gia={1000} />
        <CardProducts tenSanPham="Sản Phẩm B" gia={2000} />
        <CardProducts tenSanPham="Sản Phẩm C" gia={3000} />
      </div>

      <hr />

      <h3>Danh sách bài viết</h3>
      <div>
        <ArticleItem
          contentArticle={{
            title: "ABC",
            content: "abc123",
            like: 1000,
            dislike: 1,
            views: 2000,
          }}
        />
        <ArticleItem
          contentArticle={{
            title: "GHJ",
            content: "abc123",
            like: 2200,
            dislike: 3,
            views: 4000,
          }}
        />
        <ArticleItem
          contentArticle={{
            title: "GHJ",
            content: "abc123",
            like: 2200,
            dislike: 3,
            views: 4000,
          }}
        />
      </div>

      <hr />
      <h3>Modal: truyền props jsx element </h3>
      <div className="flex justify-around">
        <ModalComponent
          title="LoginForm"
          contentJSX={
            <>
              <input type="text" placeholder="username" />
              <input type="text" placeholder="username" />
            </>
          }
        />
        <ModalComponent title="RegisterForm" contentJSX={<DemoChangeCar />} />
        <ModalComponent title="InfoUser" contentJSX={<DemoChangeFontSize />} />
      </div>

      <hr />
      <h3>Props child </h3>
      <DemoPropsChild title="jsxElement Children">
        <h3>abc</h3>
        <DemoChangeCar />
      </DemoPropsChild>

      <hr />
      <h3>demo callback</h3>
      <DemoCallback renderCondition={renderLogin()} />
    </div>
  );
};

export default DemoProps;
