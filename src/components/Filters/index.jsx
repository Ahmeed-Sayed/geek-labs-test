import "./filters.css";
import IndustryFilters from "./components/IndustryFilters";
import MarketRiskFilters from "./components/MarketRiskFilters";
import StrategyAssetFilters from "./components/StrategyAssetFilters";
import Button from "@mui/material/Button";
import { Box, Grid, Typography } from "@mui/material";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import X from "./x.svg?react";
export default function Filters() {
  const [filtersSet, setFiltersSet] = useState(new Set());

  const addFilter = (filter) => {
    if (
      ![...filtersSet].some((existingFilter) => existingFilter.id === filter.id)
    ) {
      setFiltersSet((prevState) => {
        const newSet = new Set(prevState);
        newSet.add(filter);
        return newSet;
      });
    }
  };
  const removeFilter = (filter) => {
    const newFiltersSet = new Set(filtersSet);
    newFiltersSet.delete(filter);
    setFiltersSet(newFiltersSet);
  };
  return (
    <>
      <div className="filtersContainer">
        <span className="filtersHeaderText">Filters </span>

        <div className="appliedFiltersContainer">
          <div className="appliedFiltersHeader">
            <span>Filters Applied</span>
            <span
              className="clearFilters"
              onClick={() => setFiltersSet(new Set())}
            >
              Clear All
            </span>
          </div>
          <div className="appliedFiltersContent">
            <Grid
              container
              gap={1}
              sx={{
                padding: "9px 7px",
              }}
            >
              {Array.from(filtersSet).map((filter) => (
                <Grid
                  item
                  key={filter}
                  sx={{
                    backgroundColor: "#53ACFF",
                    fontSize: "11px",
                    fontWeight: 400,
                    pl: "6px",
                    pr: "3px",
                    lineHeight: "18px",
                    borderRadius: "5px",
                    color: "black",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <span>{filter.name}</span>
                  <X
                    onClick={() => removeFilter(filter)}
                    className="deleteIcon"
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#202020",
            marginTop: "16px",
            borderRadius: "7px",
            paddingBottom: "27px",
          }}
        >
          <Box sx={{ padding: "8px 16px", mr: "32px" }}>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 700,
                lineHeight: "32px",
                letterSpacing: "0px",
                width: "fit-content",
                fontFamily: "Poppins",
              }}
            >
              Stock
            </Typography>
            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton sx={{ color: "#6B6B6B" }}>
                      <SearchIcon fontSize="13px" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              placeholder="$ TICKER"
              sx={{
                backgroundColor: "#313131",
                borderRadius: "5px",
                ml: "6px",
                width: "100%",
                fontSize: "13px",
                padding: 0,
                "& input": {
                  padding: "7px",
                  paddingLeft: "7px",
                  color: "white",
                },
                "& input::placeholder": {
                  fontFamily: "Poppins",
                  fontSize: "13px",
                },
              }}
            />
          </Box>
          <div className="Ind-filters">
            <IndustryFilters addFilter={addFilter} />
          </div>
          <div className="MR-filters">
            <MarketRiskFilters />
          </div>
          <div className="SA-filters">
            <StrategyAssetFilters />
          </div>
        </div>
        <Box textAlign="center" sx={{ mt: "18px" }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#53ACFF",
              width: "fit-content",
              mt: "26px",
              textAlign: "center",
              color: "white",
              "&:hover": {
                bgcolor: "#3C8DDE",
              },
              "&:active": {
                bgcolor: "#3073C8",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
                mx: "50px",
                my: "7px",
              }}
            >
              Apply
            </Typography>
          </Button>
        </Box>
      </div>
    </>
  );
}
