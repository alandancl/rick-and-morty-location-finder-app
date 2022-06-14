import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import InputSearch from './components/InputSearch'
import { useGetLocationApi } from './hooks/useGetLocationApi'
import ResidentCard from './components/ResidentCard'
import MainBanner from './components/MainBanner'

function App() {
 

  //Stores ID location submited from input, set to undefined initially  
  const [findIdLocation, setFindIdLocation] = useState()

  //Stores ID location returned by function
  //There's no need to destructruring assignment since useGetLocationApi returns a single value
  //Argument is passed through in order to get location data from API 
  const locationData = useGetLocationApi(findIdLocation)

  //console.log(locationData)
  //console.log(findIdLocation)

  return (
    <div className="App">
      <MainBanner />
      <InputSearch 
        setFindIdLocation={setFindIdLocation}
      />
      <LocationInfo 
        locationData={locationData}
      />
      <section className="residents-container">
        {
          locationData?.residents.map(residentUrl => (
            <ResidentCard 
              // Key is to residentUrl since every value must be different from each other
              key={residentUrl}
              //Each resident has its own unique URL
              residentUrl={residentUrl}
            />
          ))
        }
      </section>
      
    </div>
  )
}

export default App
