import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SuiteTable from "./components/SuiteTable";
import React, { useState } from "react";
import Filters from "./components/Filters";
import { Grid } from "@mui/material";
function App() {
  const [activeTab, setActiveTab] = useState("Merger Arbitrage");

  const tabs = ["Big Option Buys", "Merger Arbitrage", "Short Reports"];

  return (
    <>
      {/* <Navbar /> */}
    
        <Grid container spacing={4} pl={15.75} >
          <Grid item md={8}>
            <Header />
            <SuiteTable />
          </Grid>
          <Grid item md={4} py={3.25}>
            <Filters />
          </Grid>
        </Grid>
    </>
  );
}

export default App;
