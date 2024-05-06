import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Postes from "./pages/Postes/Postes";
import Employees from "./pages/employees/Employees";
import Home from "./pages/home/Home"
import "./styles/global.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Login from "./pages/login/Login";
import Employee from "./pages/employee/Employee";
import Post from "./pages/post/Post";

function App() {


const Layout = ()=>{

  return (
  <div className="main">

    <Navbar />
    <div className="container">
    <div className="menuContainer">
      <Menu />
    </div>
    <div className="contentContainer">
    <Outlet />
    </div>
    </div>
    <Footer />

  </div>
  );
}







  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/employees",
          element: <Employees />,
        },
        {
          path: "/postes",
          element: <Postes />,
        },
        {
          path: "/employees/:id",
          element: <Employee />,
        },
        {
          path: "/postes/:id",
          element: <Post/>,
        },
      ]
    },
    {
      path:"/login",
      element:<Login/>,
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
