import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";
import Banner from "./Banner";
import Estate from "./Estate";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Estate></Estate>
      <Footer></Footer>
    </div>
  );
};

export default Home;
