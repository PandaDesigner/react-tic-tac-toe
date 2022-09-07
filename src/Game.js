import React from "react";
const Game = () => {
    class Square extends React.Component {
        render(){
            return (
                <button className="square">
                    {this.props.value}
                </button>
            );
        }
    }

    class Board extends React.Component {
        renderSquare(i){
            return <Square value={i}/>;
        }
        render(){
            const status = 'Next Player: X';
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