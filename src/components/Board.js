import Square from './Square';
import './Style.css';
import {useState} from 'react'




 function Board(){

    //9 null element of array
  
     const[state, setState] = useState(Array(9).fill(null));
     const[isXTurn,setIsXturn] = useState(true);


     const checkWinner  = () => {
        const winnerLogic =[
            //winner posibility outcomes
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];


        for (let i = 0; i < winnerLogic.length; i++) {
            const [a, b, c] = winnerLogic[i];
            if (state[a] && state[a] === state[b] && state[a] === state[c]) {
              return state[a];
            }
          }
          return null;
        }



    //     for (let logic of winnerLogic) {
    //         const [a, b, c] = logic;
    //         if(state[a] !== null && state[a] === state[b]){
    //         // 
    //         return state[a];
    //     }
    //  } 
    //  return false;
    // }


    const isWinner = checkWinner();
    

    //  console.log("state", state);

    const handleClick = (index) => {
        // console.log("clicked on index ", index)

           //if player click on same move it will not alter
        if (state[index] !== null) {
            return;
        }
        //copying the state and using spread operator
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXturn(!isXTurn);

    };

   const reset = () => {
    setState(Array(9).fill(null));

   }

    return (



        <div className="board-frame">
            
{isWinner ? (  <> {isWinner} own game <button onClick={reset}>Play Again</button> </>
    ) : ( 
        <>
        <h3>Player {isXTurn ? "X" : "o" } Please click</h3>
            <div class="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]}/>
            <Square onClick={() => handleClick(2)} value={state[2]}/>
            </div>

            <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]}/>
            <Square onClick={() => handleClick(4)} value={state[4]}/>
            <Square onClick={() => handleClick(5)} value={state[5]}/>
            </div>

            <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]}/>
            <Square onClick={() => handleClick(7)} value={state[7]}/>
            <Square onClick={() => handleClick(8)} value={state[8]}/>
            </div>


    </>
    )}
    </div>
    );
 };


 export default Board;