import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'



const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
  const [apod, setApod] = useState()

  

  

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
      .then(res => {
      console.log(res.data)
      })
      .catch(err => console.error(err))
    }
    //  fetchPhoto()
    setApod({
        "date": "2024-03-26",
        "explanation": "Comet Pons-Brooks has quite a tail to tell.  First discovered in 1385, this erupting dirty snowball loops back into our inner Solar System every 71 years and, this time, is starting to put on a show for deep camera exposures.  In the featured picture, the light blue stream is the ion tail which consists of charged molecules pushed away from the comet's nucleus by the solar wind.  The ion tail, shaped by the Sun's wind and the comet's core's rotation, always points away from the Sun.  Comet 12P/Pons–Brooks is now visible with binoculars in the early evening sky toward the northwest, moving perceptibly from night to night.  The frequently flaring comet is expected to continue to brighten, on the average, and may even become visible with the unaided eye --  during the day -- to those in the path of totality of the coming solar eclipse on April 8.",
        "hdurl": "https://apod.nasa.gov/apod/image/2403/CometPons_Peirce_5119.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "Comet Pons-Brooks' Ion Tail",
        "url": "https://apod.nasa.gov/apod/image/2403/CometPons_Peirce_1080.jpg"
      })
  }, [])
  if (!apod) return 'Fetching Photo of the Day...'

  return (
    <section>
      <Card 
      title={apod.title} 
      text={apod.explanation} 
      imageURL={apod.url} 
      date={apod.date} />
    </section>
  )
}

export default App
