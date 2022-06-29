import React from 'react';
import Square from './Square';
import './Board.css';


const Board = ({squares, handleClick}) => {
    return (
        <div className='board'>
            {
                squares.map((square, index)=> (
                    <Square key={index} value={square} onClick={ ()=> handleClick(index) } />
                ))
            }
        
        </div>
    );
}

export default Board;
