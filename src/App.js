import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Sidebar } from './Component/Sidebar'
import Navbar from './Component/Navbar'
import { AnotherForm } from './Pages/AnotherForm'
import Table from './Pages/Table'
import Dashboard from './dashboard/Dashboard'

const App = () => {
  return (
    <>

      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full ">
          <Navbar />
          {/* Rest of your application content */}

          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='form' element={<AnotherForm />} />
            <Route path='table' element={<Table />} />
          </Routes>

        </div>
      </div>





    </>
  )
}

export default App