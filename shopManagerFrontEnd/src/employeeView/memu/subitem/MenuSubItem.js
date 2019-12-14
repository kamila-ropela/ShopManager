import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "../Menu.css";

const MenuSubItem = ({ cube }) => {
  var subCubes = [];
  if (!(typeof cube.subitemName === "undefined")) {
    console.log(cube.subitemName);
    subCubes = cube.subitemName;

    return (
      <>
        {subCubes.map(subCube => (
          <Link to={"/" + cube.itemName + "/" + subCube} class="link">
            <div class="menuSubitem">{subCube}</div>
          </Link>
        ))}
      </>
    );
  }

  return <></>;
};

export default MenuSubItem;
