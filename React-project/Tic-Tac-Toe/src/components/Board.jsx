
import React, { useState } from "react";
import "./Board.css";
import Square from "./Square";
import ResetButton from "./ResetButton";
const Board = () => {

    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i){

        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if(xIsNext){
        nextSquares[i] = "X";
        }else{
        nextSquares[i] = "O";
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    const winner = calculateWinner(squares);
    let status;

    if(winner){
        status = 'winner: ' + winner;
    }
    else{
        status = 'next player: '+ (xIsNext ? 'X' : 'O');
    }


    function calculateWinner(squares){
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a,b,c] = lines[i];
            
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    }

    function onResetClick(){
        
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }

  return (
    <div className="board-container">
        <div className= "status" > {status}</div>
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() =>handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() =>handleClick(2)}/>
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() =>handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() =>handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() =>handleClick(5)}/>
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() =>handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() =>handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() =>handleClick(8)}/>
      </div>
      <div className="rest-btn">
      <ResetButton  onResetClick={onResetClick}/>
      </div>
    </div>
  );
};

export default Board;
