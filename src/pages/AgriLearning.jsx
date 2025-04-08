import React, { useEffect, useState } from "react";
import AgriLearningCards from "../components/AgriLearningCards";

const AgriLearning = () => {
  const [agroTips, setAgroTips] = useState([]);
  useEffect(() => {
    fetch("/agri.json")
      .then((res) => res.json())
      .then((data) => setAgroTips(data));
  }, []);
  return (
    <div className="container mx-auto my-5">
      <div className="md:grid grid-cols-3 gap-4">
        {agroTips.map((agroTip, index) => (
          <AgriLearningCards key={index} agroTip={agroTip}></AgriLearningCards>
        ))}
      </div>
    </div>
  );
};

export default AgriLearning;
