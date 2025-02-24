import React from "react";
import CardComponent from "./CardComponent";

const ContentComponent = () => {
  return (
    <div className="bg-green-500 w-[70%] flex justify-between items-center p-50">
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  );
};

export default ContentComponent;
