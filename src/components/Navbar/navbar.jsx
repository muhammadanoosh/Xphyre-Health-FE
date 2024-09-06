import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import DropDown from './DropDown';
import logoNav from '../../assets/Asset 3.png';
import { closeIcon } from '../../assets/allAssets';
import { logoWithOpacity, contact, email, location } from '../../assets/allAssets';
import IconBoxStyle11 from '../IconBox/IconBoxStyle11';
import Spacing from '../Spacing';
import { navLinks } from '../../Constants/constants';


export default function Navbar({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setMobileToggle(false);
  };
  return (
    <>
      <header
        className={`cs_site_header cs_style1 cs_sticky_header ${mobileToggle ? 'cs_mobile_toggle_active' : ''
          } ${variant} ${isSticky ? 'cs_active_sticky' : ''}`}
      >
        <div className="cs_main_header" style={{ backgroundColor: "white" }}>
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <a href="/">
                  <div style={{ display: "flex" }} className="cs_site_branding">
                    <img style={{ height: "3rem" }} src={logoNav} alt="logo" />
                    <p style={{ fontSize: "20px", position: "relative", top: "12px", left: "9px", color: 'black' }}>Xphyre <span style={{ fontWeight: 600 }}>Health</span></p>
                  </div>
                </a>
                <nav className="cs_nav">
                  <ul className={`${mobileToggle ? 'cs_nav_list cs_active' : 'cs_nav_list'}`}>
                    {navLinks.map((link, index) => (
                      link.subLinks ? (
                        <li className="menu-item-has-children" key={index}>
                          <Link to="#" onClick={handleLinkClick}>
                            {link.label}
                          </Link>
                          <DropDown>
                            <ul className="nav-dropdown" style={{ width: "20rem" }}>
                              {link.subLinks.map((subLink, subIndex) => (
                                <li key={subIndex}>
                                  <NavLink to={subLink.to} activeClassName="active" onClick={handleLinkClick}>
                                    {subLink.label}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </DropDown>
                        </li>
                      ) : (
                        <li key={index}>
                          <NavLink
                            exact={link.exact || false}
                            to={link.to}
                            activeClassName="active"
                            onClick={handleLinkClick}
                          >
                            {link.label}
                          </NavLink>
                        </li>
                      )
                    ))}
                  </ul>
                  <span
                    className={
                      mobileToggle ? 'cs_menu_toggle cs_teggle_active' : 'cs_menu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </nav>

              </div>
              <div className="cs_main_header_right">
                <div className="cs_toolbox">
                  <button
                    className="cs_toolbox_btn cs_sidebar_toggle_btn"
                    type="button"
                    onClick={() => setSideNav(!sideNav)}
                  >
                    <svg
                      width={35}
                      height={30}
                      viewBox="0 0 35 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.483887 2.46544C0.483887 1.10383 1.14618 0 1.96315 0H33.5208C34.3377 0 35 1.10383 35 2.46544C35 3.82708 34.3377 4.93088 33.5208 4.93088H1.96315C1.14618 4.93088 0.483887 3.82708 0.483887 2.46544Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.483887 14.6694C0.483887 13.3074 1.14618 12.2039 1.96315 12.2039H33.5208C34.3377 12.2039 35 13.3074 35 14.6694C35 16.0309 34.3377 17.1348 33.5208 17.1348H1.96315C1.14618 17.1348 0.483887 16.0309 0.483887 14.6694Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.483887 26.6267C0.483887 25.2648 1.14618 24.1613 1.96315 24.1613H33.5208C34.3377 24.1613 35 25.2648 35 26.6267C35 27.9883 34.3377 29.0922 33.5208 29.0922H1.96315C1.14618 29.0922 0.483887 27.9883 0.483887 26.6267Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`cs_sidenav ${sideNav ? 'active' : ''}`}>
        <div
          className="cs_sidenav_overlay"
          onClick={() => setSideNav(!sideNav)}
        />
        <div className="cs_sidenav_in">
          <div
            className='logo_with_opacity'
          >
            <img src={logoWithOpacity} alt="Logo" />
          </div>
          <div className='after_logo_with_opacity'>

            <button
              className="cs_close"
              type="button"
              onClick={() => setSideNav(!sideNav)}
            >
              <img src={closeIcon} alt="Close" />
            </button>
            <div className="cs_logo_box">
              <div className="cs_height_15" />
              <h3 className="cs_fs_24 cs_semibold mb-0">
                Xphyre Health
              </h3>
            </div>
            <Spacing md="20" lg="20" xl="20" />
            <hr />
            <Spacing md="20" lg="50" xl="35" />
            <IconBoxStyle11
              title="Phone"
              subTitle="855-585-3935"
              iconSrc={contact}
            />
            <Spacing md="30" lg="30" xl="30" />
            <IconBoxStyle11
              title="Email"
              subTitle="info@xphyrehealth.com"
              iconSrc={email}
            />
            <Spacing md="30" lg="30" xl="30" />
            <IconBoxStyle11
              title="Location"
              subTitle="Suite 350, Houston,TX. 77084"
              iconSrc={location}
            />
          </div>

        </div>
      </div>
      <div className={`cs_header_search ${searchToggle ? 'active' : ''}`}>
        <div className="cs_header_search_in">
          <div className="container">
            <div className="cs_header_search_box">
              <form className="cs_search_form">
                <input type="text" placeholder="Search Doctors" />
                <button className="cs_search_btn">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.07914 0C3.62682 0 0 3.62558 0 8.07641C0 12.5272 3.62682 16.1599 8.07914 16.1599C9.98086 16.1599 11.7299 15.4936 13.1122 14.3875L16.4775 17.7498C16.6473 17.9126 16.8741 18.0024 17.1094 18C17.3446 17.9975 17.5695 17.9032 17.736 17.737C17.9025 17.5708 17.9972 17.3461 17.9999 17.111C18.0027 16.8758 17.9132 16.6489 17.7506 16.4789L14.3853 13.1148C15.4928 11.7308 16.16 9.97968 16.16 8.07641C16.16 3.62558 12.5315 0 8.07914 0ZM8.07914 1.79517C11.561 1.79517 14.3625 4.59577 14.3625 8.07641C14.3625 11.557 11.561 14.3647 8.07914 14.3647C4.59732 14.3647 1.79575 11.557 1.79575 8.07641C1.79575 4.59577 4.59732 1.79517 8.07914 1.79517Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </form>
              <button
                className="cs_close"
                type="button"
                onClick={() => setSearchToggle(!searchToggle)}
              >
                <img src={closeIcon} alt="Close" />
              </button>
            </div>
          </div>
        </div>
        <div
          className="cs_sidenav_overlay"
          onClick={() => setSearchToggle(!searchToggle)}
        />
      </div>
    </>
  );
}

