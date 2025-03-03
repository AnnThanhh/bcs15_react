import React from 'react'

const DemoPropsChild = (props) => {
    //props.children: là nội dung <>Children</> của thẻ component
  return (
    <div>
        <h3>{props.title}</h3>
        {/* render toàn bộ nội dung bên trong của component cha  */}
        {props.children}
    </div>
  )
}

export default DemoPropsChild