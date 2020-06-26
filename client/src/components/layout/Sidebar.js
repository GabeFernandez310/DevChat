import React, { Fragment } from "react";
import Sidebar from "react-sidebar";
import { Link } from "react-router-dom";

const MySidebar = (props) => {
  return (
    <Sidebar
      sidebar={
        <Fragment>
          <ul
            className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
            id='accordionSidebar'
          >
            {/* Sidebar - Brand */}
            <Link
              to='/Landing'
              className='sidebar-brand d-flex align-items-center justify-content-center'
            >
              <div className='sidebar-brand-icon rotate-n-15'>
                <i className='fas fa-file-code'></i>
              </div>
              <div className='sidebar-brand-text mx-3'>
                DevChat <sup>1.0</sup>
              </div>
            </Link>

            {/* Divider */}
            <hr className='sidebar-divider my-0' />

            {/* Nav Item - Dashboard */}
            <li className='nav-item active'>
              <Link to='/dashboard' className='nav-link'>
                <i className='fas fa-fw fa-tachometer-alt'></i>
                <span>Dashboard</span>
              </Link>
            </li>

            {/* Divider */}
            <hr className='sidebar-divider' />

            {/* Heading */}
            <div className='sidebar-heading'>Quick Access</div>

            <li className='nav-item'>
              <Link to='/posts' className='nav-link'>
                <i className='fas fa-fw fa-file-alt'></i>
                <span>My Posts</span>
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/posts' className='nav-link'>
                {" "}
                <i className='fas fa-fw fa-pencil'></i>
                <span>My Comments</span>
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/posts' className='nav-link'>
                <i className='fas fa-fw fa-file'></i>
                <span>Browse Posts</span>
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/posts' className='nav-link'>
                <i className='fas fa-fw fa-users'></i>
                <span>Browse Profiles</span>
              </Link>
            </li>

            {/* Divider */}
            <hr className='sidebar-divider' />

            {/* Heading */}
            <div className='sidebar-heading'>User</div>

            <li className='nav-item'>
              <Link to='/register' className='nav-link'>
                <i className='fas fa-fw fa-user'></i>
                <span>Account</span>
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/posts' className='nav-link'>
                <i className='fas fa-fw fa-address-card'></i>
                <span>Profile</span>
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/posts' className='nav-link'>
                <i className='fas fa-fw fa-cog'></i>
                <span>Settings</span>
              </Link>
            </li>

            {/* Divider */}
            <hr className='sidebar-divider d-none d-md-block' />
          </ul>
          {/* End of Sidebar */}
        </Fragment>
      }
      open={props.isOpen}
      onSetOpen={props.onSetOpen}
    >
      <button className='clear' onClick={() => props.onSetOpen(true)}>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
      </button>
    </Sidebar>
  );
};

export default MySidebar;
