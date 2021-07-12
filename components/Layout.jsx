import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => (
  <div className="bg-gray-50 bg-opacity-20">
    <Head>
      <title>Jolene Ng</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    <div className="flex justify-center w-full">{children}</div>
    <Footer />
  </div>
);
export default Layout;
