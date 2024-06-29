import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../../pages/Home";
import { ControlPanelPage } from "../../pages/ControlPanelPage.tsx";

const rootRoute = <Route element={<Home />} path="/" />;
const routeControlPanel = (
  <Route path="/control" element={<ControlPanelPage />} />
);

const routes = createRoutesFromElements([rootRoute, routeControlPanel]);

export const Root = createBrowserRouter(routes);
