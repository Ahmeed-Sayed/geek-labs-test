// // import React from "react";
// // import data from "./data.json";
// // import "./table.css";
// // import logo from "../Navbar/logo.png";
// // export default function SuiteTable() {
// //   return (
// //     <>
// //       <main className="dataContainer">
// //         {data.map((row) => {
// //           return (
// //             <div className="dataRow" key={row.id}>
// //               <div className="name col">
// //                 <img src={logo} width={32.71} height={30.22} />
// //                 <span>{row.name}</span>
// //               </div>
// //               <div className="quantity Col">
// //                 <img src={logo} width={32.71} height={30.22} />
// //                 <span>{row.quantity}</span>
// //               </div>
// //               <div className="gross col">
// //                 <img src={logo} width={32.71} height={30.22} />
// //                 <span
// //                   className={
// //                     row.eval && row.eval === "High Risk"
// //                       ? "highRisk"
// //                       : "lowRisk"
// //                   }
// //                 >
// //                   {row.gross}
// //                 </span>
// //               </div>
// //               <div className="eval col">
// //                 <img src={logo} width={32.71} height={30.22} />
// //                 <span>{row.eval}</span>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </main>
// //     </>
// //   );
// // }

// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import "./table.css";
// import data from "./data.json";
// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];1

// export default function SuiteTable() {
//   return (
//       <TableContainer component={Paper} sx={{maxWidth: "846.23px",maxHeight:"734px"}}>
//         <Table  aria-label="simple table">
//           <TableBody>
//             {data.map((row) => (
//               <TableRow key={row.id}  sx={{backgroundColor:"green"}}>
//                 <TableCell align="center">{row.name}</TableCell>
//                 <TableCell align="center">{row.quantity}</TableCell>
//                 <TableCell align="center">{row.gross}</TableCell>
//                 <TableCell align="center">{row.eval}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//   );
// }

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
