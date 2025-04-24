import React, {useEffect} from 'react'


const Navbar = ({color}) => {

    // case 1: run on every render
  useEffect(() => {
    alert("I will run on every render")
  })

  // case 2: run only on first render
  useEffect(() => {
    alert("Welcome, I will run on first render")
  }, [])

  // case 2: run only on first render
    useEffect(() => {
     alert("color was changed from Navbarjsx")
    }, [color])

   
    
    
  return (
    <div>
      I am navbar of {color} color hehe...
    </div>
  )
}

export default Navbar
