import React from 'react';
import {StyledCell}  from './styles/StyledCell.js';
import {TETROMINOS} from '../tetrominos';

const Cell = ({type}) =>(

d

<StyledCell type={type} color={TETROMINOS[type].color}>&nbsp;</StyledCell>


)

export default Cell;