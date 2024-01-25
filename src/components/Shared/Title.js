import React from "react";
import { useEffect } from "react";

const Title = ({ title }) => {
  useEffect(() => {
    document.title = title || "Streamify | Entertaiment meets Innovation";
  });

  return <></>;
};

export default Title;
