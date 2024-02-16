import React from "react";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./marketRisk.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "23px",
    backgroundColor: "#202020",
  },
  summary: {
    flexDirection: "row-reverse",
    padding: "0px !important",
    fontFamily: "Poppins",
    color: "white",
  },
}));

export default function MarketRiskFilters() {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const marketCap = [
    { id: 1, name: "Micro" },
    { id: 2, name: "Small" },
    { id: 3, name: "Large" },
  ];
  const riskLevel = [
    { id: 1, name: "Low Risk" },
    { id: 2, name: "Mid Risk" },
    { id: 3, name: "High Risk" },
  ];
  return (
    <Grid container spacing={2} sx={{ backgroundColor: "#202020" }}>
      <Grid item xs={12} md={6} className="evalFiltersCol">
        <Accordion
          sx={{ bgcolor: "#202020", color: "white", boxShadow: 0 }}
          defaultExpanded={true}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className={classes.summary}
          >
            <Typography
              sx={{ fontFamily: "Poppins", fontWeight: "700" }}
              fontSize={"14px"}
            >
              Market Cap
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
            <RadioGroup
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              {marketCap &&
                marketCap.map((item) => (
                  <div key={item.id} className="gridItemContent">
                    <FormControlLabel
                      value={item.name}
                      control={<Radio />}
                      label={item.name}
                    />
                  </div>
                ))}
            </RadioGroup>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={12} md={6} className="evalFiltersCol">
        <Accordion
          sx={{ bgcolor: "#202020", color: "white", boxShadow: 0 }}
          defaultExpanded={true}
        >
          <AccordionSummary
            className={classes.summary}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography
              sx={{ fontFamily: "Poppins", fontWeight: "700" }}
              fontSize={"14px"}
            >
              Risk Level
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
            <RadioGroup
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              {riskLevel &&
                riskLevel.map((item) => (
                  <div key={item.id} className="gridItemContent">
                    <FormControlLabel
                      value={item.name}
                      control={<Radio />}
                      label={item.name}
                    />
                  </div>
                ))}
            </RadioGroup>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}
