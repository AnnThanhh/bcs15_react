const DemoHandlEvent = () => {
  const handleLike = (e) => {
    console.log("like");
  };

  const handleClickPage = (pageIndex) => {
    console.log(pageIndex);
  };

  return (
    <div className="container mx-auto">
      <h1>Event Handler</h1>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          //anonymous function
          console.log("click");
        }}
      >
        Click me
      </button>

      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleLike}
      >
        Click me 2
      </button>

      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          handleClickPage(1);
        }}
      >
        Click me 3
      </button>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          handleClickPage(2);
        }}
      >
        Click me 4
      </button>

      <div
        onMouseEnter={(e) => {
          e.target.className = "bg-red-500 text-white";
        }}
        onMouseLeave={(e) => {
          e.target.className = "bg-white text-black";
        }}
      >
        Lorem ipsum dolor sit amet.
      </div>

      <input
        type="text"
        onChange={(e) => {
          let value = e.target.value;
          document.getElementById("tag_p").innerHTML = value;
        }}
      />
      <p id="tag_p" className="bg-red-500"></p>
    </div>
  );
};

export default DemoHandlEvent;
