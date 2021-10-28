import React from "react";
import "./PriceTable.css";

const PriceTable = ({ pColor, value }) => {
  return (
    <div className="price-table">
      <thead>
        <th>lorem</th>
        <th>lorem</th>
        <th>lorem</th>
      </thead>
      <tbody style={{ borderColor: pColor }}>
        <div>
          <td style={{ color: pColor }}>{value}</td>
          <td>{value}</td>
          <td>{value}</td>
        </div>
        <div>
          <td style={{ color: pColor }}>{value}</td>
          <td>{value}</td>
          <td>{value}</td>
        </div>
        <div>
          <td style={{ color: pColor }}>{value}</td>
          <td>{value}</td>
          <td>{value}</td>
        </div>
        <div>
          <td style={{ color: pColor }}>{value}</td>
          <td>{value}</td>
          <td>{value}</td>
        </div>
        <div>
          <td style={{ color: pColor }}>{value}</td>
          <td>{value}</td>
          <td>{value}</td>
        </div>
        <div>
          <td style={{ color: pColor }}>{value}</td>
          <td>{value}</td>
          <td>{value}</td>
        </div>
      </tbody>
    </div>
  );
};

export default PriceTable;
