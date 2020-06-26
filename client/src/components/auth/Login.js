import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  function onChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      console.log(formData);
    }
  }

  return (
    <Fragment>
      <body id='page-top'>
        {/* Begin Page Content */}
        <div className='container-fluid' style={{ width: "80%" }}>
          {/* Page Heading */}
          <div className='d-sm-flex align-items-center justify-content-between mb-4'>
            <h1 className='h3 mb-0 text-gray-800'>Sign in!</h1>
          </div>

          {/* Content Row */}

          <div className='row'>
            {/* Left side */}
            <div className='col-xl-12 col-lg-12'>
              <div className='card shadow mb-4'>
                {/* Card Header - Dropdown */}
                <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
                  <h6 className='m-0 font-weight-bold text-primary'>
                    Sign into your account
                  </h6>
                </div>
                {/* Card Body */}
                <div className='card-body'>
                  {" "}
                  <form className='form' onSubmit={(e) => onSubmit(e)}>
                    <div className='form-group'>
                      <input
                        className='fullwidth form-control bg-light border-0 small'
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        value={email}
                        onChange={(e) => onChange(e)}
                        //required
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        className='fullwidth form-control bg-light border-0 small'
                        type='password'
                        placeholder='Password'
                        name='password'
                        //minLength='6'
                        value={password}
                        onChange={(e) => onChange(e)}
                      />
                    </div>

                    <input
                      type='submit'
                      className='btn btn-primary'
                      value='Log in'
                    />
                  </form>
                  <p className='my-1'>
                    Don't have an account? <Link to='/register'>Register</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </body>
    </Fragment>
  );
};

export default Login;
