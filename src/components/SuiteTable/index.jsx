
import data from "./data.json";
import "./table.css";
import priceTag from "./icons/priceTag.png";
import file from "./icons/file.png";
import stock from "./icons/stock.png";
import moneyLow from "./icons/moneyLow.png";
import moneyHigh from "./icons/moneyHigh.png";
export default function SuiteTable() {
  return (
    <div className="previewContainer">
      {data &&
        data.map((row) => {
          return (
            <div className="previewRow" key={row.id}>
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
            </div>
          );
        })}
    </div>
  );
}
