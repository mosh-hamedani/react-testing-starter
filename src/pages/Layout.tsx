import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="prose p-5">
        <Outlet />
        <Toaster />
      </main>
    </>
  );
};

export default Layout;
