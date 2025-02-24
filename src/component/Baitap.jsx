import HeaderComponent from "./HeaderComponent";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
import ContentComponent from "./ContentComponent";
const Baitap = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="flex">
        <NavComponent />
        <ContentComponent />
      </div>
      <FooterComponent />
    </div>
  );
};

export default Baitap;
