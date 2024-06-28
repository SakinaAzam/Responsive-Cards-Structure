import React from "react";
import './IndustryCard.css'
import Card from "../Card/Card";
function IndustryCard() {
  return (
    <>
          <div className="MainCard">
              <p className="Heading">Industries</p>
              <div>
                  <Card/>
              </div>
      </div>
    </>
  );
}

export default IndustryCard;
