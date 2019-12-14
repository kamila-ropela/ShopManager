import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "../Menu.css";

const MenuItem = ({ cube }) => {
  return (
    <Link to={"/" + cube.itemName} class="link">
      <div class="menuItem">{cube.itemName}</div>
    </Link>
  );
};

export default MenuItem;
