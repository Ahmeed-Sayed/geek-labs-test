import { useState } from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, IconButton } from "@mui/material";
export default function Header() {
  const [searchInp, setSearchInp] = useState("");

  const handleChange = (e) => {
    setSearchInp(e.target.value);
  };
  return (
    <div className="headerContainer">
      <span className="headerText">Alerts</span>
      <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton sx={{ color: "#6B6B6B" }}>
                <SearchIcon fontSize="15px" />
              </IconButton>
            </InputAdornment>
          ),
        }}
        placeholder="Search By..."
        sx={{
          backgroundColor: "#313131",
          borderRadius: "5px",
          ml: "6px",
          my: "7px",
          width: "100%",
          height: "100%",
          fontSize: "15px",
          "& input": {
            padding: "7px",
            paddingLeft: "7px",
            color: "white",
          },
          "& input::placeholder": {
            fontFamily: "Poppins",
            fontSize: "15px",
          },
        }}
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
