import React from 'react'
import styled from 'styled-components';
// import { <ReactComponent></ReactComponent>  } from '../../icons/down.svg'
import down from '../../icons/down.svg'
import EachDay from '../EachDay/EachDay'
const StyledButton= styled.button`
background:#C7F0DF;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;

font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;

`
const TimeTracker = () => {
  return (
    <div>
        {/* <Down/> */}
        {/* <img src={down} alt="" /> */}
        <h1 style={{'color': '#32A071'}}>Time Tracker</h1>
         {/* <h3 style={{'color': '#32A071'}}>Add New Date</h3> */}
         <StyledButton>Add New Date</StyledButton>
         
         <EachDay></EachDay>
    </div>
  )
}

export default TimeTracker