// import Baitap from "./component/Baitap";
// import DataBinding from "./dataBinding/DataBinding";
// import DemoHandlEvent from "./eventHandle/DemoHandlEvent";
// import DemoRenderCondition from "./renderCondition/DemoRenderCondition";
// import DemoState from "./state/DemoState";
// import DemoChangeFontSize from "./state/DemoChangeFontSize";
// import DemoProps from "./props/DemoProps";
// import RenderWithMap from "./renderWithMap/RenderWithMap";
// import DemoChangeCar from "./state/DemoChangeCar";
// import DemoTinkerApp from "./state/DemoTinkerApp";

// import DemoLoginForm from "./FormDemo/DemoLoginForm";
// import DemoLoginFormWithFormik from "./FormDemo/DemoLoginFormWithFormik";
import { Routes, Route } from "react-router-dom";

// import DemoLoginFormWithFormik from "./FormDemo/DemoLoginFormWithFormik";
// import HeaderHome from "./component/Router/HeaderHome";
import HomePageMaster from "./MasterPages/HomePageMaster";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import About from "./pages/About";
import UserPageMaster from "./MasterPages/UserPageMaster";
import AdminPageMaster from "./MasterPages/AdminPageMaster";
import PageError from "./pages/PageError";
// import PracticeForm from "./FormDemo/PracticeForm";
import Profile from "./pages/Profile";
import ForgotPass from "./pages/ForgotPass";
// import CarStore from "./LiftingStateUp/CarStore/CarStore";

// import Shoepages from "./apiDemo/Shoepages";
import DanhSachSAnPham from "./LiftingStateUp/DanhSachSAnPham";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import ProductManagement from "./pages/ProductManagement/ProductManagement";
import AddProduct from "./pages/ProductManagement/AddProduct";
import EditProdct from "./pages/ProductManagement/EditProdct";
import Product from "./pages/ProductManagement/Product";
import AntDesignDemo from "./AntDesignDemo/AntDesignDemo";
import TableDemo from "./AntDesignDemo/TableDemo";
import TableDemoWithApi from "./AntDesignDemo/TableDemoWithApi";

//cấu hình redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ChangeNumber from "./DemoRedux/ChangeNumber";
import ChangeFontSizeWithRedux from "./DemoRedux/ChangeFontSizeWithRedux";
import ShoeShop from "./DemoRedux/shoeShop";
import Cart from "./DemoRedux/Cart";
import Register from "./DemoRedux/Register";
import Login2 from "./DemoRedux/Login";
import Profile2 from "./DemoRedux/Profile2";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { navigateHistory } from "./utils/setting";

//cấu hình react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//cấu hình react-query-dev-tool
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ShoeShopRQ from "./ReactQueryDemo/ShoeShopRQ";
import UserManagement from "./ReactQueryDemo/UserRQ/UserManagement";
import UseRefDemo from "./customHook/UseRefDemo";
import UseMemoDemo from "./customHook/useMemo/UseMemoDemo";
import UseCallBack from "./customHook/useCallback/UseCallBack";
const queryClient = new QueryClient();

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
    <HistoryRouter history={navigateHistory}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={true} />
          <Routes>
            {/* <Route path="/login" element={<DemoLoginFormWithFormik />}></Route>
        <Route path="/demo" element={<DemoChangeCar />}></Route>
        <Route path="/demo2" element={<DemoTinkerApp />}></Route> */}
            <Route path="" element={<HomePageMaster />}>
              <Route index element={<HomePage />}></Route>
              {/* <Route path="login" element={<Login />}></Route> */}
              <Route path="about" element={<About />}></Route>
              <Route path="search" element={<Search />}></Route>
              <Route path="detail">
                <Route path=":prodID" element={<Detail />}></Route>
              </Route>

              <Route path="antd" element={<AntDesignDemo />}></Route>
              <Route path="antd-table" element={<TableDemo />}></Route>
              <Route
                path="antd-table-api"
                element={<TableDemoWithApi />}
              ></Route>
              <Route path="*" element={<PageError />}></Route>
              <Route
                path="redux-change-number"
                element={<ChangeNumber />}
              ></Route>
              <Route
                path="redux-change-fontsize"
                element={<ChangeFontSizeWithRedux />}
              ></Route>
              <Route path="redux-shoe-shop" element={<ShoeShop />}></Route>
              <Route path="cart" element={<Cart />}></Route>

              <Route path="register" element={<Register />}></Route>
              <Route path="loginWithFormik" element={<Login2 />}></Route>
              <Route path="/profile" element={<Profile2 />}></Route>
              <Route path="/rq-shoe-shop" element={<ShoeShopRQ />}></Route>
              <Route path="/rq-user" element={<UserManagement />}></Route>

              <Route path="/useref" element={<UseRefDemo />}></Route>
              <Route path="/usememo" element={<UseMemoDemo />}></Route>
              <Route path="/usecallback" element={<UseCallBack />}></Route>
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
              <Route
                path="product-management"
                element={<ProductManagement />}
              ></Route>
              <Route path="add-product" element={<AddProduct />}></Route>
              <Route path="edit">
                <Route path=":id" element={<EditProdct />}></Route>
              </Route>

              <Route path="product" element={<Product />}></Route>
              <Route path="product">
                <Route path=":id" element={<Product />}></Route>
              </Route>
            </Route>
          </Routes>
        </QueryClientProvider>
      </Provider>
    </HistoryRouter>
  );
};

export default App;
