import React from "react"
import styled from "styled-components"

const StyledFigure = styled.figure`
  max-width: 98%;

  figcaption{
    font-style: italic;
  }
`

export default function Figure({ imageURL, caption }) {
    return (
      <StyledFigure id="F">
        <img src={imageURL}></img>
        <figcaption>Awesome pic taken on {caption}</figcaption>
      </StyledFigure>
    )
  }