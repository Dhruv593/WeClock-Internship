import React from 'react'
import TitleDashboard from './title/TitleDashboard'
import StatsCard from './StatsCard/StatsCard'
import AllChart from './charts/AllChart'
import CustomerReview from './customerReview/CustomerReview'

function DashBoard() {
  return (
    <>
      <TitleDashboard/>
      <StatsCard/>
      <AllChart/>
      <CustomerReview/>
    </>
  )
}

export default DashBoard
