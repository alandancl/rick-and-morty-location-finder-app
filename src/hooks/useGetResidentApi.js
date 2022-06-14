import axios from 'axios'
import { useEffect, useState } from "react"

//Custom hook calls API and gets data returned from
const useGetResidentApi = residentUrl => {

  //Stores resident data returned by API, set to undefined initially
  //Its value is reseted when users type an ID location and click on search button 
  const [resident, setResident] = useState()
  
  //Renders page everytime findIdLocation value is changed
  //Gets residents data from API
  useEffect(() => {
    axios.get(residentUrl)
      .then(res => setResident(res.data))
      .catch(err => console.log(err))
  }, [])

  return resident 
}

export default useGetResidentApi