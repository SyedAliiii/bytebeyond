import React from 'react'
import blog1Img from '../../Images/blog1.jpg'
import blog2Img from '../../Images/blog2.jpg'
import blog3Img from '../../Images/blog3.jpg'

export default function Crousel() {
    
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item ">
            <img src={blog1Img} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={blog2Img} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item active">
            <img src={blog3Img} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}
