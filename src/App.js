import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Sidebar } from './Component/Sidebar'
import Navbar from './Component/Navbar'
import { AnotherForm } from './Pages/AnotherForm'
import Table from './Pages/Table'
import Dashboard from './dashboard/Dashboard'
import Table1 from './Table/Table1'

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
            <Route path='crud' element={<Table1 />} />
          </Routes>

        </div>
      </div>





    </>
  )
}

export default App