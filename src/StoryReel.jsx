import React from 'react'
import './StoryReel.css'
import Cena from '../src/Images/cena.webp'
import Mark from "../src/Images/Mark.webp"
import Brock from "../src/Images/brock.webp"
import Musk from "../src/Images/musk.webp"
import Bezos from "../src/Images/bezos.webp"
import Story from "../src/Story.jsx"

const StoryReel = () => {
  return (
    <div className='storyReel'>
         <Story image={Cena} profileSrc={Cena} title="John Cena"/>
         <Story image={Mark} profileSrc={Mark} title="Mark"/>
         <Story image={Brock} profileSrc={Brock} title="Brock Lesnar"/>
         <Story image={Musk} profileSrc={Musk} title="Elon Musk"/>
         <Story image={Bezos} profileSrc={Bezos} title="Jeff Bezos"/>
          
    </div>
  )
}

export default StoryReel