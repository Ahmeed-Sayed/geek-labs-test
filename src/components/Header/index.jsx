import { useState } from "react";
import searchIcon from "./icons/search.png";
import headerAlert from "./icons/headerAlert.png";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./header.css";
export default function Header() {
  const [searchInp, setSearchInp] = useState("");

  const handleChange = (e) => {
    setSearchInp(e.target.value);
  };
  return (
    <div className="headerContainer">
      <span className="headerText">Alerts</span>
      <input
        className="searchField"
        type="text"
        onChange={(e) => handleChange(e)}
        value={searchInp}
        placeholder="Search By..."
      />
      <div className="notification">
        <Badge
          badgeContent={5}
          color={"success"}
          sx={{ fontFamily: "Poppins" }}
        >
          <NotificationsIcon fontSize="large" />
        </Badge>
      </div>
    </div>
  );
}
