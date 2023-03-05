import React from 'react'
import StyledButton from '../component/Button/Button'
import { Styles } from '../component/Styles/AllStyles.styles'
// import { <ReactComponent></ReactComponent>  } from '../../icons/down.svg'
import down from '../../icons/down.svg'
import EachDay from '../EachDay/EachDay'

const TimeTracker = () => {
  return (
    <div>
      <Styles>
        {/* <Down/> */}
        {/* <img src={down} alt="" /> */}
        <h1 style={{ 'color': '#32A071' }}>Time Tracker</h1>
        {/* <h3 style={{'color': '#32A071'}}>Add New Date</h3> */}
        <StyledButton>Add New Date</StyledButton>

        <EachDay></EachDay>
      </Styles>
    </div>
  )
}

export default TimeTracker