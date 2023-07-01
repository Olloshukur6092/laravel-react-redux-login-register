import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/authAction";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: state.email,
      password: state.password,
    };
    dispatch(login(userData, navigate));
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card border-0 shadow-lg">
            <div className="card-header text-center border-0 background-none">
              <h4>Register</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control mt-2"
                    placeholder="Email: olma@gmail.com"
                    value={state.email}
                    onChange={handleLoginChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control mt-2"
                    placeholder="Password: *******"
                    value={state.password}
                    onChange={handleLoginChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="submit"
                    className="btn btn-success w-100"
                    value="Login"
                  />
                  <small>
                    Are you not account? <Link to={"/register"}>Register</Link>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
