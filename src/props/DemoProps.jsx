import ArticleItem from "./ArticleItem";
import CardProducts from "./CardProducts";

const DemoProps = () => {
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
            title: "DEF",
            content: "abc123",
            like: 500,
            dislike: 1,
            views: 5000,
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
    </div>
  );
};

export default DemoProps;
