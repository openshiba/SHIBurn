import React, { Component } from "react";
import Web3ReactManager from "./components/Web3ReactManager";
import "./App.css";
import Web3Status from "./components/Web3Status";
import { Burner } from "./components/Burner";
import { RowBetween, RowFixed, AutoRow } from "./components/Row";
import { Column, ColumnCenter, AutoColumn } from "./components/Column";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <header
          className="u-clearfix u-custom-color-15 u-header u-header"
          id="sec-94c3"
        >
          <Web3Status />
          <div className="u-clearfix u-sheet u-valign-middle-xs u-sheet-1">
            <nav className="menu_pages u-menu u-menu-dropdown u-offcanvas u-menu-1">
              <div
                className="menu-collapse"
                style={{ fontSize: "1.125rem", letterSpacing: "0px" }}
              >
                <a
                  className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                  href="https://shibatoken.com/#"
                >
                  {/* <svg>
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#menu-hamburger"
                  ></use>
                </svg>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <symbol
                      id="menu-hamburger"
                      viewBox="0 0 16 16"
                      style="width: 16px; height: 16px;"
                    >
                      <rect y="1" width="16" height="2"></rect>
                      <rect y="7" width="16" height="2"></rect>
                      <rect y="13" width="16" height="2"></rect>
                    </symbol>
                  </defs>
                </svg> */}
                </a>
              </div>
              <div className="u-custom-menu u-nav-container">
                <ul className="u-nav u-unstyled u-nav-1">
                  <li className="u-nav-item">
                    <a
                      className="u-button-style u-nav-link u-text-active-custom-color-3 u-text-hover-custom-color-3 u-text-white"
                      href="https://shibatoken.com"
                      data-page-id="90008461"
                      style={{ padding: "10px" }}
                    >
                      SHIBA TOKEN
                    </a>
                  </li>
                </ul>
              </div>
              <div className="u-custom-menu u-nav-container-collapse">
                <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                  <div className="u-sidenav-overflow">
                    <div className="u-menu-close"></div>
                    <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                      <li className="u-nav-item">
                        <a
                          className="u-button-style u-nav-link"
                          href="https://shibatoken.com"
                          data-page-id="90008461"
                          style={{ padding: "10px" }}
                        >
                          SHIBA TOKEN
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
              </div>
            </nav>
            <h2 className="title u-align-left u-text u-text-custom-color-3 u-text-1">
              <span style={{ fontWeight: "700" }}>SHIBurn</span>
            </h2>
            <a
              href="https://shibatoken.com/#"
              className="u-image u-logo u-image-1"
              data-image-width="72"
              data-image-height="73"
            >
              <img
                src="./resources/shib_logo_header.png"
                className="u-logo-image u-logo-image-1"
                width="50"
              ></img>
            </a>
          </div>
        </header>
        <Web3ReactManager>
          <section
            className="skrollable u-align-center u-clearfix u-image u-parallax u-section-1 skrollable-between"
            id="carousel_bd75"
            data-image-width="3840"
            data-image-height="2160"
            data-bottom-top="background-position: 50% 10vh;"
            data-top-bottom="background-position: 50% -10vh;"
            style={{
              backgroundAttachment: "fixed",
              backgroundPosition: "50% 0.409496vh",
            }}
          >
            <div className="u-clearfix u-sheet u-sheet-1">
              <h4 className="u-align-left u-custom-font u-text u-text-body-alt-color u-text-font u-text-1">
                SHIBurn&nbsp;the first SHIB DApp&nbsp;
              </h4>
              <h4 className="u-align-left u-custom-font u-text u-text-body-alt-color u-text-font u-text-2">
                Burn your tokens !
              </h4>
              <Burner />
              <img
                src="./resources/shib_ch_le.png"
                alt=""
                className="u-expanded-width-xs u-image u-image-default u-image-1"
                data-image-width="696"
                data-image-height="1038"
              ></img>
            </div>
          </section>
        </Web3ReactManager>
        <footer
          className="footer u-align-center u-clearfix u-custom-color-15 u-footer u-footer"
          id="sec-0809"
        >
          <div className="u-clearfix u-sheet u-sheet-1">
            <p className="u-small-text u-text u-text-variant u-text-1">
              Woof, woof!
            </p>
          </div>
        </footer>
        <span
          style={{
            height: "64px",
            width: "64px",
            marginLeft: "0px",
            marginRight: "auto",
            marginTop: "0px",
            backgroundImage: "none",
            right: "20px",
            bottom: "20px",
            display: "none",
          }}
          className="u-back-to-top u-icon u-icon-circle u-opacity u-opacity-85 u-spacing-16 u-white"
          data-href="#"
        >
          {/* <svg
              className="u-svg-link"
              preserveAspectRatio="xMidYMin slice"
              viewBox="0 0 551.13 551.13"
            >
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#svg-1d98"
              ></use>
            </svg>
            <svg
              className="u-svg-content"
              enable-background="new 0 0 551.13 551.13"
              viewBox="0 0 551.13 551.13"
              xmlns="http://www.w3.org/2000/svg"
              id="svg-1d98"
            >
              <path d="m275.565 189.451 223.897 223.897h51.668l-275.565-275.565-275.565 275.565h51.668z"></path>
            </svg> */}
        </span>
      </>
    );
  }
}

export default App;
