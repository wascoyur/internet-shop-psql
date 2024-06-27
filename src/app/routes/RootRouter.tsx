import {createBrowserRouter} from 'react-router-dom';
import {ErrorPage} from '../ErrorPage';
import Home from '../../pages/Home';


// export const RoutePayment={
//   path: "/payment",
//   element: <Payment />,
//   errorElement: <ErrorPage />,
// }
//
// export const RouteBucket={
//   path: "/bucket",
//   element: <Bucket />,
//   errorElement: <ErrorPage />,
// }

  export const Root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  // RouteSignUp,
  // RouteSignIn,
  // RouteBucket,
  // RoutePayment
]);
