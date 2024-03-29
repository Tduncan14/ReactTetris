import React,{useState} from 'react';
import {createStage} from '../gameHelpers';
//components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

//custom hooks
import{usePlayer } from '../hooks/usePlayer';
import{useStage} from '../hooks/useStage';


// styles component
import {StyledTetrisWrapper,StyledTetris} from './styles/StyledTetris.js';


const Tetris = () => {
   
    const[droptime,setDropTime] = useState(null);
    const[gameOver,setGameOver] = useState(false);

    const[player,updatePlayerPos,resetPlayer] = usePlayer();
    const[stage,setStage] = useStage(player);
    
 console.log('re-render');

 const movePlayer = dir  => {

 

 }

 const startGame = () => {
   // Rest everything
   setStage(createStage());
   resetPlayer();

 }

 const drop = () => {
  updatePlayerPos({x:0,y:1,collided:false})

 }

 const dropPlayer = () =>{
    drop();

 }

 const move = ({ keyCode }) => {
  if (!gameOver) {
    if (keyCode === 37) {
      movePlayer(-1);
    } else if (keyCode === 39) {
      movePlayer(1);
    } else if (keyCode === 40) {
      dropPlayer();
    } else if (keyCode === 38) {
     
    }
  }
};
return(
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
     <StyledTetris>
        <Stage stage={stage}/>
        <aside>
            {gameOver ?(<Display gameOver={gameOver} text="GameOver" />) : (
        <div>
            <Display text="Score"/>
            <Display text="Rows" />
            <Display text="Level"/>
        </div>
        )}
        <StartButton callback={startGame}/>
        </aside>

        </StyledTetris>
    </StyledTetrisWrapper>
)
}

export default Tetris;