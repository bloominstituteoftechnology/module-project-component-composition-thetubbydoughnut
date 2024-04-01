import React from "react"
import Figure from "./Figure"
import styled, { keyframes } from 'styled-components'


const kf = keyframes`
  from {
    transform: scale(.5) rotate(180deg);
    background-color: lightgrey;
    opacity: 0;
    transition: background-color 1s ease-in-out 0s;
  }
  to {
    transform: scale(1)
  }
`

const StyledCard = styled.div`
  border: 1px solid grey;
  padding: 0;

  h2{
    color: ${pr => pr.$color};
    margin: 0 0 1rem 0;
    align-content: center;
    border: 1px solid ;
    border-bottom-color: white;
    animation: ${kf} 2s ease-in-out forwards;
  }

  p{
    margin: 0 0 1rem 0;
    background-color: #515983;
    text-shadow: 2px 2px 4px black;
    &::first-line {
      font-size:2em;
    }
    animation: ${kf} 2s ease-in-out forwards;
  }

  img{
    border: 1px solid grey;
    margin: 0 0 1rem 0;
    animation: ${kf} 1.5s ease-in-out forwards;
  }
`
export default function Card({ title, text, imageURL, date}) {
    return (
    <StyledCard $color='' className='card'>
      <h2>{title}</h2>
      <p>{text}</p>
      <Figure 
      imageURL={imageURL}
      caption={date}
      />
    </StyledCard>
    )
  }