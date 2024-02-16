import React from "react";
import HealthCare from "../../icons/healthCare.svg?react";
import { makeStyles } from "@mui/styles";
import Materials from "../../icons/material.svg?react";
import Energy from "../../icons/energy.svg?react";
import ConsumerDiscrete from "../../icons/consumerDiscrete.svg?react";
import ConsumerStaples from "../../icons/consumerStaples.svg?react";
import RealState from "../../icons/realState.svg?react";
import It from "../../icons/it.svg?react";
import Communication from "../../icons/communication.svg?react";
import Industrials from "../../icons/industrials.svg?react";
import Utilities from "../../icons/utilities.svg?react";
import Financials from "../../icons/financials.svg?react";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./industryFilters.css";

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

export default function IndustryFilters({ addFilter }) {
  const classes = useStyles();

  const industryFilters = [
    { id: 9283461, icon: HealthCare, name: "Health Care" },
    { id: 9283462, icon: It, name: "IT" },
    { id: 9283463, icon: Materials, name: "Materials" },
    { id: 9283464, icon: Communication, name: "Communication" },
    { id: 9283465, icon: Energy, name: "Energy" },
    { id: 9283466, icon: Industrials, name: "Industrials" },
    { id: 9283467, icon: ConsumerDiscrete, name: "Consumer Discretionary" },
    { id: 9283468, icon: Utilities, name: "Utilites" },
    { id: 9283469, icon: ConsumerStaples, name: "Consumer Staples" },
    { id: 92834610, icon: Financials, name: "Financials" },
    { id: 92834611, icon: RealState, name: "Real State" },
  ];

  return (
    <div className={classes.root}>
      <Accordion
        sx={{
          backgroundColor: "#202020",
          boxShadow: 0,
        }}
        defaultExpanded={true}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.summary}
        >
          <Typography
            sx={{ fontFamily: "Poppins", fontWeight: "700", color: "white" }}
            fontSize={"14px"}
          >
            Industry
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ marginLeft: "37px" }}>
          <Grid container spacing={2} sx={{ backgroundColor: "#202020" }}>
            {industryFilters.map((filter) => (
              <Grid
                item
                xs={12}
                md={6}
                key={filter.id}
                className="industryFiltersCol"
              >
                <div
                  className="gridItemContent"
                  onClick={() => addFilter(filter)}
                >
                  <filter.icon className="filterItemIcon" />
                  <span className="filterItemName">{filter.name} </span>
                </div>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
