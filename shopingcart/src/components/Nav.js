import { NavLink, Outlet,useParams } from "react-router-dom";
import {signInAPI,userSelectors} from '../Redux/userLoginReducer'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import {Remove} from "../Redux/userLoginReducer"
const isActive = false;
export const Navbar = () => {
  const disptach=useDispatch();
  const {user,userId}=useSelector(userSelectors)
  const handelSubmit=()=>{
    disptach(Remove())
    
  }
    
  return (
    <div>
      <div className="navbar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
          alt="logo"
          onClick={() => window.location.replace("/")}
        />

        <nav>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    border: "2px solid #fff",
                    backgroundColor: "#e1d1f976"
                  }
                : null
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    border: "2px solid #fff",
                    backgroundColor: "#e1d1f976"
                  }
                : null
            }
            to="/addcart"
          >
            Cart
          </NavLink>

        
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    border: "2px solid #fff",
                    backgroundColor: "#e1d1f976"
                  }
                : null
            }
            to="/login"
          >
            SignIn
          </NavLink>
          
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    border: "2px solid #fff",
                    backgroundColor: "#e1d1f976"
                  }
                : null
            }
            to="/login"
            onClick={handelSubmit}
          >
            Logout
          </NavLink>

          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    border: "2px solid #fff",
                    backgroundColor: "#e1d1f976"
                  }
                : null
            }
            to="/admin"
          >
            Admin
          </NavLink>
        </nav>
        <h4>{user?user:"Hello"}</h4>
        
      </div>
      <Outlet />
    </div>
  );
};
