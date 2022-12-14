import React from "react";

const Game = () => {

        function Square(props) {
            return (
                <button
                className="square"
                onClick={ props.onClick}
                >
                {props.value}
                </button>
            );
        }

    class Board extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                squares: Array.apply(0).fill(null),
                xIsNext: true,
            };
        }

        handleClick(i){
            const history = this.props.history.slice(0, this.state.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            if(calculateWinner(squares) || squares[i]){
                return;
            }
            squares[i] = this.state.xIsNext ? 'X' : 'O';
            this.setState({
                squares: squares,
                xIsNext: !this.state.xIsNext
            });
        }

        renderSquare(i){
            return (
            <Square
            value={this.state.squares[i]}
            onClick = {()=> this.handleClick(i)}
            />
            );
        }
        render(){
            const winner = calculateWinner(this.state.squares);
            let status;
            if(winner){
                status = 'Winner: ' + winner.name;
            }else{
                status = `Next Player: ${this.state.xIsNext ? 'X' : 'O' }`
            }
            
            return(
                <div>
                    <div className="status">{status}</div>
                    <div className="center-item">
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                    </div>
                </div>
            );
        }
    }

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

  return (
    <div className="Game">
        <div className="game-board center-item">
          <Board />
        </div>
        <div className="game-info">
            
        </div>
    </div>
  )




}

export default Game