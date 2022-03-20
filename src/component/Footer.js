import React from "react"
import logo1 from "./pic/f_logo.png"

const Footer = () => {
  return (
    <>
      <footer style={{backgroundColor: "#ff014f",marginBottom:0,color: "white",marginTop:15}}>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={logo1} alt='' style={{ width : 200 , marginBottom:-20 , paddingTop:20}} />
          </div>
          <p style={{ color: "white",paddingBottom:50,fontSize:20}}>© 2021. All rights reserved by Tech Piyush.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
