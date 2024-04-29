import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { setBadge } from "../../store/reducers/feed";
import { RootState } from "../../store/rootState";
import AlertBar from "../common/AlertBar";
import Navbar from "./NavBar";

export const MainLayout: React.FC = () => {
  const { showBadge } = useSelector((state: RootState) => state.feed);
  const dispatch = useDispatch();

  const handleBadgeDismissal = () => {
    dispatch(setBadge(false));
  };

  return (
    <>
      <Navbar />
      {showBadge && (
        <AlertBar
          message={"custom feed"}
          severity={"warning"}
          onClose={handleBadgeDismissal}
        />
      )}
      <main style={{ marginTop: "64px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
