import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SuiteTable from "./components/SuiteTable";
import React, { useState } from "react";
import Filters from "./components/Filters";
function App() {
  const [activeTab, setActiveTab] = useState("Merger Arbitrage");

  const tabs = ["Big Option Buys", "Merger Arbitrage", "Short Reports"];

  return (
    <>
      {/* <Navbar /> */}
      <div
        className="appContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#202020",
        }}
      >
        <Header />
        <SuiteTable />
        <Filters />
       
      </div>
    </>
  );
}

export default App;
