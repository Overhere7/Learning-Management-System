import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import CourseCard from './components/CourseCard/CaurseCard'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <CourseCard/>
    </div>
  )
}

export default App


