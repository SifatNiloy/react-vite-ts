import React from 'react'
import StyledButton from '../component/Button/Button'
// import { <ReactComponent></ReactComponent>  } from '../../icons/down.svg'
import down from '../../icons/down.svg'
import EachDay from '../EachDay/EachDay'

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