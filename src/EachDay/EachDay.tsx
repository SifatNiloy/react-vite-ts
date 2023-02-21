import React from 'react'
import styled from 'styled-components';
const GreenColor= styled.button`
background:#2DA771;

`
const EachDay = () => {
  return (
    <div style={{color:'rgba(0, 0, 0, 0.5)'}}>
        <div className="day">
            <h3>Day</h3>
        </div>
        <div className="start-time">
            <h3>Start Time</h3>
        </div>
        <div className="end-time">
            <h3>End Time</h3>
        </div>
        <div className="total-hours">
            <h3>Total Number of hours</h3>
        </div>
    </div>
  )
}

export default EachDay