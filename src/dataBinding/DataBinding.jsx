const DataBinding = () => {
  const title = "CyberSoft";
  const img =
    "https://www.fahasa.com/blog/wp-content/uploads/2024/12/capybara-dai-dien.jpg";

  const prod = {
    id: 1,
    name: "phone",
    img: "https:img.cc",
    desc: "abc",
  };

  const renderCart = () => {
    //để binding hàm thì giá trị return của hàm phải là string, boolen, number hoặc jsx.element
    return (
      <div className="my-10">
        <h1>{prod.name}</h1>
        <p>{prod.desc}</p>
      </div>
    );
  };

  return (
    <div className="container mx-auto">
      <h1>DataBinding interpolation</h1>
      <p>{title}</p>
      <img src={img} alt="" />
      {renderCart()}
    </div>
  );
};

export default DataBinding;
