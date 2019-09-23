import React from 'react';
import {StyledCell}  from './styles/StyledCell.js';
import {TETROMINOS} from '../tetrominos';

const Cell = ({type}) =>(

<StyledCell type={'L'} color={TETROMINOS['L'].color}>&nbsp;</StyledCell>


)

export default Cell;