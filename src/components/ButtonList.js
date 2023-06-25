import React from "react";
import { ButtonHeader } from "../utils/Constant";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      {ButtonHeader.map((button, id) => {
        return <Button key={id} name={button} />;
      })}
    </div>
  );
};

export default ButtonList;
