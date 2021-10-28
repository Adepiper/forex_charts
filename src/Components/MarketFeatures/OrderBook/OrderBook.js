import React from "react";
import PriceTable from "../PriceTable/PriceTable";
import "./OrderBook.css";

const OrderBook = () => {
  return (
    <div className="order-book">
      <h1 className="me-auto px-2">Order Book</h1>
      <div className="dropdown ms-auto mx-2">
        <a
          className="btn dropdown-toggle"
          href="/"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          0.01
        </a>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a className="dropdown-item" href="/">
              0.1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              1
            </a>
          </li>
        </ul>
      </div>
      <PriceTable pColor="red" value="0.34455" length={6} />
      <PriceTable pColor="lightgreen" value="0.0004455" length={6} />
    </div>
  );
};

export default OrderBook;
