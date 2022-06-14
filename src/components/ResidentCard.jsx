import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useGetResidentApi from '../hooks/useGetResidentApi'

const ResidentCard = ({residentUrl}) => {
 
  //Stores resident data returned by function
  //There's no need to destructruring assignment since useGetResidentApi returns a single value
  //Argument is passed through in order to get location data from API 
  const residentData = useGetResidentApi(residentUrl)

  //Sets color styles depending on resident status
  const status = {
    alive: '#92DB1F',
    dead: '#E81B8B',
    unknown: '#03B0C9' 
  }  

  //Stores resindet status returned by API
  const residentStatus = residentData?.status.toLowerCase();
  //console.log(residentStatus)

  return (
    <article className='resident-card'>
        <img src={residentData?.image} alt="" />
        <h3 className='resident-name' style={{color: status[residentStatus]}}>{residentData?.name}</h3>
        {/* <p className='resident-status'>{residentData?.status}</p> */}
        <h4>Origin</h4>
        <p className='resident-origin' style={{color: status[residentStatus]}}>{residentData?.origin.name}</p>
        <h4>Appears in</h4>
        <p className='resident-episodes' style={{color: status[residentStatus]}}>{residentData?.episode.length} EP</p>
    </article>
  )
}

export default ResidentCard