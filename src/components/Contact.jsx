import React from 'react'
import map from "../site-pics/map.png";


export default function Contact() {
  return (
    <div id="contact" className="section contact-info">
      <a href="https://www.google.com/maps/place/%D0%92%D0%BA%D1%83%D1%81%D0%BE%D1%82%D0%B5%D1%80%D0%B8%D0%AF+%2F+VkusoteriA+coffee+%26+burger+place/@43.0818156,25.6313286,17z/data=!3m1!4b1!4m5!3m4!1s0x40a9261a4512b5a9:0x8f4bffc91028282c!8m2!3d43.0818156!4d25.6335173" target="_blank"><img src={map} alt="map-pic" /></a>
      <div>
        <p>ул. Хаджи Димитър 2, Велико Търново, 5000</p>
        <p>+359 98 832 9474</p>
      </div>
    </div>
  )
}
