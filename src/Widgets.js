import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("I'm Awesome", "Top News - 69 Readers")}
      {newsArticle("Corona Virus Updates", "Top News - 860 Readers")}
      {newsArticle("India wins against Australia", "Sports - 560 Readers")}
      {newsArticle("Tata launches Tigor", "Car News - 1000 Readers")}
      {newsArticle("React Learn", "Code - 445 Readers")}
    </div>
  );
}

export default Widgets;
