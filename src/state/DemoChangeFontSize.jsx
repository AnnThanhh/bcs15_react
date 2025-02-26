import { useState } from "react";

const DemoChangeFontSize = () => {
  const [fontSize, setFontSize] = useState(20);
  return (
    <div className="container mx-auto">
      <h1>Demo change fontSize</h1>
      <p style={{ fontSize: fontSize }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur,
        cumque.
      </p>
      <button
        onClick={() => {
          setFontSize(fontSize + 1);
        }}
      >
        Zoom In
      </button>
      <button
        onClick={() => {
          setFontSize(fontSize - 1);
        }}
      >
        Zoom Out
      </button>
    </div>
  );
};

export default DemoChangeFontSize;
