import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "News",
    "Live",
    "Music",
    "Rockets",
    "javaScript",
    "Test Cricket",
    "PhotoGraphy",
    "T-Series",
  ];
  return (
    <div className="flex">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
