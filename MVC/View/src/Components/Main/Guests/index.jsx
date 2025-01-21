import React from 'react'
import './Guests.css'
function index() {
  return (
    <div>
        <section id='guests'>
        <div className="hadmer">
        <h3>Featured Guests</h3>
      </div>
      <div className="guests-cards">
        <div className="guests-card">
            <img src="https://preview.colorlib.com/theme/podca/images/person_1.jpg.webp" alt="" />
            <h4>Megan Smith</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt porro adipisci voluptate repellendus?</p>
        </div>
        <div className="guests-card">
            <img src="https://preview.colorlib.com/theme/podca/images/person_2.jpg.webp" alt="" />
            <h4>Brooke Cagle</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt porro adipisci voluptate repellendus?</p>
        </div>
        <div className="guests-card">
            <img src="https://preview.colorlib.com/theme/podca/images/person_3.jpg.webp" alt="" />
            <h4>Philip martin</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt porro adipisci voluptate repellendus?</p>
        </div>
      </div>
        </section>
    </div>
  )
}

export default index
