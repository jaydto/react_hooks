import React from 'react'
import Navbar from '../components/Navbar'
import Navigation2 from '../components/Navigation2'
import SlideShow from '../components/SlideShow'
import Table from '../data/Table'

const 
Messages = () => {
  return (
    <div>
        <Navbar/>
        
      <div className="work__container">
        <div className="work__container__item2 container">
          <div className="one">

          <SlideShow />
          </div>
          <div className="two">

          <Table />
          </div>
        </div>
        <div className="work__container__item1">
          <Navigation2 />
        </div>
      </div>
       
    </div>
  )
}

export default 
Messages