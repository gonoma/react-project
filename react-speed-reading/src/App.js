import React, { useState } from "react";

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.`;

//Make it interactive as well!! let the user choose the number of fixation points etc...
//and with dynamic css so that the page updated to the user needs/customizations.

function App() {
  const [fixationPoints, setFixationPoints] = useState(3);
  const [wordsPerLine, setWordsPerLine] = useState(12);

  const wordsArray = text.split(" ");

  //Try and make it dynamic, i.e. you know per line how many words there are,
  //based on n fixation points, divide the line in n fadeable segments.

  const startReadingHandler = () => {
    //Take a line, and based on n fixation points, make the segments disappear
  };

  return (
    <div className="App">
      <p>{text}</p>
      <button onClick={startReadingHandler}>Start</button>
    </div>
  );
}

export default App;
