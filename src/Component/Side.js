import React,{useState} from 'react'
import { Sidebar } from './Sidebar/Sidebar';
import { FaBars,FaTimes } from 'react-icons/fa';

const Side = () => {
  const [navi, setNavi] = useState(false)
  const handleclick = () => setNavi(!navi)

  return (
    <>

      <div className='flex'>

        <Sidebar />
        <div onClick={handleclick} className='z-10'>
          {!navi ? <FaBars /> : <FaTimes />}
        </div>
      </div>

    </>
  )
}

export default Side;