import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: state.name,
      email: state.email,
      password: state.password,
    };
    dispatch(register(userData, navigate));
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
              <form onSubmit={registerSubmit}>
                <div className="mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control mt-2"
                    placeholder="Name: Olloshukur"
                    value={state.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control mt-2"
                    placeholder="Email: olma@gmail.com"
                    value={state.email}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="submit"
                    className="btn btn-success w-100"
                    value="Register"
                  />
                  <small>
                    Are you account? <Link to={"/login"}>Login</Link>{" "}
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

export default Register;
