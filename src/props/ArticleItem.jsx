import React from "react";

const ArticleItem = (props) => {
  //props= {contentArticle: {...}}
  //optional chaining: toán tử ? dành cho object(kiểm tra nếu object có tôn tại thì mới truy xuất thuộc tính còn không thì sẽ bỏ qua)
  const { contentArticle } = props;
  const { title, content, view, like, dislike } = props.contentArticle;
  return (
    <div className="bg-black text-white p-4 my-4">
      <h1>{title}</h1>
      <p>{content}</p>
      <div>
        <button className="m-4 py-3 px-5 bg-gray-400 rounded-lg">
          {view} views
        </button>
        <button className="m-4 py-3 px-5 bg-blue-600 rounded-lg">
          {like} like
        </button>
        <button className="m-4 py-3 px-5 bg-red-600 rounded-lg">
          {dislike} dislike
        </button>
      </div>
    </div>
  );
};

export default ArticleItem;
