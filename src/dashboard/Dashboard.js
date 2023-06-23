import React from 'react'
import { FaRegBookmark, FaRegCalendarAlt } from 'react-icons/fa'
import { BsBoxArrowInRight, BsBoxArrowInLeft } from 'react-icons/bs'
import { Barchart } from '../Component/Chart/Barchart'
import Areachart from '../Component/Chart/Areachart'
import Pichart from '../Component/Chart/Pichart'
import { LineCharts } from '../Component/Chart/LineCharts'



const Dashboard = () => {
  return (
    <>
    <div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5 ml-5 p-10'>

        <div className="text-white bg-blue-500 p-4 flex items-center justify-between  rounded-xl gap-10">
          <div>
            <p className="text-2xl font-bold">872</p>
            <p className="text-sm">New Booking</p>
          </div>
          <FaRegBookmark className="text-4xl" />
        </div>

        <div className="text-white bg-[#6CBC64] p-4 flex items-center justify-between  rounded-xl gap-10">
          <div>
            <p className="text-2xl font-bold">872</p>
            <p className="text-sm">Schedule Room</p>
          </div>
          <FaRegCalendarAlt className="text-4xl" />
        </div>

        <div className="text-white bg-[#FBAC08] p-4 flex items-center justify-between  rounded-xl gap-10">
          <div>
            <p className="text-2xl font-bold">872</p>
            <p className="text-sm">Check In</p>
          </div>
          <BsBoxArrowInRight className="text-4xl" />
        </div>

        <div className="text-white bg-[#FC5C04] p-4 flex items-center justify-between rounded-xl gap-10">
          <div>
            <p className="text-2xl font-bold">872</p>
            <p className="text-sm">New Booking</p>
          </div>
          <BsBoxArrowInLeft className="text-4xl" />
        </div>
        </div>


        <div className=''>
        <div>
          <Barchart />
        </div>
        <div>
          <Areachart />
        </div>
        <div>
          <Pichart />
        </div>
        <div>
          <LineCharts />
        </div>

        </div>

      </div>

    </>
  )
}

export default Dashboard