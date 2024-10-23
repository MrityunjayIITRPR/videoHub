import React from "react";
import Videocontainer from "./Videocontainer";
import ButtonList from "./ButtonList";

const Maincontainer = () => {
  return (
    <div className="ml-10">
      <ButtonList />
      <Videocontainer />
    </div>
  );
};

export default Maincontainer;
