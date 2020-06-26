import React, { Fragment } from "react";
const Dashboard = () => {
  return (
    <Fragment>
      <body id='page-top'>
        {/* Begin Page Content */}
        <div className='container-fluid'>
          {/* Page Heading */}
          <div className='d-sm-flex align-items-center justify-content-between mb-4'>
            <h1 className='h3 mb-0 text-gray-800'>Dashboard</h1>
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
            <div className='col-xl-8 col-lg-7'>
              <div className='card shadow mb-4'>
                {/* Card Header - Dropdown */}
                <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
                  <h6 className='m-0 font-weight-bold text-primary'>
                    Earnings Overview
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
                <div className='card-body'>Insert stuff</div>
              </div>
            </div>

            {/* Right side*/}
            <div className='col-xl-4 col-lg-5'>
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
        {/* /.container-fluid */}
      </body>
    </Fragment>
  );
};

export default Dashboard;
