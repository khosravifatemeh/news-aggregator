import { RouteObject, createBrowserRouter } from "react-router-dom";
import Feed from "../views/Feed";

class Router {
  get Home(): RouteObject {
    return {
      path: "/",
      element: "",
      children: [this.Feed],
    };
  }

  get Feed(): RouteObject {
    return { path: "", element: <Feed /> };
  }

  get makeRouter() {
    return createBrowserRouter([this.Home]);
  }

  static init() {
    const routerInitializer = new Router();
    return routerInitializer.makeRouter;
  }
}

const router = Router.init();
export default router;
