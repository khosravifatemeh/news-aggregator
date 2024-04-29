import { RouteObject, createBrowserRouter } from "react-router-dom";
import Feed from "../pages/Feed";
import MainLayout from "../components/layout/MainLayout";
import Search from "../pages/Search";

class Router {
  get Home(): RouteObject {
    return {
      path: "/",
      element: <MainLayout />,
      children: [this.Feed, this.Search],
    };
  }

  get Feed(): RouteObject {
    return { path: "feed", element: <Feed /> };
  }

  get Search(): RouteObject {
    return { path: "search", element: <Search /> };
  }

  get makeRouter() {
    return createBrowserRouter([this.Feed]);
  }

  static init() {
    const routerInitializer = new Router();
    return routerInitializer.makeRouter;
  }
}

const router = Router.init();
export default router;
