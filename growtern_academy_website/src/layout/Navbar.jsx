import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import "../Styles/Navbar.css"
import CustomModal from '../ui/Modal'

// import images
import logo from "../assets/Logos/LOGO.png"
import CareerModal from '../components/Modals/CareerModal'
import DemoClassModal from '../components/Modals/DemoClassModal'


const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showdemo, setShowDemo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const showdemoShow = () => setShowDemo(true);
  const showdemoClose = () => setShowDemo(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => {
    setMenuOpen(false);
    setCoursesOpen(false);
    setMoreOpen(false);
  };

  // Inline styles for mobile menu
  const mobileMenuStyles = {
    position: 'fixed',
    top: 0,
    right: menuOpen ? 0 : '-100%',
    width: '280px',
    height: '100vh',
    background: "linear-gradient(to right, #007bff, #00b4d8)",
    boxShadow: menuOpen ? '-5px 0 25px rgba(0,0,0,0.3)' : 'none',
    transition: 'right 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    zIndex: 9999,
    overflowY: 'auto',
    overflowX: 'hidden'
  };

  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    opacity: menuOpen ? 1 : 0,
    visibility: menuOpen ? 'visible' : 'hidden',
    transition: 'opacity 0.4s ease, visibility 0.4s ease',
    zIndex: 9998
  };

  const menuHeaderStyles = {
    padding: '25px 20px',
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255,255,255,0.2)'
  };

  const menuItemStyles = {
    padding: '15px 25px',
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    borderLeft: '3px solid transparent',
    fontSize: '16px',
    fontWeight: '500'
  };

  const subMenuStyles = {
    backgroundColor: 'rgba(0,0,0,0.2)',
    maxHeight: '0',
    overflow: 'hidden',
    transition: 'max-height 0.4s ease, padding 0.4s ease'
  };

  const subMenuOpenStyles = {
    ...subMenuStyles,
    maxHeight: '500px',
    padding: '10px 0'
  };

  const subMenuItemStyles = {
    padding: '12px 25px 12px 45px',
    color: 'rgba(255,255,255,0.9)',
    textDecoration: 'none',
    display: 'block',
    fontSize: '14px',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={{ position: "fixed", top: "0", width: "100%", background: "white", zIndex: "1000" }}>
      <div className='Included-Navbar'>
        <p className='Welcome-Msg text-white mb-0'>
          Are you Serious about your future?{" "}
          <Link onClick={handleShow} className='Clickhere'>Click here</Link> for a Free Counseling.
        </p>
      </div>

      <section className='Navbar-Section'>
        <div className='container'>
          <div className='row align-items-center'>
            {/* Logo */}
            <div className='col-md-3 col-10 p-0'>
              <a href="/" style={{ textDecoration: "none" }}>
                <div className='d-flex align-items-center py-1'>
                  <img className='Logo' src={logo} alt="logo" />
                </div>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className='col-md-6 d-none d-md-block'>
              <div className="h-100 d-flex justify-content-center align-items-center">
                <ul className="List p-0 mb-0">
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => window.scrollTo(0, 0)}
                      className={({ isActive }) =>
                        isActive ? "Manu active-link" : "Manu"} >
                      Home
                    </NavLink>
                  </li>

                  <li className="dropdown custom-dropdown">
                    <a className="Manu dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Courses
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item" to="/Job-Oriented-Courses" onClick={() => window.scrollTo(0, 0)} >100% Placement Guaranteed Courses</Link></li>
                      <li><Link className="dropdown-item" to="/Certificate-Courses" onClick={() => window.scrollTo(0, 0)} >Short-Term Courses</Link></li>
                    </ul>
                  </li>

                  <li>
                    <NavLink
                      to="https://tech.growtern.com/"
                      target='blank'
                      onClick={() => window.scrollTo(0, 0)}
                      className={({ isActive }) =>
                        isActive ? "Manu active-link" : "Manu"}
                    >
                      IT Services
                    </NavLink>
                  </li>


                  <li className="dropdown custom-dropdown">
                    <a className="Manu dropdown-toggle" role="button" data-bs-toggle="dropdown">More</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><Link onClick={() => window.scrollTo(0, 0)} to={"/about-us"} className="dropdown-item">About Us</Link></li>

                      <li><Link onClick={() => window.scrollTo(0, 0)} to={"/placestudent"} className="dropdown-item">Career Achievers</Link></li>

                      <li><Link onClick={() => window.scrollTo(0, 0)} to={"/contact-us"} className="dropdown-item">Contact Us</Link></li>

                      <li><Link onClick={() => window.scrollTo(0, 0)} to={"/hire-from-us"} className="dropdown-item">Hire From Us</Link></li>

                      {/* <li><Link onClick={() => window.scrollTo(0, 0)} to={"/admission-form"} className="dropdown-item">Admission</Link></li> */}

                      <li><Link onClick={() => window.scrollTo(0, 0)} to={"/workshop-page"} className="dropdown-item">WorkShop</Link></li>

                      <li><Link onClick={() => window.scrollTo(0, 0)} to={"/carrer-page"} className="dropdown-item">Career</Link></li>

                      <li><Link onClick={() => window.scrollTo(0, 0)} target='blank' to={"https://tech.growtern.com/"} className="dropdown-item">IT Services</Link></li>

                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* Desktop Button */}
            <div className='col-md-3 d-none d-md-block p-0'>
              <div className='h-100 d-flex align-items-center justify-content-end'>
                <button onClick={showdemoShow} className='btn Nav-Button'>FREE DEMO-CLASS</button>
              </div>
            </div>

            {/* Mobile Menu Icon */}
            <div className="col-2 d-md-none p-0">
              <div className="h-100 d-flex align-items-center justify-content-end">
                <button
                  className="border-0 bg-transparent Mobile-Menu "
                  onClick={toggleMenu}
                  style={{ zIndex: 100 }}
                >
                  {menuOpen ? (
                    // <i className="bi bi-x-lg fs-3 text-dark"></i>
                    ""
                  ) : (
                    <i className="bi bi-list Mob-Icon fs-2 text-dark"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      <div style={overlayStyles} onClick={closeMenu}></div>

      {/* 📱 Modern Sliding Mobile Menu */}
      <div className="d-md-none" style={mobileMenuStyles}>
        {/* Menu Header */}
        <div style={menuHeaderStyles}>
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="text-white mb-0 fw-bold" style={{ letterSpacing: '1px' }}>
              GROWTERN
            </h5>
            <button
              onClick={closeMenu}
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            // onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.3)'}
            // onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
            >
              <i className="bi bi-x-lg text-white fs-5"></i>
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div style={{ padding: '15px 0' }}>
          <NavLink
            to="/"
            onClick={() => {
              closeMenu();
              window.scrollTo(0, 0);
            }}
            style={menuItemStyles}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.15)';
              e.target.style.borderLeftColor = '#fff';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.borderLeftColor = 'transparent';
            }}

          >
            <i className="bi bi-house-door me-3 fs-5"></i>
            Home
          </NavLink>


          {/* Courses Dropdown */}
          <div>
            <div
              onClick={() => setCoursesOpen(!coursesOpen)}
              style={{
                ...menuItemStyles,
                cursor: 'pointer',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
              }}
            >
              <span>
                <i className="bi bi-book me-3 fs-5"></i>
                Courses
              </span>
              <i className={`bi bi-chevron-${coursesOpen ? 'up' : 'down'}`}></i>
            </div>
            <div style={coursesOpen ? subMenuOpenStyles : subMenuStyles}>
              <Link
                to="/Job-Oriented-Courses"
                onClick={() => {
                  closeMenu();
                  window.scrollTo(0, 0);
                }}
                style={subMenuItemStyles}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.target.style.background = 'transparent'}
              >
                100% Placement Guaranteed Courses
              </Link>
              <Link
                to="/Certificate-Courses"
                onClick={() => {
                  closeMenu();
                  window.scrollTo(0, 0);
                }}
                style={subMenuItemStyles}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.target.style.background = 'transparent'}
              >
                Short-Term Courses
              </Link>
            </div>
          </div>

          <NavLink
            to="https://tech.growtern.com/"
            target='blank'
            onClick={closeMenu}
            style={menuItemStyles}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.15)';
              e.target.style.borderLeftColor = '#fff';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.borderLeftColor = 'transparent';
            }}
          >
            <i className="bi bi-laptop me-3 fs-5"></i>

            IT Services
          </NavLink>

          {/* More Dropdown */}
          <div>
            <div
              onClick={() => setMoreOpen(!moreOpen)}

              style={{
                ...menuItemStyles,
                cursor: 'pointer',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
              }}
            >
              <span>
                <i className="bi bi-three-dots me-3 fs-5"></i>
                More
              </span>
              <i className={`bi bi-chevron-${moreOpen ? 'up' : 'down'}`}></i>
            </div>
            <div style={moreOpen ? subMenuOpenStyles : subMenuStyles}>
              <Link to="/about-us" style={subMenuItemStyles}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.target.style.background = 'transparent'}
                onClick={() => {
                  closeMenu();
                  window.scrollTo(0, 0);
                }}
              >
                About Us
              </Link>
              <Link to="/placestudent" style={subMenuItemStyles}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.target.style.background = 'transparent'}
                onClick={() => {
                  closeMenu();
                  window.scrollTo(0, 0);
                }}
              >
                Career Achievers
              </Link>
              <Link to="/contact-us" style={subMenuItemStyles}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.target.style.background = 'transparent'}
                onClick={() => {
                  closeMenu();
                  window.scrollTo(0, 0);
                }}
              >
                Contact Us
              </Link>

              <Link to="/hire-from-us" style={subMenuItemStyles}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.target.style.background = 'transparent'}
                onClick={() => {
                  closeMenu();
                  window.scrollTo(0, 0);
                }}
              >
                Hire From Us
              </Link>

              {/* <Link to="/admission-form"
                onClick={() => { closeMenu(); window.scrollTo(0, 0); }}
                style={subMenuItemStyles}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                Admission
              </Link> */}


              <Link to="/workshop-page"
                onClick={() => { closeMenu(); window.scrollTo(0, 0); }}
                style={subMenuItemStyles}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                WorkShop
              </Link>

              <Link to="/carrer-page"
                onClick={() => { closeMenu(); window.scrollTo(0, 0); }}
                style={subMenuItemStyles}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                Career
              </Link>


              <Link onClick={() => { closeMenu(); window.scrollTo(0, 0); }} target='blank' to={"https://tech.growtern.com/"} style={subMenuItemStyles}>IT Services</Link>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ padding: '20px 25px', marginTop: 'auto' }}>
          <button
            onClick={() => {
              closeMenu();
              showdemoShow();
            }}
            style={{
              width: '100%',
              padding: '15px',
              background: 'linear-gradient(135deg, #fff 0%, #f0f0f0 100%)',
              border: 'none',
              borderRadius: '30px',
              color: '#ff0000ff',
              fontWeight: '700',
              fontSize: '15px',
              letterSpacing: '0.5px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 7px 20px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
            }}
          >
            <i className="bi bi-play-circle me-2"></i>
            FREE DEMO-CLASS
          </button>
        </div>
      </div>

      {/* Modals */}
      <CustomModal show={show} handleClose={handleClose} modalSize="small">
        <span className="modal-close" onClick={handleClose} style={{ color: "red", fontSize: "2rem", top: "-8px", right: "4px" }}>&times;</span>
        <CareerModal />
      </CustomModal>

      <CustomModal show={showdemo} handleClose={showdemoClose} modalSize="small">
        <span className="modal-close" onClick={showdemoClose}
          style={{ color: "red", fontSize: "2rem", top: "-8px", right: "4px" }}
        >&times;</span>
        <DemoClassModal />
      </CustomModal>
    </div>
  )
}

export default Navbar