import React, { useState } from 'react';

const Comp = () => {
  const [user, setUser] = useState('X');
  const [cells, setCells] = useState(Array(9).fill(''));

  const checkWinner = (squares) => {
    console.log('SQUARES', squares);
    const combos = {
      row: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      column: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        // console.log(pattern);
        console.log(
          squares[pattern[0]],
          squares[pattern[1]],
          squares[pattern[2]]
        );
        if (
          squares[pattern[0]] === '' ||
          squares[pattern[1]] === '' ||
          squares[pattern[2]] === ''
        ) {
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          console.log(
            'done',
            squares[pattern[0]],
            squares[pattern[1]],
            squares[pattern[2]]
          );
        }
      });
    }
  };

  const handleClick = (num) => {
    const squares = [...cells];

    if (squares[num] !== '') return alert('Already clicked');
    if (user === 'X') {
      setUser('O');
      squares[num] = 'X';
    } else {
      setUser('X');
      squares[num] = 'O';
    }
    setCells(squares);
    checkWinner(squares);
  };

  return (
    <div className="container">
      <h1>Current User: {user}</h1>
      <div className="row">
        <div className="square" onClick={handleClick.bind(null, 0)}>
          {cells[0]}
        </div>
        <div className="square" onClick={handleClick.bind(null, 1)}>
          {cells[1]}
        </div>
        <div className="square" onClick={handleClick.bind(null, 2)}>
          {cells[2]}
        </div>
      </div>
      <div className="row">
        <div className="square" onClick={handleClick.bind(null, 3)}>
          {cells[3]}
        </div>
        <div className="square" onClick={handleClick.bind(null, 4)}>
          {cells[4]}
        </div>
        <div className="square" onClick={handleClick.bind(null, 5)}>
          {cells[5]}
        </div>
      </div>
      <div className="row">
        <div className="square" onClick={handleClick.bind(null, 6)}>
          {cells[6]}
        </div>
        <div className="square" onClick={handleClick.bind(null, 7)}>
          {cells[7]}
        </div>
        <div className="square" onClick={handleClick.bind(null, 8)}>
          {cells[8]}
        </div>
      </div>
    </div>
  );
};

export default Comp;
