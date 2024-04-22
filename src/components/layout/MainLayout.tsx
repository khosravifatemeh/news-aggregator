import NavBar from "./NavBar";
import LeftSideBar from "./LeftSideBar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <NavBar />
      <LeftSideBar />
      <main
        style={{
          width: `calc(100% - 240px)`,
          marginLeft: `240px`,
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
