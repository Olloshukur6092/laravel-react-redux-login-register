import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import { http } from "../../api/axios";

const Header = () => {
  const user = useSelector((state) => state.auth.auth);

  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loggedOut = async () => {
    dispatch(logout(navigate));
  };

  return (
    <header id="header">
      <nav className="navbar navbar-expand-lg shadow">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            OLMA
          </Link>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to={"/contact"}>
                Contact
              </Link>
            </li>
            {user !== null ? (
              <>
                <li className="nav-item">
                  <button
                    className="btn btn-dark px-4 py-3"
                    onClick={loggedOut}
                  >
                    Logout
                  </button>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link " to={"/register"}>
                    Register
                  </Link>
                </li> */}
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link " to={"/login"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to={"/register"}>
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
