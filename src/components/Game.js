import React, { useState, useEffect, useRef } from 'react';
import Board from './Board';
import { calculateWinner } from '../Helper';
import { gsap } from "gsap";
import './Game.css';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null)) // state dlya doski
    const [xIsNext, setXIsNext] = useState(true) //kak hodit krestik
    const winner = calculateWinner(board) //pobeditel
    const handleClick = (index) => {
        const boardCopy = [...board]
        //opredelit bil li klik po yacheyke ili igra zakonchena
        if (winner || boardCopy[index] ) return 
        
        // opredelit chey hod X ? 0
        boardCopy[index] = xIsNext ? 'X' : '0'
        //obnovit nash state
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame =()=> {
        return(
            <button className='start_btn' onClick={ ()=> setBoard(Array(9).fill(null))}>Clear / New Game</button>
        )
    }
//
 

const boxRef = useRef();
// const text = "Let's play?" 
useEffect(() => {
  gsap.to(boxRef.current, {
    repeat: 1,
    color: "#FFD369",
    duration: 2.6,
    opacity: 0,
    scale: 1.5
  });
});

    return (
        <div className='wrapper'>
         
          <h1 className='game_info' ref={boxRef}>Let's play?</h1>
           <p  className='game_info'>
             {winner ? "Congratulations! Winner is "   + winner : "Next move :" + "" + (xIsNext ? '«X»' : '«0»')  } 

            </p>
            
            <Board squares={board} handleClick={handleClick}/>
            <p className='game_info'>
                  {/* {winner ? "Congratulations! Winner is " + " " + winner : "Next move :" + " " + (xIsNext ? '«X»' : '«0»')  } */}

               
             
            </p>
            {startNewGame()}
         
        </div>
    );
}

export default Game;
