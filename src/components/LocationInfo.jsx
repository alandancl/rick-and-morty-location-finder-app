import React from 'react'

const LocationInfo = ({locationData}) => {
  return (
    <article className='location-info'>
        <p><span>Name </span>{locationData?.name}</p>
        <p><span>Type </span>{locationData?.type}</p>
        <p><span>Dimension </span>{locationData?.dimension}</p>
        <p><span>Population </span>{locationData?.residents.length}</p>
    </article>
  )
}

export default LocationInfo