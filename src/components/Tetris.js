import React,{useState} from 'react';

//components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

//custom hooks
import{usePlayer} from '../hooks/usePlayer';
import{useStage} from '../hooks/useStage';


// styles component
import {StyledTetrisWrapper,StyledTetris} from './styles/StyledTetris.js';


const Tetris = () => {
   
    const[droptime,setDropTime] = useState(null);
    const[gameOver,setGameOver] = useState(false);

    const[player] = usePlayer();
    const[stage,setStage] = useStage(player);
 console.log('re-render');

return(
    <StyledTetrisWrapper>
     <StyledTetris>
        <Stage stage={createStage()}/>
        <aside>
        <div>
            <Display text="Score"/>
            <Display text="Rows" />
            <Display text="Level"/>
        </div>
        <StartButton/>
        </aside>
        </StyledTetris>
    </StyledTetrisWrapper>
)
}

export default Tetris;