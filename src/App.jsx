// import Baitap from "./component/Baitap";
// import DataBinding from "./dataBinding/DataBinding";
// import DemoHandlEvent from "./eventHandle/DemoHandlEvent";
// import DemoRenderCondition from "./renderCondition/DemoRenderCondition";
// import DemoState from "./state/DemoState";
// import DemoChangeFontSize from "./state/DemoChangeFontSize";
// import DemoProps from "./props/DemoProps";
// import RenderWithMap from "./renderWithMap/RenderWithMap";
import DemoChangeCar from "./state/DemoChangeCar";
import DemoTinkerApp from "./state/DemoTinkerApp";

// import DemoLoginForm from "./FormDemo/DemoLoginForm";
// import DemoLoginFormWithFormik from "./FormDemo/DemoLoginFormWithFormik";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DemoLoginFormWithFormik from "./FormDemo/DemoLoginFormWithFormik";
import HeaderHome from "./component/Router/HeaderHome";
import HomePageMaster from "./MasterPages/HomePageMaster";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import About from "./pages/About";
import UserPageMaster from "./MasterPages/UserPageMaster";
import AdminPageMaster from "./MasterPages/AdminPageMaster";
import PageError from "./pages/PageError";
import PracticeForm from "./FormDemo/PracticeForm";
import Profile from "./pages/Profile";
import ForgotPass from "./pages/ForgotPass";
// import CarStore from "./LiftingStateUp/CarStore/CarStore";

// import Shoepages from "./apiDemo/Shoepages";
import DanhSachSAnPham from "./LiftingStateUp/DanhSachSAnPham";
import Detail from "./pages/Detail";

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
    // {/* <DanhSachSAnPham /> */}
    //   {/* <CarStore /> */}
    //   {/* <Shoepages /> */}
    //   {/* <DemoLoginForm /> */}
    //   <DemoLoginFormWithFormik />
    // </div>

    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<DemoLoginFormWithFormik />}></Route>
        <Route path="/demo" element={<DemoChangeCar />}></Route>
        <Route path="/demo2" element={<DemoTinkerApp />}></Route> */}
        <Route path="" element={<HomePageMaster />}>
          <Route index element={<HomePage />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="detail">
            <Route path=":prodID" element={<Detail />}></Route>
          </Route>
          <Route path="*" element={<PageError />}></Route>
        </Route>

        <Route path="user" element={<UserPageMaster />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="about" element={<DanhSachSAnPham />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="forgotpass" element={<ForgotPass />}></Route>
          {/* <Route path="*" element={<Navigate to="/user/login" />}></Route> */}
        </Route>

        <Route path="admin" element={<AdminPageMaster />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="about" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
