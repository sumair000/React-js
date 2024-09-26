import React from "react";
import './Board.css';
import Square from "./Square";
const Board = () => {
  return (
    <div className="board-container">
      <div>
       <Square />
       <Square />
       <Square />
      </div>
      <div>
      <Square />
      <Square />
      <Square />
      </div>
      <div>
      <Square />
      <Square />
      <Square />
      </div>
    </div>
  );
};

export default Board;
