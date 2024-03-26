import React from "react"

export default function Figure({ imageURL, caption }) {
    return (
      <figure id="F">
        <img src={imageURL}></img>
        <figcaption>Awesome pic taken on {caption}</figcaption>
      </figure>
    )
  }