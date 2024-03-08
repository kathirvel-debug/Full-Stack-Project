
import './App.css';
import Home from './Home pages/Home'

import { Navbar } from './components/Nav';
import AddCart from './AddCart/Addcart';
import Loginpage from './Loginpage/loginpage';
import CreatePage from './Loginpage/createpage'
import Frompage from '../src/Admin/adminForm'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  
  {
    path: "/",
    
    element: <Navbar />,
    children: [
      {
        index: true,
        element: (  
          <Home/>
          )
      },
      {
        path:"/addcart", // Conditionally set the path
        element: (
         
           <AddCart />
          
        )
      },
      {path:'/login',element:<Loginpage/>},
      {path:'/create',element:<CreatePage/>},
      {path:'/admin',element:<Frompage/>}
    ]
  }
]);

function App() {
  
  
  return (
   
    <RouterProvider router={router} />
  
  );
}

export default App;
