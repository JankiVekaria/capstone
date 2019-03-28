import React from 'react'

export default function MoreInfo() {
  return (
    <div className="moreInfo">
      <div className="moreInfo__container">
        <div className="moreInfo__left">
          <i className="fas fa-home"></i>
          <h2 className="moreInfo__left--header">Rent a house at Toronto Rental</h2>
          <p className="moreInfo__left--text">With over 1000 available rental properties, apartments and rooms, Toronto Rental is the largest rental agent in the GTA. We help you find a new home within 24 hours, in any place, without waiting lists.</p>
        </div>

        <div className="moreInfo__right">
          <i className="fas fa-building"></i>
          <h2 className="moreInfo__right--header">Renting out a house at Toronto Rental</h2>
          <p className="moreInfo__right--text">Toronto Rental is a nationally operating organization with more than 20 branches throughout the GTA. Each location is staffed by experienced rental agents, who know the regional market through and through.</p>
        </div>
      </div>
    </div>
  )
}
