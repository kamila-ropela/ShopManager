import React from "react";
import MenuItem from "./item/MenuItem";
import IItem from "./IItem";
import MenuSubItem from "./subitem/MenuSubItem";

const Menu = () => {
  const cubes = [
    new IItem("Home"),
    new IItem("Products", ["All", "Magazine", "Shop"]),
    new IItem("Delivery"),
    new IItem("New Assortment"),
    new IItem("Management")
  ];
  const localization = "GDAŃSK";
  return (
    <>
      <h2 class="padding">{localization}</h2>
      {cubes.map(cube => (
        <>
          <MenuItem cube={cube} />
          <MenuSubItem cube={cube} />
        </>
      ))}
    </>
  );
};

export default Menu;
