import {ErrorPage} from "../ErrorPage.tsx";
import Home from "../../pages/Home.tsx";

export const RouterHome={
  path: "/control",
  element: <Home />,
  errorElement: <ErrorPage />,
}