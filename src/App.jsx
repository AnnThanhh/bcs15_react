// import Baitap from "./component/Baitap";
// import DataBinding from "./dataBinding/DataBinding";
// import DemoHandlEvent from "./eventHandle/DemoHandlEvent";
// import DemoRenderCondition from "./renderCondition/DemoRenderCondition";
// import DemoState from "./state/DemoState";
// import DemoChangeFontSize from "./state/DemoChangeFontSize";
// import DemoProps from "./props/DemoProps";
// import RenderWithMap from "./renderWithMap/RenderWithMap";
import DemoChangeCar from "./state/DemoChangeCar";
// import DemoTinkerApp from "./state/DemoTinkerApp";

// import DemoLoginForm from "./FormDemo/DemoLoginForm";
// import DemoLoginFormWithFormik from "./FormDemo/DemoLoginFormWithFormik";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DemoLoginFormWithFormik from "./FormDemo/DemoLoginFormWithFormik";
// import CarStore from "./LiftingStateUp/CarStore/CarStore";

// import Shoepages from "./apiDemo/Shoepages";
// import DanhSachSAnPham from "./LiftingStateUp/DanhSachSAnPham";

const App = () => {
  return (
    // <div>
    //   <Baitap />
    //   <DataBinding />
    //   <DemoHandlEvent/>
    //   <DemoRenderCondition/>
    //   <DemoState />
    //   <DemoChangeFontSize />
    //   {/* <DemoTinkerApp /> */}
    //   {/* <DemoChangeCar /> */}
    //   {/* <DemoProps /> */}
    //   {/* <RenderWithMap /> */}
    //   {/* <DanhSachSAnPham /> */}
    //   {/* <CarStore /> */}
    //   {/* <Shoepages /> */}
    //   {/* <DemoLoginForm /> */}
    //   <DemoLoginFormWithFormik />
    // </div>

    <BrowserRouter>
      <header>
        <a href="/login">Login</a>
        <a href="/demo">DEmo</a>
      </header>
      <Routes>
        <Route path="/login" element={<DemoLoginFormWithFormik />}></Route>
        <Route path="/demo" element={<DemoChangeCar />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
