import React from "react";
import { useParams } from "react-router-dom";

const CountryPage = ({ stoffe }) => {
  const { name } = useParams();

  // const country = stoffe.find((kalle) => console.log(kalle));

  // if (!country) {
  //   return <div>Country not found!</div>;
  // }

  return (
    <div>
      <h1>{name}</h1>
      {/* Render country information */}
    </div>
  );
};

export default CountryPage;
