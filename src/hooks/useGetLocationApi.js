import axios from 'axios'
import { useEffect, useState } from 'react'

//Custom hook calls API and gets data returned from
export const useGetLocationApi = findIdLocation => {

  //Stores the location returned by API, set to undefined initially
  //Its value is reseted when users type a number and click on search button
  const [location, setLocation] = useState()

  //Renders page everytime findIdLocation value is changed
  useEffect(() => {
    //Stores ID location
    let Id
    //First render, gets a random location from API since findIdLocation has no value (it's undefined)
    if (findIdLocation === undefined) {
      //Generates a random rumber to be used as ID, locations go from 1 to 126 inclusive
      Id = Math.ceil(Math.random() * 126)  
    } else {
      //Id value is set to findIdLocation when its value has been submited by user already
      Id = findIdLocation
    }

    //Calls API and gets location data based on conditional above  
    const URL = `https://rickandmortyapi.com/api/location/${Id}`
      axios.get(URL)
        .then(res => setLocation(res?.data)) //Sets location value
        .catch(err => console.log(err))

  }, [findIdLocation])

  return location
}
