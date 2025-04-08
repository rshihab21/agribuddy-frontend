import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AgriLearningDetails = () => {
  const { agriDetails } = useParams();
  const [agriDetail, setAgriDetail] = useState("");

  useEffect(() => {
    fetch("/agri.json")
      .then((res) => res.json())
      .then((data) => {
        setAgriDetail(data.find((doc) => doc.id === parseInt(agriDetails)));
      });
  }, [agriDetails]);

  return (
    <div className="container mx-auto my-8">
      <div className="flex flex-col">
        <img src={agriDetail.image_url} alt="" />
        <div className="flex gap-4">
          <p>
            <span className="font-semibold">Author:</span>
            {agriDetail.author}
          </p>
          <p>
            <span className="font-semibold">Comments:</span>
            {agriDetail.comments}
          </p>
        </div>
        <h2 className="text-3xl">{agriDetail.title}</h2>
        <p>{agriDetail.description}</p>
      </div>
    </div>
  );
};

export default AgriLearningDetails;
