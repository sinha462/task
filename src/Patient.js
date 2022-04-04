import React, { useState } from "react";
import "./App.css";
import Profile from "./diane.PNG";
import { AiOutlineUser, AiFillPrinter } from "react-icons/ai";
import { RiArrowDropUpLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import Data from "./PatientDetails.json";
import "./Appointment.css";
import { CgNotes } from "react-icons/cg";
import { MdOutlineNoteAdd } from "react-icons/md";
import { MdOutlineNote } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";
import { IoIosAddCircle } from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import Sidebar from "./Sidebar";

function Patient() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <Sidebar />
      {Data.map((post) => {
        return (
          <div className="patient">
            <div className="posts">
              <nav class="navbar navbar-light bg-light">
                <div class="container-fluid header">
                  <a class="navbar-brand">
                    <IconContext.Provider
                      value={{
                        className: "shared-class",
                        size: 35,
                      }}
                    >
                      <>
                        <div className="icon1">
                          <p>
                            <AiOutlineUser />
                          </p>
                          <p className="opt"> &nbsp; &nbsp;{post.name}</p>
                        </div>
                      </>
                    </IconContext.Provider>
                  </a>
                  <form class="d-flex">
                    <input
                      class="form-control me-2 style"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    ></input>
                    <IconContext.Provider
                      value={{
                        className: "shared-class",
                        size: 40,
                      }}
                    >
                      <>
                        <div className="icon1">
                          <p>
                            <IoIosAddCircle />
                          </p>
                        </div>
                      </>
                    </IconContext.Provider>
                    <div className="notification">
                      <IconContext.Provider
                        value={{
                          className: "shared-class",
                          size: 30,
                          color: "rgb(83, 89, 95)",
                        }}
                      >
                        <>
                          <div className="icons">
                            <p>
                              <MdNotifications />
                            </p>
                          </div>
                        </>
                      </IconContext.Provider>
                    </div>
                  </form>
                </div>
              </nav>
              <nav class="navbar navbar-light bg-light">
                <div class="container-fluid header1">
                  <a class="navbar-brand brand">
                    <p>Patient List</p>{" "}
                    <p
                      style={{
                        color: "blue",
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                      }}
                    >
                      &#8594;
                    </p>{" "}
                    <p>{post.name}</p>
                  </a>
                  <div class="d-flex">
                    <IconContext.Provider
                      value={{
                        className: "shared-class",
                        size: 30,
                        color: "rgb(83, 89, 95)",
                      }}
                    >
                      <>
                        <div className="icons">
                          <p>
                            <AiFillPrinter />
                          </p>
                        </div>
                      </>
                    </IconContext.Provider>{" "}
                    &nbsp; &nbsp;
                    <div class="btn-group dropup">
                      <button
                        type="button"
                        class="btn bttn"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <IconContext.Provider
                          value={{
                            className: "shared-class",
                            size: 20,
                          }}
                        >
                          <>
                            <div className="icon3">
                              <BiEdit />
                              Edit Patient
                            </div>
                          </>
                        </IconContext.Provider>
                      </button>
                    </div>
                  </div>
                </div>
              </nav>
              <div className="grid">
                <div class="container-sm">
                  <ol>
                    <div className="profile">
                      <img src={Profile} class="img-thumbnail" alt="..."></img>
                      <br />
                      <p className="name">{post.name}</p>
                      <p className="light">{post.name}@example.com</p>
                    </div>
                    <div className="grid1">
                      <p className="line">
                        <p className="number">{post.Past}</p>
                        <p className="light">Past</p>
                      </p>
                      <p className="line1">
                        <p className="number">{post.Upcoming}</p>
                        <p className="light">Upcoming</p>
                      </p>
                      <br />
                    </div>
                    <button type="button" class="btn btn-light">
                      Send Message
                    </button>
                  </ol>
                </div>
                <div class="container-xxl">
                  <ol>
                    <div className="info">
                      <div className="info1">
                        <p className="about">
                          <span className="light">Gender</span>
                          <br />
                          {post.Gender}
                        </p>
                      </div>
                      <div className="info1">
                        <p className="about">
                          <span className="light">Birthday</span>
                          <br />
                          {post.Birthday}
                        </p>
                      </div>
                      <div className="info1">
                        <p className="about">
                          <span className="light">Phone Number</span>
                          <br />
                          {post.PhoneNumber}
                        </p>
                      </div>
                    </div>
                    <div className="info">
                      <div className="info2">
                        <p className="about">
                          <span className="light">Street Address</span>
                          <br />
                          {post.StreetAddress}
                        </p>
                      </div>
                      <div className="info2">
                        <p className="about">
                          <span className="light">City</span>
                          <br />
                          {post.City}
                        </p>
                      </div>
                      <div className="info2">
                        <p className="about">
                          <span className="light">Zip Code</span>
                          <br />
                          {post.ZIPCode}
                        </p>
                      </div>
                    </div>
                    <div className="info">
                      <div className="info2">
                        <p className="about">
                          <span className="light">Member Status</span>
                          <br />
                          {post.MemberStatus}
                        </p>
                      </div>
                      <div className="info2">
                        <p className="about">
                          <span className="light">Registered Date</span>
                          <br />
                          {post.RegisterDate}
                        </p>
                      </div>
                    </div>
                  </ol>
                </div>
                <div class="container-md">
                  <div className="doctor1">
                    <p className="heading">Notes</p>
                    <a href="#" className="detail">
                      See all
                    </a>
                  </div>
                  <div className="notes">
                    <div className="read">
                      - jfghfv
                      <br />
                      - fytfdf
                      <br />
                      - ytdyrdfc
                      <br />
                    </div>
                    <button type="button" class="btn btn-primary">
                      save note
                    </button>
                  </div>
                  <div className="lorem">
                    <p>Lorem ipsum doler sit amet</p>
                    <div class="doctor">
                      <p>
                        <IconContext.Provider
                          value={{
                            className: "shared-class",
                            size: 25,
                          }}
                        >
                          <>
                            <div className="icon1">
                              <p>
                                <AiOutlineUser />
                              </p>
                              <p className="opt"> &nbsp;Drg. Mega Nanade</p>
                            </div>
                          </>
                        </IconContext.Provider>
                      </p>
                      <p className="date">20 Nov '19</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shift">
                <div className="grid3">
                  <div class="container-lg">
                    <div class="uapamr">
                      <p onClick={() => setShow(true)} className="ua">
                        Upcoming Appointments
                      </p>
                      <p onClick={() => setShow(false)} className="ua">
                        Past Appointments
                      </p>
                      <p className="ua">Medical Record</p>
                    </div>
                    {show ? (
                      <div className="profile1">
                        <div className="inner">
                          <ol className="appointment">
                            <div className="head">
                              <p>Root Canal Treatment</p>
                              <div class="btn-group dropup treat">
                                <button
                                  type="button"
                                  class="btn bttn"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <IconContext.Provider
                                    value={{
                                      className: "shared-class",
                                      size: 30,
                                    }}
                                  >
                                    <>
                                      <div className="icon2">
                                        <RiArrowDropUpLine />
                                        Show Previous Treatment
                                      </div>
                                    </>
                                  </IconContext.Provider>
                                </button>
                                <ul class="dropdown-menu">
                                  <li>kihbg</li>
                                  <li>fdgfc</li>
                                </ul>
                              </div>
                            </div>
                            <div className="outer">
                              <p className="line">
                                <p className="number">{post.UADate}</p>
                                <p className="light">{post.UATime}</p>
                              </p>
                              <div className="grid1">
                                <p className="line">
                                  <p>Treatment</p>
                                  <p className="light">{post.UATreatment}</p>
                                </p>
                                <p className="line1">
                                  <p>Dentist</p>
                                  <p className="light">{post.UADentist}</p>
                                </p>
                                <p className="line1">
                                  <p>Nurse</p>
                                  <p className="light">{post.UANurse}</p>
                                </p>
                                <br />
                              </div>
                              <a href="#" className="icon2">
                                <IconContext.Provider
                                  value={{
                                    className: "shared-class",
                                    size: 25,
                                  }}
                                >
                                  <>
                                    <div className="cgnotes">
                                      <p>
                                        <CgNotes />
                                      </p>
                                      <p>&nbsp;note</p>
                                    </div>
                                  </>
                                </IconContext.Provider>
                              </a>
                            </div>
                          </ol>
                          <ol className="appointment">
                            <div className="outer">
                              <p className="line">
                                <p className="number">{post.UADate}</p>
                                <p className="light">{post.UATime}</p>
                              </p>
                              <div className="grid1">
                                <p className="line">
                                  <p>Treatment</p>
                                  <p className="light">{post.UATreatment}</p>
                                </p>
                                <p className="line1">
                                  <p>Dentist</p>
                                  <p className="light">{post.UADentist}</p>
                                </p>
                                <p className="line1">
                                  <p>Nurse</p>
                                  <p className="light">{post.UANurse}</p>
                                </p>
                              </div>
                              <a href="#" className="icon2">
                                <IconContext.Provider
                                  value={{
                                    className: "shared-class",
                                    size: 25,
                                  }}
                                >
                                  <>
                                    <div className="cgnotes">
                                      <p>
                                        <CgNotes />
                                      </p>
                                      <p>&nbsp;note</p>
                                    </div>
                                  </>
                                </IconContext.Provider>
                              </a>
                            </div>
                          </ol>
                        </div>
                      </div>
                    ) : (
                      <div className="profile1">
                        <div className="inner">
                          <ol className="appointment">
                            <div className="head">
                              <p>Root Canal Treatment</p>
                              <div class="btn-group dropup treat">
                                <button
                                  type="button"
                                  class="btn bttn"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <IconContext.Provider
                                    value={{
                                      className: "shared-class",
                                      size: 30,
                                    }}
                                  >
                                    <>
                                      <div className="icon2">
                                        <RiArrowDropUpLine />
                                        Show Previous Treatment
                                      </div>
                                    </>
                                  </IconContext.Provider>
                                </button>
                                <ul class="dropdown-menu">
                                  <li>kihbg</li>
                                  <li>fdgfc</li>
                                </ul>
                              </div>
                            </div>
                            <div className="outer">
                              <p className="line">
                                <p className="number">{post.PADate}</p>
                                <p className="light">{post.PATime}</p>
                              </p>
                              <div className="grid1">
                                <p className="line">
                                  <p>Treatment</p>
                                  <p className="light">{post.PATreatment}</p>
                                </p>
                                <p className="line1">
                                  <p>Dentist</p>
                                  <p className="light">{post.PADentist}</p>
                                </p>
                                <p className="line1">
                                  <p>Nurse</p>
                                  <p className="light">{post.PANurse}</p>
                                </p>
                                <br />
                              </div>
                              <a href="#" className="icon2">
                                <IconContext.Provider
                                  value={{
                                    className: "shared-class",
                                    size: 25,
                                  }}
                                >
                                  <>
                                    <div className="cgnotes">
                                      <p>
                                        <CgNotes />
                                      </p>
                                      <p>&nbsp;note</p>
                                    </div>
                                  </>
                                </IconContext.Provider>
                              </a>
                            </div>
                          </ol>
                          <ol className="appointment">
                            <div className="outer">
                              <p className="line">
                                <p className="number">{post.PADate}</p>
                                <p className="light">{post.PATime}</p>
                              </p>
                              <div className="grid1">
                                <p className="line">
                                  <p>Treatment</p>
                                  <p className="light">{post.PATreatment}</p>
                                </p>
                                <p className="line1">
                                  <p>Dentist</p>
                                  <p className="light">{post.PADentist}</p>
                                </p>
                                <p className="line1">
                                  <p>Nurse</p>
                                  <p className="light">{post.PANurse}</p>
                                </p>
                              </div>
                              <a href="#" className="icon2">
                                <IconContext.Provider
                                  value={{
                                    className: "shared-class",
                                    size: 25,
                                  }}
                                >
                                  <>
                                    <div className="cgnotes">
                                      <p>
                                        <CgNotes />
                                      </p>
                                      <p>&nbsp;note</p>
                                    </div>
                                  </>
                                </IconContext.Provider>
                              </a>
                            </div>
                          </ol>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div class="container-md">
                  <div className="doctor1">
                    <p className="heading">Files/Documents</p>
                    <a href="#" className="link">
                      <MdOutlineNoteAdd />
                      Add Files
                    </a>
                  </div>
                  <div className="files">
                    <div className="url">
                      <MdOutlineNote />
                      &nbsp; {post.files} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      <RiDeleteBin6Line /> <HiDownload /> 123kb
                    </div>
                    <div className="url">
                      <MdOutlineNote />
                      &nbsp; {post.files1} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp;
                      <RiDeleteBin6Line /> <HiDownload /> 123kb
                    </div>
                    <div className="url">
                      <MdOutlineNote />
                      &nbsp; {post.files2} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp;
                      <RiDeleteBin6Line /> <HiDownload /> 123kb
                    </div>
                    <div className="url">
                      <MdOutlineNote />
                      &nbsp; {post.files3} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; <RiDeleteBin6Line /> <HiDownload /> 87kb
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Patient;
