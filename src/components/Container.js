import React from "react";

function Container({
  header,
  children,
  textPosition = "", // possible values: left, right, center
  direction = "horizontal", // possible values: vertical, horizontal
  contentPosition = "center", // possible values: left, right, center
}) {
  return (
    <div className={`container ${textPosition}`}>
      <div className={`container ${contentPosition} ${textPosition}`}></div>
      {header ? <h2>{header}</h2> : null}

    
      <div className={`container-children ${direction} ${contentPosition}`}>
      <div
        className={`container-children ${direction} ${direction} ${contentPosition}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Container;
