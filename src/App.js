import React, { Component } from 'react';
import './App.css';
import render from 'react-dom'

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function Square(props) {
  return (
    <button className='square' onClick={this.setFilter.bind(this, 'green-shell')}>
      {props.value}
    </button>
    )
}

export class Board extends React.Component {

  constructor() {
    super();
    this.state = {
      squares: Array(16).fill(null),
      xIsNext: true,
    };
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} foo={() => this.handleClick(i)} />;
  }

  handleClick(i) {
    console.log("the value of i is:", i)
    this.state.squares[i].className
  }

  render() {

    return (
      <div className="square-box">
        <div className="status">{status}</div>
        <div>
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
        </div>
        <div>
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div>
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
        </div>
        <div>
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}   
        </div>
      </div>
    )
  }
}

export class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">

        </div>
      </div>
      );
  }
}





export default Board;
