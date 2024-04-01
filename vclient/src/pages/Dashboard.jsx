import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import DashSideBar from '../components/DashSideBar';
import DashProfile from '../components/DashProfile';


const Dashboard = () => {
  const [tab, setTab] = useState('');
  const location = useLocation();

  useEffect(() => {
    const urlParamas = new URLSearchParams(location.search)
    const tabFromUrl = urlParamas.get('tab')
    if (tabFromUrl) {
      setTab(tabFromUrl)
    }
  }, [location.search])

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        <DashSideBar />
        {/* sideBar */}
      </div>

      {/* profile */}

      {tab === 'profile' && <DashProfile />}
    
    </div>  
  )
}

export default Dashboard