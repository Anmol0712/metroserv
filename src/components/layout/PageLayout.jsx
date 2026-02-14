import Navbar from "./Navbar";
import Footer from "./Footer";

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
