import React from 'react'

const InputSearch = ({setFindIdLocation}) => {
  
  const searchLocation = e => {
    //Prevents page from refreshing when search button is clicked
    e.preventDefault()
    //Sets the ID location to be found, argument gets input value typed by user 
    setFindIdLocation(e.target[0].value)
  }

  return (
    <form onSubmit={searchLocation}>
        {/* Since location is an integer number, users can only type numbers from 1 to 126 on input field */}
        <input type="number" min="1" max="126"/>
        <button>Search</button>
    </form>
  )
}

export default InputSearch