import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import {FaHome} from "react-icons/fa";
import {GiWeightLiftingUp} from "react-icons/gi";
import {HiOutlineClipboardList} from "react-icons/hi";
import {FiLogOut} from "react-icons/fi";
import {BsFillPersonLinesFill} from "react-icons/bs";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "#683C20" }}><b>Wisecarver.io</b>
          </Link>
        </li>
        <li>
          <Link to="/">
            <button className="btn">
              <FaHome size="3em" /> Home
            </button>
          </Link>
        </li>
        <li>
          <Link to="/addworkout">
            <button className="btn">
              <GiWeightLiftingUp size="3em" />
              Add Workout
            </button>
          </Link>
        </li>
        <li>
          <Link to="/socialfeed">
            <button className="btn">
              <BsFillPersonLinesFill size="3em" />
              Data
            </button>
          </Link>
        </li>
        <li>
          <Link to="/workouthistory">
            <button className="btn">
              <HiOutlineClipboardList size="3em" />
              <span>History</span>
            </button>
          </Link>
        </li>
        <li>
          {user ? (
            <button className="btn" onClick={logoutUser}>
              <FiLogOut />
            </button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
