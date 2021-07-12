import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => (
  <div className="bg-gray-50 bg-opacity-20">
    <Navbar />
    <div className="flex justify-center w-full">{children}</div>
    <Footer />
  </div>
);
export default Layout;
