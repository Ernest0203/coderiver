import React from 'react';
import styled from 'styled-components';

const Label = ({ text, background }) => {
  return (
    <LabelWrapper>
      <div className="label" style={{background: background ? `${background}` : '#0474C8'}}>{text}</div>
    </LabelWrapper>     
  )
}

const LabelWrapper = styled.div`
  .label {
    display: inline-block;
    border-radius: 5px;
    color: #fff;
    height: 19px;
    line-height: 19px;
    font-family: 'Proxima Nova Bold';
    font-size: 10px;
    padding: 0 6px;
    text-transform: uppercase;
  }
`

export default Label;