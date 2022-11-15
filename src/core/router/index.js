import { createBrowserRouter } from "react-router-dom";
import { Detail, Main } from 'pages';


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
    {
        path: "/:itemId",
        element: <Detail/>,
    },
  ]);