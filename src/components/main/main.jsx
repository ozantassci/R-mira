import React from 'react'
import './main.scss'
import CardContainer from './Cards/cardContainer'
import SeoText from './Typhography/seoText'
import VideoContainer from './Video/video'

const main = () => {
  return (
    <div >
      <VideoContainer />
      <SeoText  />
      <CardContainer />

    </div>
  )
}

export default main