import React, { memo } from "react";

const ContentChild = (props) => {
  console.log("child component");
  return (
    <div className="bg-amber-300">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
      eveniet iste consequatur libero. Dolor repudiandae dolores numquam magnam
      odio molestias praesentium, incidunt tempora laboriosam aspernatur esse
      veniam quibusdam similique ipsam voluptates tenetur itaque fuga? Repellat
      dolores asperiores facere molestias nisi iusto eligendi blanditiis. Illum
      libero velit consequatur repellendus, doloribus quia?
      <p>{props.like.number}</p>
    </div>
  );
};

export default memo(ContentChild); //shallow compare props
