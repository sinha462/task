import React from "react";
import "./App.css";
import { GiSpeedometer } from "react-icons/gi";
import { BiCalendar, BiMessageRoundedDetail } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GoSettings } from "react-icons/go";
import { IconContext } from "react-icons";
import Sidebar from "./Sidebar";

class PatientList extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Please wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <Sidebar/>
        <div className="grid">
          <div class="container">
            {items.map((item) => (
              <ol key={item.id}>
                <div className="profile">
                  <p className="name">{item.name}</p>
                  <p className="light">{item.name}@example.com</p>
                </div>
              </ol>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PatientList;
