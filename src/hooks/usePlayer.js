import {useState,useCallback} from 'react';
import {STAGE_WIDTH} from '../gameHelpers';


import {randomTetromino} from '../tetrominos';

export const usePlayer = () =>{

       const [player, setPlayer] = useState({

        pos:{x:0,y:0},
        tetromino:randomTetromino().shape,
        collided:false
       })
 
    //    // short for this
    //   const playerState = useState();
    //   const player = playerState[0];
    //   const setPlayer = playerState[1]

    const updatePlayerPos = ({x,y,collided}) =>{

     setPlayer(prev => ({
         ...prev,
         pos:{x:(prev.pos.x += x), y:(prev.pos.y += y)},
         collided
     }))
    }

    const resetPlayer = useCallback(() => {
        setPlayer({
          pos: { x: STAGE_WIDTH / 2 - 2, y: 0  },
          tetromino: randomTetromino().shape,
          collided: false,
        });
      }, []);

    return [player,updatePlayerPos,resetPlayer ];
}