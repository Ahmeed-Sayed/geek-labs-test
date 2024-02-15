import { Typography } from "@mui/material";
import React, { useState } from "react";
import "./strategyAssetFilters.css";

export default function StrategyAssetFilters() {
  const componentsFilters = [
    {
      id: 1,
      name: "Strategy",
      data: [
        { id: 111, name: "Big Option Buys" },
        { id: 222, name: "Merger Arbitrage" },
        { id: 333, name: "Short Reports" },
      ],
    },
    {
      id: 2,
      name: "Asset",
      data: [
        { id: 444, name: "Stocks" },
        { id: 555, name: "Options" },
        { id: 666, name: "Futures" },
      ],
    },
  ];

  const [activeStrategyItem, setActiveStrategyItem] = useState(null);
  const [activeAssetItem, setActiveAssetItem] = useState(null);

  const handleItemClick = (id, type) => {
    if (type === "Strategy") {
      setActiveStrategyItem(activeStrategyItem === id ? null : id);
    } else if (type === "Asset") {
      setActiveAssetItem(activeAssetItem === id ? null : id);
    }
  };

  return (
    <div className="SA-container">
      {componentsFilters.map((col) => {
        return (
          <div className="SA-column" key={col.id}>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "700",
                lineHeight: "24px",
                fontFamily: "Poppins",
                pl: "15px",
                padding: "8px 16px 16px",
                mb: "7px",
              }}
            >
              {col.name}
            </Typography>
            <div className="SA-item-container">
              {col.data.map((item) => {
                const isActive =
                  (col.name === "Strategy" && activeStrategyItem === item.id) ||
                  (col.name === "Asset" && activeAssetItem === item.id);
                return (
                  <Typography
                    key={item.id}
                    className={`SA-item ${isActive ? "active" : ""}`}
                    onClick={() => handleItemClick(item.id, col.name)}
                  >
                    {item.name}
                  </Typography>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
