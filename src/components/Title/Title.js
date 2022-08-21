import React from "react";

function Title(props) {
  const { name } = props;

  return (
    <div className="title">
      <h2 className={"title__item"}>{name}</h2>
    </div>
  );
}

export default Title;
