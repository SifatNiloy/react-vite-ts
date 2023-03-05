import React from 'react'
import styled from 'styled-components';
const GreenColor= styled.button`
background:#2DA771;

`
const EachDayStyle = styled.div`
display:grid;
grid-template-columns:repeat(4, 1fr)
`
const SelectStyle = styled.select`
padding:10px 30px;
border-radius:10px;
border: 2px solid #C7F0DF;
color:#32A071;
`
const EachDay = () => {
  return (
      <EachDayStyle >
        <div className="day">
            <h3>Day</h3>
        </div>
        <div className="start-time">
            <h3>Start Time</h3>
              <SelectStyle name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
              </SelectStyle>
        </div>
        <div className="end-time">
            <h3>End Time</h3>
              <SelectStyle name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
              </SelectStyle>
        </div>
        <div className="total-hours">
            <h3>Total Number of hours</h3>
              <div>
                  <p>Hours</p>
              </div>
          </div>
      </EachDayStyle>
  )
}

export default EachDay