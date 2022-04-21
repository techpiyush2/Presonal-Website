import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY PORTFOLIO</h3>
            <h1>
              Hi, I’m <span>Piyush</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Professional Coder.", " Web Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>Web Developer adept in all stages
              of advanced web development.
              Knowledgeable in user interface, testing, and
              debugging processes. Bringing forth expertise
              in design, installation, testing and
              maintenance of web systems.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                  <a href="https://www.facebook.com/profile.php?id=100011015708141"> <i className='fab fa-facebook-f'></i></a>
                  </button>
                  <button className='btn_shadow'>
                  <a href="https://www.instagram.com/inoxentpiyush/"> <i className='fab fa-instagram'></i></a>
                  </button>
                  <button className='btn_shadow'>
                   <a href="https://www.linkedin.com/in/piyush-kumar-b1a962215/"> <i class='fab fa-linkedin-in'></i></a>
                  </button> <button className='btn_shadow'>
                  <a href="https://api.whatsapp.com/send?phone=919709486606&text=Hello%20Piyush"><i className='fab fa-whatsapp'></i></a>
                  </button>
                </div>
              </div>
              {/* <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div> */}
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
