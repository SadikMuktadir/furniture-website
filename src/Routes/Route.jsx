import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "../Components/MainLayOut";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
        {
            path:"/",
            element:<Home></Home>,
        }
    ]
  },
]);
const Route = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <RouterProvider router={router} />
    </div>
  );
};

export default Route;
