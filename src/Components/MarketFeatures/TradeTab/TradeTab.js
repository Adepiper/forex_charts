import React from "react";
import "./TradeTab.css";

const TradeTab = () => {
  return (
    <div className="trade-tab">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">
            Lorem
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="/">
            Lorem
          </a>
        </li>
      </ul>
      <div className="dropdown ms-auto mx-2">
        <a
          className="btn dropdown-toggle"
          href="/"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          20x
        </a>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a className="dropdown-item" href="/">
              10x
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              5x
            </a>
          </li>
        </ul>
      </div>
      <form>
        <div className="form-group">
          <label className="label">
            From : <span>USDT</span>
          </label>
          <input type="text" placeholder="0.00"></input>
        </div>
        <div className="form-group">
          <label className="label">To</label>
          <input type="text" placeholder="0.00"></input>
        </div>
      </form>
    </div>
  );
};

export default TradeTab;
