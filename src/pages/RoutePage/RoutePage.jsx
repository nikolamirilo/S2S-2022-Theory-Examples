import React from "react";
import { Timer, Counter, ThemeMenu } from "../../components";

const RoutePage = (props) => {
  return (
    <div className="route-page">
      {props.type === "counter" ? (
        <Counter />
      ) : props.type === "timer" ? (
        <Timer />
      ) : props.type === "theme-menu" ? (
        <ThemeMenu />
      ) : null}
    </div>
  );
};

export default RoutePage;
