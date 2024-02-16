import data from "./data.json";
import "./table.css";
import priceTag from "./icons/priceTag.png";
import file from "./icons/file.png";
import stock from "./icons/stock.png";
import moneyLow from "./icons/moneyLow.png";
import moneyHigh from "./icons/moneyHigh.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
export default function SuiteTable() {
  return (
    <div className="previewContainer">
      {data &&
        data.map((row) => {
          return (
            <Accordion className="previewRow" disableGutters>
              <AccordionSummary classes={{ expanded: "expnd" }}>
                <div className="previewCol name">
                  <img className="nameIcon" src={priceTag} />
                  <span className="colValue">{row.name}</span>
                </div>
                <div className="previewCol quantity">
                  <img className="quantityIcon" src={file} />
                  <span className="colValue">{row.quantity}</span>
                </div>
                <div className="previewCol gross">
                  <img className="grossIcon" src={stock} />
                  <span
                    className={
                      row.eval && row.eval === "Low Risk"
                        ? "colValue grossGreen"
                        : "colValue grossRed"
                    }
                  >
                    {row.gross}
                  </span>
                </div>
                <div className="previewCol eval ">
                  <img
                    className="evalIcon"
                    src={
                      row.eval && row.eval === "Low Risk" ? moneyLow : moneyHigh
                    }
                  />
                  <span className="colValue">{row.eval}</span>
                </div>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: "black" }}>
                $TSLA just announced an acquisition of $NFLX at $200 B. <br />
                This is an arbitrage opportunity, with the max gain being %X if
                the deal closes, but the possible risk is %Y if the deal fails,
                If the deal success is % and therefore the recommended play is
                long/short $ABC
              </AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
}
