import React from 'react'
import ReactDOM from 'react-dom/client'
import Badge from './components/Badge/Badge'
import badges from './components/Badge/badges'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import TestimonialWithImage from './components/Testimonial/TestimonialWithImage'
import Testimonial from './components/Testimonial/Testimonial'

function App() { 

  function getBadgeElements(variant) {
    return badges.map(badge => 
      <Badge key={`${variant}-${badge.schema}`} variant={variant} color={badge.schema} />)
  }

  return (
    <>
      <h1>React Component Library</h1>
      <div className='badges'>
        <h2>Badges</h2>
        <div className='square-badges'>
          <h3>Square</h3>
          {getBadgeElements('square')}
        </div>
        <div className='pill-badges'>
          <h3>Pill</h3>
          {getBadgeElements('pill')}
        </div>
      </div>
      <div className='banners'>
      <h2>Banners</h2>
        <h3 className='banners-multi-line'>Multi line</h3>
        <h3>Single line</h3>
        <h4>Success</h4>
        <Banner variant='multi-line' status='success'/>
        <Banner variant='single-line' status='success'/>
        <h4>Warning</h4>
        <Banner variant='multi-line' status='warning'/>
        <Banner variant='single-line' status='warning'/>
        <h4>Error</h4>
        <Banner variant='multi-line' status='error'/>
        <Banner variant='single-line' status='error'/>
        <h4>Neutral</h4>
        <Banner variant='multi-line' status='neutral'/>
        <Banner variant='single-line' status='neutral'/>
      </div>
        <h2 className='cards-h2'>Cards</h2>
      <div className='cards'>
        <Card />
        <Card />
      </div>
      <div className='testimonials'>
        <h2>Testimonials</h2>
        <h3>With pic</h3>
        <TestimonialWithImage />
        <h3>No pic</h3>
        <Testimonial />
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
