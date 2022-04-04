import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GoSettings } from "react-icons/go";
import { GiSpeedometer } from "react-icons/gi";
import { BiCalendar, BiMessageRoundedDetail } from "react-icons/bi";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Doctor from "./dr.PNG";
import Data from "./PatientDetails.json";
import { BiLeftIndent } from "react-icons/bi";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul class="nav flex-column">
        <li class="nav-item">
          <div className="icon" style={{ color: "#000"}}>
            <p>
              {" "}
              &nbsp;&nbsp; Zendenta <br />{" "}
              <span style={{ fontSize: "10px", paddingLeft: "1rem" }}>
                Cobut gigi tampa sakit
              </span>
            </p>
            <a class="nav-link active" aria-current="page" href="#">
              <IconContext.Provider
                value={{
                  className: "shared-class",
                  size: 30,
                }}
              >
                <p style={{ paddingLeft: "6rem" }}>
                  <BiLeftIndent />
                </p>
              </IconContext.Provider>
            </a> 
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <IconContext.Provider
              value={{
                className: "shared-class",
                size: 25,
              }}
            >
              <>
                <div className="icon">
                  <p>
                    <GiSpeedometer />
                  </p>
                  <Link to="/overview" className="icon">
                    <p> &nbsp;&nbsp; Overview</p>
                  </Link>
                </div>
              </>
            </IconContext.Provider>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <IconContext.Provider
              value={{
                className: "shared-class",
                size: 25,
              }}
            >
              <>
                <div className="icon">
                  <p>
                    <BiCalendar />
                  </p>
                  <Link to="/calendar" className="icon">
                    <p> &nbsp;&nbsp; Calendar</p>
                  </Link>
                </div>
              </>
            </IconContext.Provider>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <IconContext.Provider
              value={{
                className: "shared-class",
                size: 25,
              }}
            >
              <>
                <div className="icon">
                  <p>
                    <AiOutlineUser />
                  </p>
                  <Link to="/patient_list" className="icon">
                    <p> &nbsp;&nbsp; Patient List</p>
                  </Link>
                </div>
              </>
            </IconContext.Provider>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <IconContext.Provider
              value={{
                className: "shared-class",
                size: 25,
              }}
            >
              <>
                <div className="icon">
                  <p>
                    <BiMessageRoundedDetail />
                  </p>
                  <Link to="/messages" className="icon">
                    <p> &nbsp;&nbsp; Messages</p>
                  </Link>
                </div>
              </>
            </IconContext.Provider>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <IconContext.Provider
              value={{
                className: "shared-class",
                size: 25,
              }}
            >
              <>
                <div className="icon">
                  <p>
                    <RiMoneyDollarCircleLine />
                  </p>
                  <Link to="/payment_information" className="icon">
                    <p> &nbsp;&nbsp; Payment information</p>
                  </Link>
                </div>
              </>
            </IconContext.Provider>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <IconContext.Provider
              value={{
                className: "shared-class",
                size: 25,
              }}
            >
              <>
                <div className="icon">
                  <p>
                    <GoSettings />
                  </p>
                  <Link to="/settings" className="icon">
                    <p> &nbsp;&nbsp; Settings</p>
                  </Link>
                </div>
              </>
            </IconContext.Provider>
          </a>
        </li>
        <li class="nav-item space">
          <a class="nav-link" href="#">
            <IconContext.Provider
              value={{
                className: "shared-class",
                size: 25,
              }}
            >
              <div className="icon">
                <p>
                  <IoMdInformationCircleOutline />
                </p>
                <Link to="/settings" className="icon">
                  <p> &nbsp;&nbsp; Help</p>
                </Link>
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li class="nav-item top">
          <a class="nav-link1" href="#">
            <IconContext.Provider
              value={{
                className: "shared-class",
                size: 25,
              }}
            >
              <>
                <div className="iconn">
                  <img src={Doctor} class="doctor" alt="..."></img>
                  <p style={{ color: "#000" }}> &nbsp;&nbsp; Drg. Adam. H</p>
                  <div class="dropdown drop">
                    <a
                      class="btn btn-secondary dropdown-toggle dropdn"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></a>
                    {Data.map((post) => {
                      return (
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <li>
                            <a class="dropdown-item" href="#">
                              {post.dr1}
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              {post.dr2}
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              {post.dr3}
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              {post.dr4}
                            </a>
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                </div>
              </>
            </IconContext.Provider>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
