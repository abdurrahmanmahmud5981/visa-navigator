import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
const MainLayout = () => {
  return (
    <>
      
      <header className="sticky top-0 border-b border-gray-200/50 dark:border-b-neutral/60 dark:bg-base-100/60   backdrop-blur-2xl  backdrop-filter z-50 bg-base-100/60">
        <Navber />
      </header>
      <main className="max-w-screen-2xl mx-auto w-11/12 min-h-[calc(100vh-522px)] mb-20">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      <Toaster />
      <ScrollProgress/>
    </>
  );
};

export default MainLayout;
