import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // bu umumiy layout (navbar va h.k.)
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default router;
