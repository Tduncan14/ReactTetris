import {useState,useeffect} from 'react';
import {createStage} from '../gameHelpers';


export const useStage = (player,resetPlayer) => {
     const [stage,setStage] = useState(createStage());

     useEffect(() =>{
      
       const updateStage = prevStage =>{

          // first clear stage from previous render

          const newStage = prev.Stage.map(row => row.map(cell =>(cell[i] === 'clear' ? [0,'clear'] : cell))
          )
          // then draw  new tetromino

       };   

       setStage(prev => updateStage(prev))


     },[]);

     return[stage,setStage];
}