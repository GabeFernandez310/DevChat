import React, { Fragment } from "react";
const Posts = () => {
  return (
    <Fragment>
      <body id='page-top'>
        {/* Begin Page Content */}
        <div className='container-fluid'>
          {/* Page Heading */}
          <div className='d-sm-flex align-items-center justify-content-between mb-4'>
            <h1 className='h3 mb-0 text-gray-800'>Posts</h1>
            <a
              href='#'
              className='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'
            >
              <i className='fas fa-download fa-sm text-white-50'></i> Generate
              Report
            </a>
          </div>

          {/* Content Row */}

          <div className='row'>
            {/* Left side */}
            <div className='col-xl-2 col-lg-2 h-100'>
              <div className='card shadow mb-4'>
                {/* Card Header - Dropdown */}
                <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
                  <h6 className='m-0 font-weight-bold text-primary'>
                    Live Chat
                  </h6>
                  <div className='dropdown no-arrow'>
                    <a
                      className='dropdown-toggle'
                      href='#'
                      role='button'
                      id='dropdownMenuLink'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      <i className='fas fa-ellipsis-v fa-sm fa-fw text-gray-400'></i>
                    </a>
                    <div
                      className='dropdown-menu dropdown-menu-right shadow animated--fade-in'
                      aria-labelledby='dropdownMenuLink'
                    >
                      <div className='dropdown-header'>Dropdown Header:</div>
                      <a className='dropdown-item' href='#'>
                        Action
                      </a>
                      <a className='dropdown-item' href='#'>
                        Another action
                      </a>
                      <div className='dropdown-divider'></div>
                      <a className='dropdown-item' href='#'>
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
                {/* Card Body */}
                <div className='card-body h-100'>
                  {" "}
                  What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book it has? What is Lorem Ipsum Lorem Ipsum
                  is simply dummy text of the printing and typesetting industry
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s when an unknown printer took a galley of type
                  and scrambled it to
                </div>
              </div>
            </div>

            {/* Right side*/}
            <div className='col-xl-19 col-lg-10'>
              <div className='col-xl-12 col-lg-12'>
                <div className='card shadow mb-4'>
                  {/* Card Header - Dropdown */}
                  <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
                    <h6 className='m-0 font-weight-bold text-primary'>
                      Revenue Sources
                    </h6>
                    <div className='dropdown no-arrow'>
                      <a
                        className='dropdown-toggle'
                        href='#'
                        role='button'
                        id='dropdownMenuLink'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        <i className='fas fa-ellipsis-v fa-sm fa-fw text-gray-400'></i>
                      </a>
                      <div
                        className='dropdown-menu dropdown-menu-right shadow animated--fade-in'
                        aria-labelledby='dropdownMenuLink'
                      >
                        <div className='dropdown-header'>Dropdown Header:</div>
                        <a className='dropdown-item' href='#'>
                          Action
                        </a>
                        <a className='dropdown-item' href='#'>
                          Another action
                        </a>
                        <div className='dropdown-divider'></div>
                        <a className='dropdown-item' href='#'>
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Card Body */}
                  <div className='card-body'>more stuff</div>
                </div>
              </div>

              <div className='col-xl-12 col-lg-12'>
                <div className='card shadow mb-4'>
                  {/* Card Header - Dropdown */}
                  <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
                    <h6 className='m-0 font-weight-bold text-primary'>
                      Revenue Sources
                    </h6>
                    <div className='dropdown no-arrow'>
                      <a
                        className='dropdown-toggle'
                        href='#'
                        role='button'
                        id='dropdownMenuLink'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        <i className='fas fa-ellipsis-v fa-sm fa-fw text-gray-400'></i>
                      </a>
                      <div
                        className='dropdown-menu dropdown-menu-right shadow animated--fade-in'
                        aria-labelledby='dropdownMenuLink'
                      >
                        <div className='dropdown-header'>Dropdown Header:</div>
                        <a className='dropdown-item' href='#'>
                          Action
                        </a>
                        <a className='dropdown-item' href='#'>
                          Another action
                        </a>
                        <div className='dropdown-divider'></div>
                        <a className='dropdown-item' href='#'>
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Card Body */}
                  <div className='card-body'>more stuff</div>
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

export default Posts;
