import React from 'react'
import './styles/LocationInfo.css'

const LocationInfo = ({location}) => {
  return (
    <article className='header__info'> 
        <ul className='header__list'>
            <li><h3>Name:</h3><br></br>{location?.name}</li>
            <li><h3>Type:</h3><br></br>{location?.type}</li>
            <li><h3>Dimension:</h3><br></br>{location?.dimension}</li>
            <li><h3>Population:</h3><br></br>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo