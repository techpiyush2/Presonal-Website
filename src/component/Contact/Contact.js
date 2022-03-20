import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"
import emailjs from 'emailjs-com'

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_ymxu1bn', 'template_tb5pj3r',e.taget, 'Dl4s9XK9vE-TmpK4X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

 
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Piyush Kumar</h1>
                  <p>Full Stack Web Developer </p>
                  <p>I am available for freelance work.Or anyone want to hire me connect with me via msg and call in to my account.</p> <br />
                  <p>Phone: +91 9709486606</p>
                  <p>Email: pk409678@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                     <a href="https://www.facebook.com/profile.php?id=100011015708141"> <i className='fab fa-facebook-f'></i></a>
                    </button>
                    <button className='btn_shadow'>
                    <a href="https://www.instagram.com/inoxentpiyush/"> <i className='fab fa-instagram'></i></a>
                    </button>
                    <button className='btn_shadow'>
                    <a href="https://twitter.com/techpiyush678"> <i className='fab fa-twitter'></i></a>
                    </button> <button className='btn_shadow'>
                    <a href="https://api.whatsapp.com/send?phone=919709486606&text=Hello%20Piyush"><i className='fab fa-whatsapp'></i></a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={sendEmail}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message'></textarea>
                </div>
                <button className='btn_shadow' value='Send'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right' ></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
