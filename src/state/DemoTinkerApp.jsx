import { useState } from "react";

//rafce
const DemoTinkerApp = () => {
  //khi bấm like hoặc like thì sẽ thay đổi 1 hình khác
  const [srcImage, setSrcImage] = useState("https:i.pravatar.cc?u=8");
  const [like, setLike] = useState(0);
  const [disLike, setDislike] = useState(0);
  const handleChangeImage = () => {
    //tạo số ngẫu nhiên
    let randomNumber = Math.floor(Math.random() * 70);
    //Tạo link hình từ số ngẫu nhiên
    let newImage = `https:i.pravatar.cc?u=${randomNumber}`;
    //Gọi hàm setState để thay đổi state và render lại component
    setSrcImage(newImage);
  };
  return (
    <div className="container mx-auto">
      <h1>Tinker App</h1>

      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={srcImage} alt />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => {
              handleChangeImage();
              setLike(like + 1);
            }}
          >
            {like} Like
          </button>
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={() => {
              handleChangeImage();
              setDislike(disLike + 1);
            }}
          >
            {disLike} Dislike
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoTinkerApp;
