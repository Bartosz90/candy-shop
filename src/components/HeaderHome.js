import React from "react";
import "../styles/home.sass";

const spans = [
  { letter: "c", id: 1, delay: 0.3, bgc: "#e4508f" },
  { letter: "a", id: 2, delay: 0.8, bgc: "#ff8364" },
  { letter: "n", id: 3, delay: 0.4, bgc: "#e4508f" },
  { letter: "d", id: 4, delay: 0, bgc: "#ff8364" },
  { letter: "y", id: 5, delay: 0.6, bgc: "#e4508f" },
  { letter: "s", id: 6, delay: 0.5, bgc: "#ff8364" },
  { letter: "h", id: 7, delay: 0.1, bgc: "#e4508f" },
  { letter: "o", id: 8, delay: 0.7, bgc: "#ff8364" },
  { letter: "p", id: 9, delay: 0.2, bgc: "#e4508f" },
  { letter: "!", id: 10, delay: 0.9, bgc: "#ff8364" }
];
const fontColors = [
  "#72d6c9",
  "#ffc785",
  "#72d6c9",
  "#484c7f",
  "#60a9a6",
  "#ab93c9",
  "#b0deff",
  "#99ddcc",
  "#efca8c"
];

const HeaderHome = ({ animationDone }) => {
  const letters = spans.map(letter => {
    return (
      <span
        className="letter"
        key={letter.id}
        style={{
          animationDelay: `${
            animationDone ? letter.delay + 0.5 : letter.delay + 5
          }s`,
          color: `${
            fontColors[
              Math.floor(Math.random() * (fontColors.length - 1 - 0 + 1)) + 0
            ]
          }`,
          backgroundColor: `${letter.bgc}`
        }}
      >
        {letter.letter}
      </span>
    );
  });
  return <header className="home-header">{letters}</header>;
};

export default HeaderHome;
